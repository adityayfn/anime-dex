"use client"
import { useEffect, useState } from "react"
import InfoAnime from "@/components/InfoAnime"
import EpisodesList from "@/components/EpisodesList"
import Header from "@/components/EpisodesList/Header"
import Errorpage from "../../../(anime-list)/not-found"
import HeaderPage from "@/components/HeaderPage"

import { AnimeInfo, EpisodeList } from "@/schema"
import SkeletonInfo from "@/components/InfoAnime/SkeletonInfo"
import { API_URL } from "@/app/constant"

const page = ({ params }: any) => {
  const { anime } = params

  const [data, setData] = useState<AnimeInfo>()
  const [episodesList, setEpisodesList] = useState<EpisodeList[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)

  const getInfoAnime = async () => {
    const res = await fetch(`/api/animes/info?q=${anime}`)
    console.log(res)
    if (!res.ok) {
      throw new Error("Failed fetching datas")
    }
    const animes = await res.json()
    console.log(animes)

    setEpisodesList(animes?.data?.episodeList)
    setData(animes.data)
    setIsLoading(false)
  }

  useEffect(() => {
    getInfoAnime()
  }, [])

  return (
    <section>
      <HeaderPage title={"Anime Info"} />
      {isLoading ? (
        <SkeletonInfo />
      ) : (
        <div>
          {isError ? (
            <Errorpage />
          ) : (
            <>
              <div className="flex flex-col xl:flex-row ">
                <div className="xl:w-[30%]  mx-2  order-2 xl:order-1">
                  <Header />

                  <EpisodesList episodesList={episodesList} nameId={anime} />
                </div>

                <div
                  className={`${
                    data?.episodeList?.length == 0
                      ? "w-full"
                      : "xl:w-[70%] xl:order-2"
                  }    `}
                >
                  <InfoAnime data={data!!} />
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </section>
  )
}

export default page
