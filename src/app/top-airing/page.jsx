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
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    getAnimes()
  }, [page])
  return (
    <section>
      <HeaderPage title={"Top Airing"} />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-10">
          <AnimeList api={data} />
          <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
        </div>
      )}
    </section>
  )
}

export default page
