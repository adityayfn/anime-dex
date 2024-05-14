import Link from "next/link"
import React, { FC } from "react"

interface EpisodeListProps {
  episodesList: any
  nameId: string
}

const EpisodesList: FC<EpisodeListProps> = ({ episodesList, nameId }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-4 max-h-72 overflow-y-auto xl:max-h-[28rem] px-2  ">
      {[...episodesList]?.reverse().map((eps: any, index: number) => (
        <Link
          href={`/anime/${eps.slug}`}
          key={index}
          className={`text-secondary w-28 hover:bg-secondary hover:text-neutral btn transition-all ${
            nameId === eps.slug ? "bg-secondary text-slate-900" : ""
          }`}
        >
          <p> {eps.slug.replace(/-/g, " ").toUpperCase()}</p>
        </Link>
      ))}
    </div>
  )
}

export default EpisodesList
