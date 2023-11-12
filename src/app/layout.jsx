import { Gabarito } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"

const gabarito = Gabarito({ subsets: ["latin"] })

export const metadata = {
  title: "AnimeDex",
  description: "Platform Streaming Anime",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-color-dark`}
        suppressHydrationWarning={true}
      >
        <div className="relative z-10">
          <Navbar />
        </div>
        {children}
      </body>
    </html>
  )
}
