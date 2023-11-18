import { joinURL, withHttps, withoutLeadingSlash, withLeadingSlash } from 'ufo'
import { useRuntimeConfig } from '#imports'

/**
 * Removes host and protocol from an asset url.
 * @param fullUrl The full url of the asset, e.g. https://example.com/wp-content/uploads/2021/01/image.jpg
 * @returns The relative url of the asset, e.g. /wp-content/uploads/2021/01/image.jpg
 */
const withoutWPHost = (fullUrl: string) => {
  const runtimeConfig = useRuntimeConfig()
  if (!fullUrl) return ''
  const wpHostWithProtocol = withHttps(runtimeConfig.public.wordpress.baseUrl)
  const relativeUrl = fullUrl.replace(wpHostWithProtocol, '')
  return withLeadingSlash(relativeUrl)
}

/**
 * Builds a CDN url from a relative url.
 * @param relativeUrl The relative url of the asset, e.g. /wp-content/uploads/2021/01/image.jpg
 * @returns The final CDN url of the asset
 */
const buildCdnUrl = ({
  fullWPUrl,
  relativeUrl,
  builderPath,
}: {
  fullWPUrl?: string
  relativeUrl?: string
  builderPath: string
}) => {
  const runtimeConfig = useRuntimeConfig()
  if (!relativeUrl && !fullWPUrl) return ''

  const realRelativeUrl = fullWPUrl ? withoutWPHost(fullWPUrl) : relativeUrl

  /** @TODO replace this with @twicpics/url maybe */
  const twicpicsBaseUrl = withHttps(runtimeConfig.public.wordpress.twicpicsDomain)
  const twicpicsPath = builderPath
  const twicpicsSrc = withoutLeadingSlash(realRelativeUrl)

  return joinURL(twicpicsBaseUrl, twicpicsPath, twicpicsSrc)
}

/**
 * Different methods for handling image asset urls.
 */
export const useWPImage = () => {
  return { withoutWPHost, buildCdnUrl }
}
