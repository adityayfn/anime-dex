"use client"
import Link from "next/link"

import { usePathname } from "next/navigation"
import { Navigation } from "@/schema"
import InputSearch from "./InputSearch"
const Item = () => {
  const NAVIGATION: Navigation[] = [
    {
      name: "On Going",
      path: "/on-going",
    },
    {
      name: "Completed",
      path: "/completed",
    },

    {
      name: "Animes by genre",
      path: "/animes-by-genre",
    },
  ]
  const pathName = usePathname()

  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
      {NAVIGATION.map((item, index) => (
        <Link
          key={index}
          href={item.path}
          className={` hover:text-secondary hover:underline text-xl cursor-pointer ${
            pathName == item.path ? "text-secondary" : "text-white"
          }`}
        >
          {item.name}
        </Link>
      ))}
      <InputSearch />
    </div>
  )
}

export default Item
