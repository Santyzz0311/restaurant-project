import { useContext } from "react";
import { ContextWrapper } from "../context/context";
import OrdersView from "./OrdersView";
import Menu from "./Menu";

export default function Panel() {

  const { selector, menu } = useContext(ContextWrapper)

  return (
    <div className="h-full flex items-center justify-center">
      {
        menu && !selector 
        && 
        (
          <Menu />
        )
      }
      {
        selector && !menu
        &&
        (
          <OrdersView />
        )
      }
    </div>
  )
}
