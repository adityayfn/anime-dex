"use client"
import { useEffect, useState } from "react"
import AnimeList from "@/components/AnimeList"
import { getAnimesData } from "@/libs/api"
import Pagination from "@/Utils/Pagination"
import HeaderPage from "@/components/HeaderPage"
import SkeletonList from "@/components/AnimeList/SkeletonList"

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
          <SkeletonList
            dummy={[
              0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            ]}
          />
        ) : (
          <>
            <div className="flex flex-col gap-10 ">
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
    </>
  )
}
export default Page
