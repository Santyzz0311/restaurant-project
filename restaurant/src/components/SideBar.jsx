import { useContext } from "react"
import { ContextWrapper } from "../context/context"

export default function SideBar() {

  const { setSelector } = useContext(ContextWrapper)

  return (
    <>
      <div className="w-11/12">
        <button
          onClick={() => setSelector('List Order')}
          className="border-2 border-black bg-white rounded-xl px-8 py-4 text-center transition-all duration-500 text-black w-full hover:bg-black hover:border-white hover:text-white"
        >
          List Order
        </button>
      </div>
      <div className="w-11/12">
        <button
          onClick={() => setSelector('any')}
          className="border-2 border-black bg-white rounded-xl px-8 py-4 text-center transition-all duration-500 text-black w-full hover:bg-black hover:border-white hover:text-white"
        >
          Dashboard
        </button>
      </div>
    </>
  )
}
