import { Download, DownloadsUrl } from "@/schema"
import React, { FC } from "react"

interface DownloadUrlProps {
  downloadUrl: Download | any
}

const DownloadUrl: FC<DownloadUrlProps> = ({ downloadUrl }) => {
  return (
    <>
      <h1 className="text-xl my-4 text-secondary">Links to Download</h1>
      {downloadUrl?.qualities.map((item: DownloadsUrl, index: number) => (
        <div key={index}>
          <h2>{item.title.replace(/_/, " ")}</h2>
          <p>Size: {item.size}</p>
          <div className="flex flex-wrap gap-2">
            {Array.isArray(item.urls) &&
              item.urls.map((urlItem: any, i: number) => (
                <a
                  href={urlItem.url}
                  target="_blank"
                  key={i}
                  className="btn btn-secondary"
                >
                  {urlItem.title}
                </a>
              ))}
          </div>
        </div>
      ))}
    </>
  )
}

export default DownloadUrl
