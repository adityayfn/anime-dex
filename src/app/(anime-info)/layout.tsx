import { Gabarito } from "next/font/google"
import "../globals.css"
import Navbar from "@/components/Navbar"
import { FC } from "react"

const gabarito = Gabarito({ subsets: ["latin"] })

export const metadata = {
  title: "AnimeDex",
  description: "Platform Streaming Anime",
}

interface Iprops {
  children?: React.ReactNode
}

const RootLayout: FC<Iprops> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${gabarito.className}`} suppressHydrationWarning={true}>
        <div className="relative z-10">
          <Navbar />
        </div>
        <main>{children}</main>
      </body>
    </html>
  )
}
export default RootLayout
