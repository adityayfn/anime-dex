"use client"
import { useEffect, useState } from "react"
import HeaderPage from "@/components/HeaderPage"
import SkeletonList from "@/components/AnimeCard/SkeletonCard"
import { ResponseData } from "@/schema"
import AnimeCard from "@/components/AnimeCard"
import { API_URL } from "../constant"

const Page = () => {
  const [data, setData] = useState<ResponseData>()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const getAnimes = async () => {
    const res = await fetch(`${API_URL}/home`)
    const animes = await res.json()
    setData(animes.data)
    setIsLoading(false)
  }
  useEffect(() => {
    getAnimes()
  }, [])

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
          <div>
            <div className="flex flex-col gap-10 ">
              <AnimeCard api={data?.onGoing!!} />
            </div>
          </div>
        )}
      </section>
    </>
  )
}
export default Page
