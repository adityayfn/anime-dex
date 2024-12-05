"use client"
import Pagination from "@/Utils/Pagination"
import SkeletonCard from "@/components/AnimeCard/SkeletonCard"
import React, { useState, useEffect } from "react"
import HeaderPage from "@/components/HeaderPage"
import AnimeCard from "@/components/AnimeCard"
import { AnimeList, PageState, isPagination } from "@/schema"
import { API_URL } from "@/app/constant"

const OnGoingPage = () => {
  const [page, setPage] = useState<PageState>({ value: 1 })
  const [data, setData] = useState<AnimeList[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isPagination, setIsPagination] = useState<isPagination>()

  const getAnimes = async () => {
    const res = await fetch(`/api/animes/on-going?page=${page.value}`)
    console.log(res)
    if (!res.ok) {
      throw new Error("Failed fetching datas")
    }
    const animes = await res.json()

    setIsPagination(animes.pagination)
    setData(animes?.data.animeList)
    setIsLoading(false)
  }

  useEffect(() => {
    getAnimes()
  }, [page])
  return (
    <section className="pb-4">
      <HeaderPage title={"On Going"} />
      {isLoading ? (
        <SkeletonCard
          dummy={[
            0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          ]}
        />
      ) : (
        <>
          <div className="flex flex-col gap-10">
            <AnimeCard api={data} />
            <Pagination
              page={page}
              setPage={setPage}
              isPagination={isPagination!!}
            />
          </div>
        </>
      )}
    </section>
  )
}

export default OnGoingPage
