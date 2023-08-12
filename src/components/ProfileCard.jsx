import { useContext } from "react"
import ModalOrder from "./ModalOrder"
import { ContextWrapper } from "../context/context"

export default function ProfileCard() {

  const { modal, setModal } = useContext(ContextWrapper)

  return (
    <div className="w-4/6 border-2 border-black rounded-lg grid grid-rows-[15rem_1fr]">
      <div className="border-b border-black flex items-center justify-center">
        <img className="w-2/3 h-2/3" src="https://static8.depositphotos.com/1533030/997/v/950/depositphotos_9975181-stock-illustration-restaurant-icon.jpg" alt="Imagen donde se visualiza un restaurante" />
      </div>
      <div className="flex justify-center items-center">
        <button 
          onClick={() => setModal(true)}
         className="font-bold my-10 before:transition-all before:duration-500 relative before:absolute before:bottom-0 before:w-0 before:h-[.3px] before:bg-black before:hover:w-full"
         >
          Agregar información
         </button>
      </div>
      {
        modal && <ModalOrder />
      }
    </div>
  )
}
