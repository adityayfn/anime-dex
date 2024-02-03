import Link from "next/link"
import React from "react"

const EpisodesList = ({ episodeList, nameId }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-4 max-h-72 overflow-y-auto xl:max-h-[28rem] px-2 ">
      {episodeList?.map((eps, index) => (
        <Link
          href={`/anime/${eps.id}`}
          key={index}
          className={`text-secondary py-1 px-3 w-28 hover:bg-secondary hover:text-neutral btn  transition-all ${
            nameId === eps.id ? "bg-secondary text-slate-900" : ""
          }`}
        >
          <p>EPS {eps.number}</p>
        </Link>
      ))}
    </div>
  )
}

export default EpisodesList
