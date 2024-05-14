import { AnimeInfo } from "@/schema"
import React, { FC } from "react"

interface InfoAnimeProps {
  data: AnimeInfo
}

const InfoAnime: FC<InfoAnimeProps> = ({ data }) => {
  return (
    <div className="flex flex-col  md:flex-row md:justify-center md:gap-4 xl:mx-4 ">
      <div className="md:mt-5">
        <img
          src={data.poster}
          alt="anime image"
          className="xl:my-6 my-0 mx-auto w-64 max-h-96"
        />
      </div>
      <div className="mx-5 my-3 md:mx-0   md:w-[450px] xl:w-full xl:max-w-[1000px]">
        <h1 className="text-secondary text-2xl">{data.judul}</h1>
        <p>
          <span className="text-green-700 font-bold"> Description </span> :
          {"- "}
          {data.sinopsis}
        </p>
        <h1>
          <span className="text-green-700 font-bold"> Release Date </span>:{" "}
          {data.tanggalRilis}
        </h1>
        <p>
          <span className="text-green-700 font-bold"> Type </span>: {data.tipe}
        </p>
        <h1>
          <span className="text-green-700 font-bold"> Total Episodes </span>:{" "}
          {data.totalEpisode}
        </h1>
        <h1>
          <span className="text-green-700 font-bold"> Score </span>: {data.skor}
        </h1>
        <h1>
          <span className="text-green-700 font-bold"> Studio </span>:{" "}
          {data.studio}
        </h1>
        <h1>
          <span className="text-green-700 font-bold">Genres</span>:{" "}
          {data.genres.map((genre, index) => (
            <span key={index}>
              {genre.judul}
              {index !== data.genres.length - 1 && ", "}
            </span>
          ))}
        </h1>
      </div>
    </div>
  )
}

export default InfoAnime
