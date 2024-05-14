import { Gabarito } from "next/font/google"
import "../globals.css"
import Navbar from "@/components/Navbar"
import { FC } from "react"

const gabarito = Gabarito({ subsets: ["latin"] })

export const metadata = {
  title: "AnimeDex",
  description: "Platform Streaming Anime",
}

interface LayoutProps {
  children: React.ReactNode
}

const RootLayout: FC<LayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${gabarito.className}`} suppressHydrationWarning={true}>
        <div className="relative z-10">
          <Navbar />
        </div>

        <div className=" gap-2 md:mx-2 xl:mx-10 xl:my-10">
          <div className=" ">{children}</div>
        </div>
      </body>
    </html>
  )
}
export default RootLayout
