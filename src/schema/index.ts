export type Navigation = {
  name: string
  path: string
}

export type GenreInfo = {
  judul: string
  slug: string
  href: string
  otakudesuUrl: string
}

export type AnimesInfo = {
  judul: string
  slug: string
  href: string
  poster: string
  episodeTerbaru: string
  hariRilis: string
  tanggalRilisTerbaru: string
  otakudesuUrl: string
}
export type Anime = {
  judul: string
  slug: string
  href: string
  poster: string
  rating: string
  jumlahEpisode: string
  studio: string
  musim: string
  otakudesuUrl: string
  genres: GenreInfo[]
  sinopsis: string[]
}

export type ResponseData = {
  onGoing: AnimesInfo[]
  completed: AnimesInfo[]
}

export type EpisodeList = {
  judul: string
  slug: string
  href: string
  otakudesuUrl: string
  tanggalRilis: string
}
export type AnimeInfo = {
  judul: string
  japanese: string
  skor: string
  produser: string
  tipe: string
  status: string
  totalEpisode: string
  durasi: string
  tanggalRilis: string
  studio: string
  poster: string
  genres: GenreInfo[]
  sinopsis: string[]
  batch: any[]
  episodeList: EpisodeList[]
}

export type isPagination = {
  currentPage: number
  nextPage: number
  prevPage: boolean
  totalPages: number
}

export interface PageState {
  value: number
}

export type DownloadsUrl = {
  [key: string]: {
    judul: string
    url: string
  }[]
}
