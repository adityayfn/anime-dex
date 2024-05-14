"use client"
import { FC, useEffect, useState } from "react"
import Link from "next/link"
import SkeletonList from "@/components/AnimeCard/SkeletonCard"
import AnimeCard from "@/components/AnimeCard"
import { Anime } from "@/schema"
import { API_URL } from "@/app/constant"

interface IProps {
  params: {
    query: string
  }
}

const Page: FC<IProps> = ({ params }) => {
  const { query } = params
  const [searchAnimes, setSearchAnimes] = useState<Anime[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getAnimes = async () => {
    const res = await fetch(`${API_URL}/search?q=${query}`)
    const animes = await res.json()
    setSearchAnimes(animes.data)
    setIsLoading(false)
  }

  useEffect(() => {
    getAnimes()
  }, [])

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
            {searchAnimes === null ? (
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
                <AnimeCard api={searchAnimes} />
              </div>
            )}
          </div>
        )}
      </section>
    </>
  )
}
export default Page
