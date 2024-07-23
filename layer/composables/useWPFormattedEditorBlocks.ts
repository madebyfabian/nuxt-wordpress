// Local Utils
const nonNullable = <T>(value: T): value is NonNullable<T> => {
  return value !== null && value !== undefined
}

// Types that will come from graphql-operations in runtime, but in this module, we don't have access to them.
type Maybe<T> = T | null
type BaseCoreBlock = Record<string, unknown> & { clientId?: Maybe<string> }
type Edge = {
  node: Record<string, unknown>
}

/**
 * Only works if you use the `WPGraphQL Content Blocks` plugin and the Nuxt `nuxt-graphql-middleware` module.
 * For transforming flat `editorBlocks` returned by `WPGraphQL Content Blocks` into a hierarchical structure.
 * @see https://faustjs.org/tutorial/get-started-with-wp-graphql-content-blocks `flatListToHierarchical` for more information on why this is needed.
 * @param edges Takes in an `edges` array, returns a new array with the `editorBlocks` property of each node transformed into a hierarchical structure.
 */
export const useWPFormattedEditorBlocks = <CB extends BaseCoreBlock, T extends Edge>(edges: T[] | undefined) => {
  try {
    if (!edges?.length) {
      throw new Error('[useFormttedEditorBlocks] No edges provided.')
    }

    const edgeMap: { node: T['node'] & { editorBlocks?: CB[] } }[] = []

    const edgesLength = edges.length
    for (let edgesKey = 0; edgesKey < edgesLength; edgesKey++) {
      const edge = edges[edgesKey]
      if (!edge?.node) {
        continue
      }
      const editorBlocks = edge.node?.editorBlocks as CB[] | undefined

      // First, check if the edge does even have a `editorBlocks` property. If not, just push it as it is to the elementMap.
      if (!editorBlocks) {
        edgeMap.push(edge)
        continue
      }

      let processedBlockIds: string[] = []

      const findAndTransformChildrenOfBlock = (block: CB) => {
        const clientId = block.clientId
        if (!clientId) {
          // Should not happen, mostly to narrow down the type.
          return undefined
        }
        if (processedBlockIds.includes(clientId)) {
          // We have already processed this block.
          return undefined
        }

        // We have to find every child of the current block.
        let childBlocks = editorBlocks.filter(child => child.parentClientId === clientId)

        processedBlockIds.push(clientId)

        // Now, loop through every child and check if they have childs either.
        childBlocks = childBlocks
          .map(childBlock => {
            return findAndTransformChildrenOfBlock(childBlock)
          })
          .filter(nonNullable)

        return {
          ...block,
          children: childBlocks,
        }
      }

      // We have to process it.
      const finalEditorBlocks = editorBlocks
        .map(block => {
          return findAndTransformChildrenOfBlock(block)
        })
        .filter(nonNullable)

      edgeMap.push({
        ...edge,
        node: {
          ...edge.node,
          editorBlocks: finalEditorBlocks,
        },
      })
    }

    return edgeMap
  } catch (error) {
    console.error(error)
    return []
  }
}
