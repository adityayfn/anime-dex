import { DownloadsUrl } from "@/schema"
import React, { FC } from "react"

interface DownloadUrlProps {
  downloadUrl: DownloadsUrl
}

const DownloadUrl: FC<DownloadUrlProps> = ({ downloadUrl }) => {
  return (
    <>
      <h1 className="text-xl my-4 text-secondary">Links to Download</h1>
      {Array.isArray(downloadUrl) &&
        downloadUrl.map((item: any, index: number) => (
          <div key={index}>
            <h2>{item.kualitas.replace(/_/, " ")}</h2>
            <p>Size: {item.size}</p>
            <div className="flex flex-wrap gap-2">
              {Array.isArray(item.urls) &&
                item.urls.map((urlItem: any, i: number) => (
                  <a href={urlItem.url} key={i} className="btn btn-secondary">
                    {urlItem.judul}
                  </a>
                ))}
            </div>
          </div>
        ))}
    </>
  )
}

export default DownloadUrl
