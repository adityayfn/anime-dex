"use client"

import EpisodesList from "@/components/EpisodesList"
import Header from "@/components/EpisodesList/Header"
import HeaderPage from "@/components/HeaderPage"
import SkeletonInfo from "@/components/InfoAnime/SkeletonInfo"
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
    console.log(animes)
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
    }, 500)
  }, [animeId])

  useEffect(() => {
    getServer()
  }, [])

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
            <div className="xl:order-1 xl:w-[28%]">
              <Header
                data={data}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
              <EpisodesList episodeList={filteredEpisodes} nameId={id} />
            </div>
          </div>
        </>
      )}
    </section>
  )
}

export default page
