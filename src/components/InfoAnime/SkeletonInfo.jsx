import { usePathname } from "next/navigation"
import React from "react"

const SkeletonInfo = () => {
  const pathname = usePathname()

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap xl:flex-row items-center  justify-center gap-5  xl:gap-10 mx-10 mt-[5rem] xl:mt-0">
      <div className=" xl:w-[25%] ">
        <div className="skeleton xl:w-full xl:h-[30rem] rounded-none w-72 h-96"></div>
      </div>
      <div className="  xl:w-[70%]">
        <div className="skeleton xl:w-full xl:h-[26rem] rounded-none w-[21.3rem] h-80 "></div>
      </div>
      <div
        className={`  xl:w-[70%]  ${
          pathname.includes("info") || pathname.includes("anime")
            ? "xl:hidden"
            : ""
        } `}
      >
        <div className="skeleton xl:w-full xl:h-[26rem] rounded-none w-[21.3rem] h-80 md:w-[37rem]"></div>
      </div>
    </div>
  )
}

export default SkeletonInfo
