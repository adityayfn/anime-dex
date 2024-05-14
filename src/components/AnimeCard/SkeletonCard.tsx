import React from "react"

const SkeletonCard = ({ dummy }: any) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 xl:mx-5">
        {dummy.map((num: number) => (
          <div
            key={num}
            className="skeleton card w-36 h-52 md:w-40 md:h-64 rounded-none"
          ></div>
        ))}
      </div>
    </>
  )
}

export default SkeletonCard
