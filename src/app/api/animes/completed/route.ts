import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url)
  const params = new URLSearchParams(url.searchParams)
  const page = params.get("page")

  const res = await fetch(
    ` ${process.env.NEXT_PUBLIC_API_BASE_URL}/ongoing?page=${page}`
  )

  const data = await res.json()

  return NextResponse.json(data)
}
