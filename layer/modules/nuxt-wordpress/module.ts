import { createResolver, defineNuxtModule } from '@nuxt/kit'
import type { WordpressOptions } from './types'
import { exposeModuleConfig } from './nuxt-utils'

export interface ModuleOptions extends WordpressOptions {}

export interface ModulePublicRuntimeConfig extends WordpressOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: 'nuxt-wordpress',
    compatibility: {
      nuxt: '^3.0.0',
      bridge: false,
    },
    configKey: 'wordpress',
  },

  defaults: {},

  async setup(config, nuxt) {
    exposeModuleConfig('nuxt-wordpress', config)

    const { resolve } = createResolver(import.meta.url)

    nuxt.options.build.transpile.push(
      ...[resolve('../../server'), resolve('../../components'), resolve('../../composables')]
    )
  },
})
