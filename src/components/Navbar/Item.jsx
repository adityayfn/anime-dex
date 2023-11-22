"use client"
import Link from "next/link"
import InputSearch from "./InputSearch"
import { usePathname } from "next/navigation"
const Item = () => {
  const pathName = usePathname()
  console.log(pathName)
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
      <Link
        href={"/top-airing"}
        className={` hover:text-secondary hover:underline text-xl cursor-pointer ${
          pathName == "/top-airing" ? "text-secondary" : "text-white"
        }`}
      >
        Top Airing
      </Link>
      <Link
        href={"/recent-episodes"}
        className={` hover:text-secondary hover:underline text-xl cursor-pointer ${
          pathName == "/recent-episodes" ? "text-secondary" : "text-white"
        }`}
      >
        Recent Episodes
      </Link>
      <InputSearch />
    </div>
  )
}

export default Item
