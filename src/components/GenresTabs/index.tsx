import { GENRES } from "@/app/constant"
import { Dispatch, FC, SetStateAction } from "react"

interface GenreState {
  value: string
}

interface Props {
  tabActive: GenreState
  setTabActive: Dispatch<SetStateAction<GenreState>>
}

const GenreTabs: FC<Props> = ({ tabActive, setTabActive }) => {
  return (
    <>
      {GENRES.slice(0, 20).map((item) => (
        <div
          className="tabs tabs-boxed tabs-xs "
          key={item.slug}
          onClick={() => setTabActive({ value: item.slug })}
        >
          <li
            className={` w-28 h-10 list-none text-center pt-2 rounded-md cursor-pointer  ${
              item.slug === tabActive.value
                ? "bg-secondary text-black "
                : "hover:text-secondary"
            }`}
          >
            {item.judul}
          </li>
        </div>
      ))}
    </>
  )
}
export default GenreTabs
