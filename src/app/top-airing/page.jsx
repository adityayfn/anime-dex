"use client"
import Pagination from "@/Utils/Pagination"
import AnimeList from "@/components/AnimeList"
import { getAnimesData } from "@/libs/api"
import React, { useState, useEffect } from "react"
import Loading from "../loading"
import HeaderPage from "@/components/HeaderPage"

const page = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasNextPage, setHasNextPage] = useState(false)

  const getAnimes = async () => {
    const animes = await getAnimesData("top-airing", `?page=${page}`)
    setData(animes?.data.results)
    setHasNextPage(animes?.data.hasNextPage)
    setIsLoading(false)
  }

  useEffect(() => {
    getAnimes()
  }, [page])
  return (
    <section>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="xl:-mt-20">
            <img
              src="/jjk.jpg"
              className="w-full h-56 md:h-80 xl:h-full"
              loading="lazy"
            />
          </div>
          <HeaderPage title={"Top Airing"} />

          <div className="flex flex-col gap-10">
            <AnimeList api={data} />
            <Pagination
              page={page}
              setPage={setPage}
              hasNextPage={hasNextPage}
            />
          </div>
        </>
      )}
    </section>
  )
}

export default page
