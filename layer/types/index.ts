type TwicpicsPathsConfigEntry = {
  /** The path after the TwicPics Domain. e.g. `/my-images/` */
  path: string

  /** The URL where it leads to, e.g. https://example.com/my-raw-images/ */
  source: number
}

export type WordpressRuntimeConfig = {
  test: string
  twicpicsDomain: string
  twicpicsPaths: TwicpicsPathsConfigEntry[]
}
