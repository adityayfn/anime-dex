"use client"
import Pagination from "@/Utils/Pagination"
import { API_URL } from "@/app/constant"
import AnimeCard from "@/components/AnimeCard"
import SkeletonCard from "@/components/AnimeCard/SkeletonCard"
import GenreTabs from "@/components/GenresTabs"
import HeaderPage from "@/components/HeaderPage"
import { Anime, PageState, isPagination } from "@/schema"
import React, { FC, useEffect, useState } from "react"

interface TabState {
  value: string
}

const AnimesByGenrePage = () => {
  const [data, setData] = useState<Anime[]>([])
  const [isPagination, setIsPagination] = useState<isPagination>()
  const [page, setPage] = useState<PageState>({ value: 1 })
  const [tabActive, setTabActive] = useState<TabState>({ value: "action" })
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getAnimesByGenre = async () => {
    const res = await fetch(
      `${API_URL}/genres/${tabActive.value}?page=${page.value}`
    )
    const animes = await res.json()

    setIsPagination(animes.pagination)
    setData(animes.data)
    setIsLoading(false)
  }

  useEffect(() => {
    getAnimesByGenre()
  }, [tabActive, page])

  useEffect(() => {
    setPage({ value: 1 })
  }, [tabActive])

  return (
    <section className="pb-4">
      <HeaderPage title="Animes By Genre" />
      <div className="flex gap-2 mt-4   overflow-auto  md:flex-wrap mb-10 md:justify-center ">
        <GenreTabs tabActive={tabActive} setTabActive={setTabActive} />
      </div>
      {isLoading ? (
        <SkeletonCard
          dummy={[
            0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
          ]}
        />
      ) : (
        <>
          <AnimeCard api={data} />
          <Pagination
            page={page}
            setPage={setPage}
            isPagination={isPagination!!}
          />
        </>
      )}
    </section>
  )
}

export default AnimesByGenrePage
