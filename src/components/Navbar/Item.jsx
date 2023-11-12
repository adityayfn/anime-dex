import Link from "next/link"
import InputSearch from "./InputSearch"
const Item = () => {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
      <Link
        href={"/top-airing"}
        className="text-white hover:text-secondary hover:underline text-xl cursor-pointer"
      >
        Top Airing
      </Link>
      <InputSearch />
    </div>
  )
}

export default Item
