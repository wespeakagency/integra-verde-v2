export type TikTokTrackProperties = Record<string, string | number | boolean | undefined>

export interface TikTokQueue {
  page: () => void
  track: (eventName: string, properties?: TikTokTrackProperties) => void
}

export type TikTokWindow = Window & {
  ttq?: TikTokQueue
}
