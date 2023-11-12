import React from "react"

const Server = ({
  index,
  buttonIndex,
  server,
  setLinkStreamActive,
  setButtonIndex,
}) => {
  const changeServer = (link, index) => {
    setLinkStreamActive(link ?? "")
    setButtonIndex(index)
  }
  return (
    <button
      className={`btn ${index === buttonIndex ? "btn-secondary" : ""}`}
      onClick={() => changeServer(server.url, index)}
      key={index}
    >
      {server.name}
    </button>
  )
}

export default Server
