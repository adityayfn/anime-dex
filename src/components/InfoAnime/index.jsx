import React from "react"

const InfoAnime = ({ data }) => {
  return (
    <div className="flex flex-col mt-5 md:flex-row md:justify-center md:gap-4 xl:mx-4">
      <div className="">
        <img
          src={data.image}
          alt="anime image"
          className="xl:my-6 my-0 mx-auto w-64 max-h-96"
        />
      </div>
      <div className="mx-5 my-3 md:mx-0   md:w-[450px] xl:w-full xl:max-w-[1000px]">
        <h1 className="text-secondary text-2xl">{data.title}</h1>
        <p>
          <span className="text-green-700 font-bold"> Description </span> :{" "}
          {data.description}
        </p>
        <h1>
          <span className="text-green-700 font-bold"> Release Date </span>:{" "}
          {data.releaseDate}
        </h1>
        <p>
          <span className="text-green-700 font-bold"> Status </span>:{" "}
          {data.status}
        </p>
        <h1>
          <span className="text-green-700 font-bold"> Total Episodes </span>:{" "}
          {data.totalEpisodes}
        </h1>
      </div>
    </div>
  )
}

export default InfoAnime
