"use client"

import { API_URL } from "@/app/constant"
import DownloadUrl from "@/components/DownloadUrl"
import EpisodesList from "@/components/EpisodesList"
import Header from "@/components/EpisodesList/Header"
import HeaderPage from "@/components/HeaderPage"
import SkeletonInfo from "@/components/InfoAnime/SkeletonInfo"
import Iframe from "@/components/Streaming/Iframe"

import { Download, DownloadsUrl, EpisodeList } from "@/schema"
import Link from "next/link"
import { FC, useEffect, useState } from "react"

interface PageProps {
  params: {
    id: string
  }
}

const page: FC<PageProps> = ({ params }) => {
  const { id } = params

  const [animeId, setAnimeId] = useState<string>("")

  const [linkStreamActive, setLinkStreamActive] = useState<string>("")
  const [nextEps, setNextEps] = useState<null | EpisodeList>()
  const [prevEps, setPrevEps] = useState<null | EpisodeList>()
  const [downloadUrl, setDownloadUrl] = useState<Download>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const [episodesList, setEpisodesList] = useState<EpisodeList[]>([])

  // "tlng-episode-10-sub-indo"

  const getEpisodes = async () => {
    const res = await fetch(`/api/animes/episode?q=${id}`)
    if (!res.ok) {
      throw new Error("Failed fetching datas")
    }
    const anime = await res.json()
    console.log(anime)
    setDownloadUrl(anime?.data?.downloadUrl)
    setEpisodesList(anime.data.info.episodeList)
    setPrevEps(anime?.data?.episodeSebelumnya)
    setNextEps(anime?.data?.episodeSelanjutnya)
    setLinkStreamActive(anime.data.defaultStreamingUrl)
  }

  const title = id.replace(/-/g, " ")
  const capitalize = (str: string) => {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
  }

  useEffect(() => {
    const storedAnimeId =
      typeof window !== "undefined" && window.localStorage
        ? localStorage.getItem("animeId")
        : null

    setAnimeId(storedAnimeId !== null ? storedAnimeId : "")
  }, [])

  useEffect(() => {
    if (animeId !== "") getEpisodes()

    setTimeout(() => {
      setIsLoading(false)
    }, 500)
  }, [animeId])

  return (
    <section>
      <HeaderPage title={"Streaming Anime"} />
      {isLoading ? (
        <SkeletonInfo />
      ) : (
        <>
          <div className="mx-4 xl:flex xl:gap-4  ">
            <div className="xl:order-2 xl:w-[72%]">
              <div className="title">
                <h1 className="text-2xl text-secondary">{capitalize(title)}</h1>
              </div>
              <div className="my-10 mx-4">
                <Iframe linkStreamActive={linkStreamActive} />
                <div className="flex justify-between my-3">
                  {prevEps !== null && (
                    <Link
                      href={`/anime/${prevEps?.episodeId}`}
                      className="btn btn-secondary"
                    >
                      Previous Episode
                    </Link>
                  )}
                  {nextEps !== null && (
                    <Link
                      href={`/anime/${nextEps?.episodeId}`}
                      className="btn btn-secondary"
                    >
                      Next Episode
                    </Link>
                  )}
                </div>
                <DownloadUrl downloadUrl={downloadUrl} />
              </div>
            </div>

            <div className="xl:order-1 xl:w-[28%] mt-4">
              <Header />
              <EpisodesList episodesList={episodesList} nameId={id} />
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default page
