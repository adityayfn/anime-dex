import { EpisodeList } from "@/schema"
import Link from "next/link"
import React, { FC } from "react"

interface EpisodeListProps {
  episodesList: EpisodeList[]
  nameId: string
}

const EpisodesList: FC<EpisodeListProps> = ({ episodesList, nameId }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-4 max-h-72 overflow-y-auto xl:max-h-[28rem] px-2  ">
      {[...episodesList]?.reverse().map((item: any, index: number) => (
        <Link
          href={`/anime/${item.episodeId}`}
          key={index}
          className={`text-secondary w-28 min-h-20 hover:bg-secondary hover:text-neutral btn transition-all ${
            nameId === item.episodeId ? "bg-secondary text-slate-900" : ""
          }`}
        >
          <p> {item.episodeId.replace(/-/g, " ").toUpperCase()}</p>
        </Link>
      ))}
    </div>
  )
}

export default EpisodesList
