import { isPagination } from "@/schema"
import { Dispatch, FC, SetStateAction } from "react"

interface PageState {
  value: number
}

interface PaginationProps {
  page: PageState
  setPage: Dispatch<SetStateAction<PageState>>
  isPagination: isPagination
}

const Pagination: FC<PaginationProps> = ({ page, setPage, isPagination }) => {
  const handleNext = () => {
    setPage((prev: PageState) => ({ value: prev.value + 1 }))
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }
  const handlePrev = () => {
    setPage((prev: PageState) => ({ value: prev.value - 1 }))
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }

  console.log(page)
  return (
    <div className="flex justify-center items-center gap-2 my-4 ">
      <button
        className={` p-2  rounded-md bg-secondary text-neutral hover:text-white ${
          page.value === 1 ? "hidden" : "block"
        }`}
        onClick={handlePrev}
      >
        {"Back"}
      </button>

      <h1 className="text-xl text-white ">{page.value}</h1>

      <button
        className={`p-2 rounded-md bg-secondary text-neutral hover:text-white ${
          isPagination?.totalPages > isPagination?.currentPage
            ? "block"
            : "hidden"
        }`}
        onClick={handleNext}
      >
        {"Next"}
      </button>
    </div>
  )
}

export default Pagination
