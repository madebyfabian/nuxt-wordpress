export default defineAppConfig({
  myProject: {
    name: "Nuxt WordPress",
  },
});

declare module "@nuxt/schema" {
  interface AppConfigInput {
    myProject?: {
      /** Project name */
      name?: string;
    };
  }
}
