export const getAnimesData = async (resource, keyword) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}${keyword}`
  )
  const animes = await res.json()
  if (res.ok)
    return {
      message: res.statusText,
      status: res.status,
      data: animes,
    }
  else
    return {
      message: res.statusText,
      status: res.status,
    }
}
