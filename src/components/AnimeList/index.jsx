import Image from "next/image"
import Link from "next/link"

const AnimeList = ({ api }) => {
  const sendId = (id) => {
    localStorage.setItem("animeId", id)
  }

  return (
    <div className="flex flex-wrap justify-center gap-3 xl:mx-5 ">
      {api.map((anime, index) => (
        <Link
          href={`/info/${anime.id}`}
          className=" card w-44 h-64  bg-neutral cursor-pointer group"
          key={index}
          onClick={() => sendId(anime.id)}
        >
          <Image src={anime.image} fill loading="lazy" alt={anime.image} />

          <div className=" absolute bottom-0 bg-neutral w-full opacity-90 p-3 flex flex-col justify-center items-center group-hover:text-secondary">
            <h1 className=" text-center font-bold ">{anime.title}</h1>
            {anime.episodeNumber ? (
              <p>({anime.episodeNumber} eps)</p>
            ) : (
              <p>{anime.releaseDate}</p>
            )}
          </div>
        </Link>
      ))}
    </div>
  )
}

export default AnimeList
