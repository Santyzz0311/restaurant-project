import { useContext } from "react"
import { useGetInfoOrders } from "../hooks/useGetInfoOrders"
import { ContextWrapper } from "../context/context"
import ModalOrder from './ModalOrder'
import Button from "./Button"

export default function OrdersView() {

  const { mostOrderedMeal, totalExistingOrders, isInLocalStorage, handleClear, existingOrders, maxCount } = useGetInfoOrders()
  const { modal, setModal } = useContext(ContextWrapper)

  return (
    <>
      {
        modal
          ? <ModalOrder />
          : (
            <div className="w-4/5 h-[95%] p-6 border-4 border-black rounded-lg flex flex-col justify-evenly">
              <div className="flex justify-evenly">
                <Button onClick={() => {setModal(true)}}>Agregar Orden</Button>
                <Button onClick={handleClear}>Remover pedidos</Button>
              </div>
              <div className="overflow-y-auto h-4/6 scrollFix">
                <div className="grid grid-cols-9 font-bold place-content-center bg-white place-items-center sticky top-0 left-0 py-6 border-y border-y-black">
                  <h2>Nombre</h2>
                  <h2>Plato</h2>
                  <h2>Precio</h2>
                  <h2>Adicional</h2>
                  <h2 className="text-sm">Precio de Adicional</h2>
                  <h2>Bebida</h2>
                  <h2>Precio de Bebida</h2>
                  <h2>Total</h2>
                  <h2>Orden Nmro</h2>
                </div>
                {
                  existingOrders
                  &&
                  isInLocalStorage
                  &&
                  (
                    existingOrders.map((order, index) => (
                      <div className="grid grid-cols-9 place-content-center place-items-center my-6 pb-6 border-b border-black" key={index}>
                        <span>{order.name}</span>
                        <span>{order.mealName}</span>
                        <span>{order.mealPrice}$</span>
                        <span>{order.specialName}</span>
                        <span>{order.specialPrice}$</span>
                        <span>{order.drinkName}</span>
                        <span>{order.drinkPrice}$</span>
                        <span>{order.total}$</span>
                        <span>{index + 1}</span>
                      </div>
                    ))
                  )
                }
              </div>
              <div className="flex items-center justify-evenly">
                <div className="text-center">
                  <span className="font-bold">
                    Número de clientes atendidos: {existingOrders.length}
                  </span>
                </div>
                <div className="text-center">
                  <span className="font-bold">
                    Total de dinero obtenido: {totalExistingOrders}$
                  </span>
                </div>
                <div className="text-center">
                  <span className="font-bold">
                    El plato mas vendido fue: {mostOrderedMeal} ({maxCount} veces)
                  </span>
                </div>
              </div>
            </div>
          )
      }
    </>
  )
}
