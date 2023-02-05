# Nuxt WordPress

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

> WordPress Headless Layer for [Nuxt 3](https://nuxt.com). Allows you to quickly get started building websites with WordPress as a headless CMS.

> **Warning**
> This layer is in **beta**. While the first integrations already work, it's WIP, so things can change anytime.
> Please report any issues/feature requests you have.

- [📦 &nbsp;NPM](https://www.npmjs.com/package/nuxt-wordpress)

## Quick Setup

1. Add `nuxt-wordpress` dependency to your project

```bash
# Using pnpm
pnpm add -D nuxt-wordpress

# Using yarn
yarn add --dev nuxt-wordpress

# Using npm
npm install --save-dev nuxt-wordpress
```

2. Add `nuxt-wordpress` to the `extends` section of `nuxt.config.ts`

```js
export default defineNuxtConfig({
  extends: ['nuxt-wordpress'],

  runtimeConfig: {
    wordpress: {
      baseUrl: 'https://your-wordpress-site.com',
      twicpicsDomain: twicpicsDomain,
      twicpicsPaths: [
        {
          path: '/example/',
          source: 'https://your-wordpress-site.com',
        },
      ],
    },
  },
})
```

That's it! You can now use Nuxt WordPress in your Nuxt app ✨

<!-- Badges -->

[npm-version-src]: https://img.shields.io/npm/v/nuxt-wordpress/latest.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-version-href]: https://npmjs.com/package/nuxt-wordpress
[npm-downloads-src]: https://img.shields.io/npm/dm/nuxt-wordpress.svg?style=flat&colorA=18181B&colorB=28CF8D
[npm-downloads-href]: https://npmjs.com/package/nuxt-wordpress
[license-src]: https://img.shields.io/npm/l/nuxt-wordpress.svg?style=flat&colorA=18181B&colorB=28CF8D
[license-href]: https://npmjs.com/package/nuxt-wordpress
