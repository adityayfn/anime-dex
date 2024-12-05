// tlng-episode-10-sub-indo
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
  console.log(req)
  const url = new URL(req.url)
  const params = new URLSearchParams(url.searchParams)
  const query = params.get("q")

  const res = await fetch(
    ` ${process.env.NEXT_PUBLIC_API_BASE_URL}/episode/${query}`
  )

  const data = await res.json()

  return NextResponse.json(data)
}
