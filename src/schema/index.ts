export type Navigation = {
  name: string
  path: string
}

export type ResponseData = {
  ongoing: ResponseNested
  completed: ResponseNested
}

export type EpisodeList = {
  title: number
  episodeId: string
  href: string
  otakudesuUrl: string
}

export type isPagination = {
  currentPage: number
  nextPage: number
  prevPage: boolean
  totalPages: number
}

export type PageState = {
  value: number
}

export type ResponseNested = {
  animeList: AnimeList[]
  href: string
  otakudesuUrl: string
}

export type AnimeList = {
  animeId: string
  episodes: number
  href: string
  lastReleaseDate: string
  otakudesuUrl: string
  poster: string
  score: string
  title: string
}

export type AnimeInfo = {
  title: string
  poster: string
  japanese: string
  score: string
  producers: string
  status: string
  episodes: number
  duration: string
  aired: string
  studios: string
  batch: string | null
  synopsis: {
    paragraphs: string[]
    connections: any[]
  }
  genreList: GenreList[]
  episodeList: EpisodeList[]
  recommendedAnimeList: RecommendedAnime[]
  pagination: null | isPagination
}

export type GenreList = {
  genreId: string
  href: string
  otakudesuUrl: string
  title: string
}

export type RecommendedAnime = {
  title: string
  poster: string
  animeId: string
  href: string
  otakudesuUrl: string
}

type StreamingServer = {
  title: string
  serverId: string
  href: string
}

type StreamingQuality = {
  title: string
  serverList: StreamingServer[]
}

export type DownloadsUrl = {
  title: string
  size: string
  urls: {
    title: string
    url: string
  }[]
}

type NextEpisode = {
  title: string
  episodeId: string
  href: string
  otakudesuUrl: string
}

type Server = {
  qualities: StreamingQuality[]
}

export type Download = {
  qualities: DownloadsUrl[]
}

export type EpisodeData = {
  title: string
  releaseTime: string
  defaultStreamingUrl: string
  hasPrevEpisode: boolean
  prevEpisode: null | any
  hasNextEpisode: boolean
  nextEpisode: NextEpisode | null
  server: Server
  downloadUrl: Download
}
