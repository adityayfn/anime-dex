"use client"
import { useEffect, useState } from "react"
import AnimeList from "@/components/AnimeList"
import { getAnimesData } from "@/libs/api"
import Pagination from "@/Utils/Pagination"
import Loading from "./loading"
import HeaderPage from "@/components/HeaderPage"

const Page = () => {
  const [page, setPage] = useState(1)
  const [data, setData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [hasNextPage, setHasNextPage] = useState(false)

  const getAnimes = async () => {
    const animes = await getAnimesData("recent-episodes", `?page=${page}`)
    setData(animes?.data.results)
    setHasNextPage(animes?.data.hasNextPage)
    setIsLoading(false)
  }
  useEffect(() => {
    getAnimes()
  }, [page])

  return (
    <>
      <section className="pb-4">
        <HeaderPage title={"Home"} />
        {isLoading ? (
          <Loading />
        ) : (
          <div className="flex flex-col gap-10">
            <AnimeList api={data} />
            <Pagination
              page={page}
              setPage={setPage}
              hasNextPage={hasNextPage}
            />
          </div>
        )}
      </section>
    </>
  )
}
export default Page
