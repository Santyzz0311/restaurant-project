import { useContext } from "react";
import { ContextWrapper } from "../context/context";
import AddOrder from "./AddOrder";
import OrdersView from "./OrdersView";

export default function Panel() {

  const { selector, order, setOrder } = useContext(ContextWrapper)

  return (
    <div className="h-full flex flex-col gap-y-12">
      {
        selector === 'List Order'
          ? (
            <div className="h-36 px-56  border-b-4 border-black flex items-center justify-between">
              <div className={`${!order ? 'invisible' : ''} h-1/2 flex items-center border-2 border-black bg-white rounded-xl px-8 py-4 text-center transition-[background] duration-500 text-black hover:bg-[#e2e2e2]`}>
                <h2 className="font-extrabold">Procesando ordenes...</h2>
              </div>
              <button
                onClick={() => setOrder(true)}
                disabled={order}
                className={`h-1/2 border-2 border-black bg-white rounded-xl font-extrabold px-8 py-4 text-center transition-all duration-500 enabled:hover:bg-red-600 disabled:opacity-40`}
              >
                Ordena
              </button>
            </div>

          )
          : (
            <div className='h-full flex items-center justify-center'>
              <OrdersView />
            </div>
          )
      }
      {
        order
        && selector === 'List Order'
        &&
        (
          <div className='h-3/4 flex items-center justify-center'>
            <AddOrder />
          </div>
        )
      }
    </div>
  )
}
