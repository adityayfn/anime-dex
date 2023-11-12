"use client"

import Loading from "@/app/loading"
import EpisodesList from "@/components/EpisodesList"
import Header from "@/components/EpisodesList/Header"
import HeaderPage from "@/components/HeaderPage"
import Iframe from "@/components/Streaming/Iframe"
import Server from "@/components/Streaming/Server"
import { getAnimesData } from "@/libs/api"
import { useEffect, useState } from "react"

const page = ({ params }) => {
  const { id } = params

  const [animeId, setAnimeId] = useState("")

  const [linkStreamActive, setLinkStreamActive] = useState("")
  const [buttonIndex, setButtonIndex] = useState(2)

  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  const getEpisodes = async () => {
    const animes = await getAnimesData("info", `/${animeId}`)
    setData(animes?.data)
  }

  const [servers, setServers] = useState([])

  const title = id.replace(/-/g, " ")
  const capitalize = (str) => {
    const lower = str.toLowerCase()
    return str.charAt(0).toUpperCase() + lower.slice(1)
  }

  const getServer = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/servers/${id}`
    )
    const server = await res.json()
    setServers(server)
    setLinkStreamActive(server[2].url)
  }

  const filteredEpisodes = data?.episodes?.filter((eps) =>
    String(eps.number).includes(searchQuery.toLowerCase())
  )

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      setAnimeId(localStorage.getItem("animeId"))
    }
    if (animeId != "") getEpisodes()

    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [animeId])

  useEffect(() => {
    getServer()
  }, [])

  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <div>
          <HeaderPage title={"Streaming Anime"} />

          <div className="mx-2 xl:flex xl:gap-4 xl:justify-center ">
            <div className="xl:order-2">
              <div className="title">
                <h1 className="text-xl text-secondary">{capitalize(title)}</h1>
              </div>
              <div className="my-10 mx-4">
                <Iframe linkStreamActive={linkStreamActive} />

                <div className="flex flex-col">
                  <h1 className="text-xl font-bold text-secondary mt-3">
                    Choose Server:
                  </h1>
                  <div className="flex flex-wrap gap-4 my-3">
                    {servers?.map((server, index) => (
                      <Server
                        key={index}
                        index={index}
                        server={server}
                        buttonIndex={buttonIndex}
                        setLinkStreamActive={setLinkStreamActive}
                        setButtonIndex={setButtonIndex}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="xl:order-1 xl:w-[25rem]">
              <Header
                data={data}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <EpisodesList episodeList={filteredEpisodes} />
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default page
