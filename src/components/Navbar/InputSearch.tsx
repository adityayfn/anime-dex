"use client"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef<HTMLInputElement>(null)

  const router = useRouter()

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const query = searchRef?.current?.value
    if (query && query.trim() !== "") {
      router.push(`/search/${query}`) //
    }
  }

  return (
    <>
      <div className="relative">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            className="md:w-48 p-2 rounded-md outline-none w-full text-neutral"
            placeholder="Search Anime..."
            ref={searchRef}
          />
          <button className="absolute top-2 end-1 btn-secondary px-2 rounded-md ">
            <h1>Search</h1>
          </button>
        </form>
      </div>
    </>
  )
}
export default InputSearch
