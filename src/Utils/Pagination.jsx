const Pagination = ({ page, setPage, hasNextPage }) => {
  const handleNext = () => {
    setPage((prev) => prev + 1)
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }
  const handlePrev = () => {
    setPage((prev) => prev - 1)
    scrollTo({
      behavior: "smooth",
      top: 0,
    })
  }

  return (
    <div className="flex justify-center items-center gap-2 my-4 ">
      <button
        className={` p-2  rounded-md bg-secondary text-neutral hover:text-white ${
          page === 1 ? "hidden" : "block"
        }`}
        onClick={handlePrev}
      >
        {"<<"}
      </button>

      <h1 className="text-xl text-white ">{page}</h1>

      <button
        className={`p-2 rounded-md bg-secondary text-neutral hover:text-white ${
          !hasNextPage ? "hidden" : "block"
        }`}
        onClick={handleNext}
      >
        {">>"}
      </button>
    </div>
  )
}

export default Pagination
