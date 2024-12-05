import { NextResponse } from "next/server"

export const GET = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/ongoing`)
  const data = await res.json()

  return NextResponse.json(data)
}
