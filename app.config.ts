export default defineAppConfig({
  wordpress: {
    name: "Nuxt WordPress",
  },
})

declare module "@nuxt/schema" {
  interface AppConfigInput {
    wordpress?: {
      /** Project name */
      name?: string
    }
  }
}
