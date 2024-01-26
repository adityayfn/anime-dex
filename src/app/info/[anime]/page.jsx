"use client"

import { getAnimesData } from "@/libs/api"
import { useEffect, useState } from "react"
import Loading from "@/app/loading"
import InfoAnime from "@/components/InfoAnime"
import EpisodesList from "@/components/EpisodesList"
import Header from "@/components/EpisodesList/Header"
import Errorpage from "@/app/not-found"
import HeaderPage from "@/components/HeaderPage"

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
    <section className="pt-2 pb-6">
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          {isError ? (
            <Errorpage />
          ) : (
            <div>
              <HeaderPage title={"Anime Info"} />
              <InfoAnime data={data} />

              {filteredEpisodes.length != 0 && (
                <div className="mt-5 py-10 md:mx-4">
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
          )}
        </div>
      )}
    </section>
  )
}

export default page
