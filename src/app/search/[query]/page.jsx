"use client"
import { getAnimesData } from "@/libs/api"
import { useEffect, useState } from "react"
import AnimeList from "@/components/AnimeList"
import Loading from "@/app/loading"
import Pagination from "@/Utils/Pagination"
import Link from "next/link"

const Page = ({ params }) => {
  const { query } = params

  const [page, setPage] = useState(1)
  const [searchAnime, setSearchAnime] = useState([])
  const [hasNextPage, setHasNextPage] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const getAnimes = async () => {
    const animes = await getAnimesData(query, `?page=${page}`)
    setSearchAnime(animes?.data.results)
    setHasNextPage(animes.data.hasNextPage)
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    getAnimes()
  }, [page])

  const decodeQuery = decodeURI(query)

  return (
    <>
      <section className=" pb-4">
        {isLoading ? (
          <div className="min-h-screen">
            <Loading />
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
                  Results for '{decodeQuery}...'
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
