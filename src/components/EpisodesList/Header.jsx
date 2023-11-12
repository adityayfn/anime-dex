import React from "react"

const Header = ({ data, searchQuery, setSearchQuery }) => {
  return (
    <div className="mx-2 flex justify-between items-center">
      <h1 className="text-xl text-secondary md:text-2xl">Episodes List</h1>
      <input
        type="text"
        placeholder="Search Episodes..."
        className={`input w-48 input-warning ${
          data.totalEpisodes <= 50 ? "hidden" : "block"
        }`}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  )
}

export default Header
