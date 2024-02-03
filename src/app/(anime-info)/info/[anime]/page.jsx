"use client"

import { getAnimesData } from "@/libs/api"
import { useEffect, useState } from "react"
import InfoAnime from "@/components/InfoAnime"
import EpisodesList from "@/components/EpisodesList"
import Header from "@/components/EpisodesList/Header"
import Errorpage from "../../../(anime-list)/not-found"
import HeaderPage from "@/components/HeaderPage"
import SkeletonInfo from "@/components/InfoAnime/SkeletonInfo"

const page = ({ params }) => {
  const { anime } = params

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [isError, setIsError] = useState(false)

  const getInfoAnime = async () => {
    const animes = await getAnimesData("info", `/${anime}`)
    if (animes.status == 200) setData(animes.data)
    else setIsError(true)
    setIsLoading(false)
  }
  const filteredEpisodes = data?.episodes?.filter((eps) =>
    String(eps.number).includes(searchQuery.toLowerCase())
  )

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
              <div className="flex flex-col xl:flex-row">
                <div className="xl:w-[30%]  mx-2 order-2 xl:order-1">
                  {filteredEpisodes.length != 0 && (
                    <div className="md:mx-4">
                      <Header
                        data={data}
                        searchQuery={searchQuery}
                        setSearchQuery={setSearchQuery}
                      />

                      <div
                        className={`episode-list ${
                          filteredEpisodes.length <= 10
                            ? "min-h-[10vh]"
                            : "min-h-[30vh]"
                        }`}
                      >
                        <EpisodesList episodeList={filteredEpisodes} />
                      </div>
                    </div>
                  )}
                </div>

                <div
                  className={`${
                    filteredEpisodes.length == 0 ? "w-full" : "xl:w-[70%]"
                  }  order-1 xl:order-2`}
                >
                  <InfoAnime data={data} />
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
