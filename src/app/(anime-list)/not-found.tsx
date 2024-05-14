import Link from "next/link"
const Page = () => {
  return (
    <>
      <div className="text-secondary flex flex-col min-h-[80vh] justify-center items-center">
        <div className="flex  text-xl gap-2  ">
          <h1>404</h1>|<p>Page not found.</p>
        </div>
        <div>
          <Link
            href={"/"}
            className="underline hover:text-white cursor-pointer"
          >
            Home
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page
