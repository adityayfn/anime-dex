"use client"
import Icon from "@mdi/react"
import { mdiMagnify } from "@mdi/js"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
  const searchRef = useRef()

  const router = useRouter()

  const handleSearch = (e) => {
    const query = searchRef.current.value
    if (query.trim() !== "") {
      if (e.key === "Enter" || e.type === "click") {
        e.preventDefault()
        router.push(`/search/${query}`)
      }
    }
  }

  return (
    <>
      <div className="relative">
        <input
          type="text"
          className="md:w-48 p-2 rounded-md outline-none w-full text-neutral"
          placeholder="Search Anime..."
          ref={searchRef}
          onKeyDown={handleSearch}
        />
        <button
          className="absolute top-2 end-1 btn-secondary px-2 rounded-md "
          onClick={handleSearch}
        >
          <h1>Search</h1>
        </button>
      </div>
    </>
  )
}
export default InputSearch
