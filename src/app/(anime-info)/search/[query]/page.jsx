"use client"
import { getAnimesData } from "@/libs/api"
import { useEffect, useState } from "react"
import AnimeList from "@/components/AnimeList"
import Pagination from "@/Utils/Pagination"
import Link from "next/link"
import SkeletonList from "@/components/AnimeList/SkeletonList"

const Page = ({ params }) => {
  const { query } = params

  const [page, setPage] = useState(1)
  const [searchAnime, setSearchAnime] = useState([])
  const [hasNextPage, setHasNextPage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getAnimes = async () => {
    const animes = await getAnimesData(query, `?page=${page}`)
    console.log(animes)
    setSearchAnime(animes?.data.results)
    setHasNextPage(animes.data.hasNextPage)
    setIsLoading(false)
  }

  useEffect(() => {
    getAnimes()
  }, [page])

  const decodeQuery = decodeURI(query)

  return (
    <>
      <section className=" pb-4">
        {isLoading ? (
          <div className="min-h-screen mt-[4.2rem]">
            <SkeletonList dummy={[0, 1, 2, 3, 4, 6, 7, 8, 9, 10, 11, 12]} />
          </div>
        ) : (
          <div>
            {searchAnime.length < 1 ? (
              <div className="min-h-[50vh] flex flex-col justify-center items-center">
                <h1 className="text-2xl font-bold">
                  No results for '{decodeQuery}'
                </h1>
                <Link href={"/"} className="text-secondary underline">
                  Go Home
                </Link>
              </div>
            ) : (
              <div className="flex flex-col gap-10 ">
                <h1 className="text-xl mx-4 mt-4">
                  Results for '
                  <span className="text-secondary">{decodeQuery}</span>'
                </h1>
                <AnimeList api={searchAnime} />
                <Pagination
                  page={page}
                  setPage={setPage}
                  hasNextPage={hasNextPage}
                />
              </div>
            )}
          </div>
        )}
      </section>
    </>
  )
}
export default Page
