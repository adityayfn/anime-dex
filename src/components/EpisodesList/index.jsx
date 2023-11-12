import Link from "next/link"
import React from "react"

const EpisodesList = ({ episodeList }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-4 max-h-72 overflow-y-auto xl:max-h-[28rem]">
      {episodeList?.map((eps, index) => (
        <Link
          href={`/anime/${eps.id}`}
          key={index}
          className="border-2 border-black rounded-md text-secondary py-1 px-3 w-28 hover:bg-secondary hover:text-neutral transition-all"
        >
          <p>EPS {eps.number}</p>
        </Link>
      ))}
    </div>
  )
}

export default EpisodesList
