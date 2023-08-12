import { useContext, useState } from "react";
import ProfileCard from "./ProfileCard";
import { ContextWrapper } from "../context/context";
import { Menu } from "../constants/constants";

export default function AddOrder() {

  const { setOrder } = useContext(ContextWrapper)
  const [menu, setMenu] = useState(false)

  return (
    <div action="#" className={`${menu ? 'w-full h-full flex justify-center' : ' w-11/12 h-full p-6 border-4 border-black rounded-lg grid grid-rows-[3fr_1fr]'}`}>
      {
        !menu
          ? (
            <>
              <div className="flex justify-center items-center gap-x-6 ">
                <ProfileCard />
              </div>
              <div className="flex items-center justify-evenly">
                <button
                  onClick={() => setOrder(false)}
                  className="border-2 font-bold border-black bg-white rounded-xl px-8 py-4 text-center transition-all duration-500 text-black w-1/3 hover:bg-black hover:border-white hover:text-white"
                >
                  Cerrar panel
                </button>
                <button
                  onClick={() => setMenu(true)}
                  className="border-2 font-bold border-black bg-white rounded-xl px-8 py-4 text-center transition-all duration-500 text-black w-1/3 hover:bg-black hover:border-white hover:text-white"
                >
                  Ver menú
                </button>
              </div>
            </>
          )
          : (
            <div className="bg-red-500 rounded-md grid grid-cols-[35rem_35rem] overflow-y-scroll gap-y-10 gap-x-28 h-full p-10">
              {
                Menu.map((item, index) => (
                  <div
                    className="grid grid-rows-[30rem_5rem] rounded-md border-4 border-black shadow-md p-3"
                    key={index}
                  >
                    <img className="w-full h-full rounded-md" src={item.imgSrc} alt={item.alt} />
                    <div className="flex justify-evenly items-center gap-x-6">
                      <h2 className="font-extrabold">{item.name}</h2>
                      <h2 className="font-extrabold">Valor: {item.value}$</h2>
                      <h2 className="font-extrabold">Tipo de plato: {item.category}</h2>
                    </div>
                  </div>
                ))
              }
              <div className="flex justify-center col-span-2 items-center">
                <button
                  onClick={() => setMenu(false)}
                  className="border-2 font-bold border-black bg-white rounded-xl px-8 py-4 text-center transition-all duration-500 text-black w-1/3 hover:bg-black hover:border-white hover:text-white"
                >
                  Cerrar menú
                </button>
              </div>
            </div>
          )
      }
    </div>
  )
}
