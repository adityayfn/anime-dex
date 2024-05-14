import React, { FC } from "react"

interface HeaderTitleProps {
  title: string
}
const HeaderPage: FC<HeaderTitleProps> = ({ title }) => {
  return (
    <div className="mt-5 mb-5 flex items-center justify-center">
      <div className="w-2 h-8 p-1 bg-secondary"></div>
      <h1 className="text-2xl xl:text-3xl p-2 text-center text-secondary font-semibold">
        {title}
      </h1>
      <div className="w-2 h-8 p-1 bg-secondary"></div>
    </div>
  )
}

export default HeaderPage
