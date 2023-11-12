import React from "react"

const HeaderPage = ({ title }) => {
  return (
    <div className="my-5">
      <h1 className="text-xl p-2  bg-secondary text-neutral">{title}</h1>
    </div>
  )
}

export default HeaderPage
