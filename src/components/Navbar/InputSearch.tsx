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
            className="md:w-48 h-10 p-2 rounded-md outline-none w-full text-neutral"
            placeholder="Search Anime..."
            ref={searchRef}
          />
          <button className="absolute end-1 btn btn-sm btn-secondary mt-1 rounded-md ">
            <h1>Search</h1>
          </button>
        </form>
      </div>
    </>
  )
}
export default InputSearch
