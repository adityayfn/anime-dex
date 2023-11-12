import { mdiHamburger } from "@mdi/js"
import Icon from "@mdi/react"
import Item from "./Item"
import Link from "next/link"

const Drawer = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className=" lg:hidden cursor-pointer hover:text-secondary"
        >
          <Icon path={mdiHamburger} size={1.3} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className=" menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          <div className="mb-4">
            <Link href={"/"} className="text-3xl font-bold text-secondary">
              AnimeDex
            </Link>
          </div>
          <Item />
        </ul>
      </div>
    </div>
  )
}

export default Drawer
