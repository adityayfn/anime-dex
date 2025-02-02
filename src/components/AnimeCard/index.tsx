import { AnimeList, ResponseNested } from "@/schema"
import Image from "next/image"
import Link from "next/link"
import { FC } from "react"

interface AnimeCardProps {
  api: AnimeList[]
}

const AnimeCard: FC<AnimeCardProps> = ({ api }) => {
  console.log(api)
  const sendId = (id: string) => {
    localStorage.setItem("animeId", id)
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 xl:mx-5 ">
      {api?.map((anime: AnimeList, index: number) => (
        <Link
          href={`/info/${anime.animeId}`}
          className=" card w-36 h-52 md:w-40 md:h-64  bg-neutral cursor-pointer group"
          key={index}
          onClick={() => sendId(anime.animeId)}
        >
          <Image src={anime.poster} fill loading="lazy" alt={anime.poster} />

          <div className=" absolute bottom-0 bg-neutral w-full opacity-90 p-3 flex flex-col justify-center items-center group-hover:text-secondary">
            <h1 className=" text-center font-bold ">{anime.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AnimeCard
