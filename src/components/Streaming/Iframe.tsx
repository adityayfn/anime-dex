import React, { FC } from "react"

interface Props {
  linkStreamActive: string
}

const Iframe: FC<Props> = ({ linkStreamActive }) => {
  return (
    <iframe
      src={linkStreamActive}
      className="w-full h-[350px] md:h-[470px]  rounded-md"
      allowFullScreen
      frameBorder="1"
      referrerPolicy="same-origin"
      title={linkStreamActive}
    />
  )
}

export default Iframe
