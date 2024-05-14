import Link from "next/link"
import Drawer from "./Drawer"
import Item from "./Item"
const Navbar = () => {
  return (
    <>
      <header className="bg-neutral p-3 border-b-2 border-secondary">
        <div className="flex justify-between items-center">
          <Link href={"/"} className="text-3xl font-bold text-secondary">
            AnimeDex
          </Link>
          <div className="hidden md:flex md:items-center md:gap-2 ">
            <Item />
          </div>
          <div className="md:hidden">
            <Drawer />
          </div>
        </div>
      </header>
    </>
  )
}

export default Navbar
