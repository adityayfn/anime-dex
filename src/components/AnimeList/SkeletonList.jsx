import React from "react"

const SkeletonList = ({ dummy }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 xl:mx-5">
        {dummy.map((num) => (
          <div key={num} className="skeleton w-44 h-64 rounded-none"></div>
        ))}
      </div>
    </>
  )
}

export default SkeletonList
