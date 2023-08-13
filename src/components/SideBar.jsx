import { useContext } from "react"
import { ContextWrapper } from "../context/context"

export default function SideBar() {

  const { menu, selector, setSelector, setMenu } = useContext(ContextWrapper)

  return (
    <>
      <div className="w-11/12">
        <button
          disabled={menu}
          onClick={() => {
            setSelector(false);
            setMenu(true);
          }}
          className="border-2 border-black bg-white rounded-xl px-8 py-4 text-center transition-all duration-500 text-black w-full hover:bg-black hover:border-white hover:text-white disabled:opacity-40"
        >
          Menú
        </button>
      </div>
      <div className="w-11/12">
        <button
          disabled={selector}
          onClick={() => {
            setSelector(true);
            setMenu(false);
          }}
          className="border-2 border-black bg-white rounded-xl px-8 py-4 text-center transition-all duration-500 text-black w-full hover:bg-black hover:border-white hover:text-white disabled:opacity-40"
        >
          Añadir Ordenes
        </button>
      </div>
    </>
  )
}
