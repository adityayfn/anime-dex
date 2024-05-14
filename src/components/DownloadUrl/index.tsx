import { DownloadsUrl } from "@/schema"
import React, { FC } from "react"

interface DownloadUrlProps {
  downloadUrl: DownloadsUrl
}

const DownloadUrl: FC<DownloadUrlProps> = ({ downloadUrl }) => {
  return (
    <>
      <h1 className="text-xl my-4 text-secondary">Links to Download </h1>
      {typeof downloadUrl === "object" &&
        Object.keys(downloadUrl)

          .slice(0, 3)
          .map((type: any, index: number) => (
            <div key={index}>
              <h2>{type.replace(/\_/, "")}</h2>
              <div className="flex flex-wrap gap-2">
                {downloadUrl[type].map((item, i) => (
                  <a href={item.url} key={i} className="btn btn-secondary">
                    {item.judul}
                  </a>
                ))}
              </div>
            </div>
          ))}
    </>
  )
}

export default DownloadUrl
