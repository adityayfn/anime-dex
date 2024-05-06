"use client"
import Pagination from "@/Utils/Pagination"
import AnimeList from "@/components/AnimeList"
import { getAnimesData } from "@/libs/api"
import React, { useState, useEffect } from "react"
import HeaderPage from "@/components/HeaderPage"
import SkeletonList from "@/components/AnimeList/SkeletonList"

const page = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasNextPage, setHasNextPage] = useState(false)

  const getAnimes = async () => {
    const animes = await getAnimesData("top-airing", `?page=${page}`)
    if (animes?.data.results.length != 0) {
      setData(animes?.data.results)
      setHasNextPage(animes?.data.hasNextPage)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getAnimes()
  }, [page])
  return (
    <section className="pb-4">
      <HeaderPage title={"Top Airing"} />
      {isLoading ? (
        <SkeletonList
          dummy={[
            0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          ]}
        />
      ) : (
        <>
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
