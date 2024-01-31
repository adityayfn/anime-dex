"use client"
import Link from "next/link"
import InputSearch from "./InputSearch"
import { usePathname } from "next/navigation"
const Item = () => {
  const pathName = usePathname()

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
      <Link
        href={"/"}
        className={` hover:text-secondary hover:underline text-xl cursor-pointer ${
          pathName == "/" ? "text-secondary" : "text-white"
        }`}
      >
        Recent Episodes
      </Link>
      <Link
        href={"/top-airing"}
        className={` hover:text-secondary hover:underline text-xl cursor-pointer ${
          pathName == "/top-airing" ? "text-secondary" : "text-white"
        }`}
      >
        Top Airing
      </Link>

      <InputSearch />
    </div>
  )
}

export default Item
