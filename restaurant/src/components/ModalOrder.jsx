import { useContext } from "react"
import { ContextWrapper } from "../context/context"
import { Meals, Specials, Drinks } from '../constants/constants.js'
import { useInfo } from "../hooks/useInfo"
import { BsXLg } from "react-icons/bs";
import ErrorNameModal from "./ErrorNameModal";

export default function ModalOrder() {

  const { setModal } = useContext(ContextWrapper)
  const { name, SetName, meal, SetMeal, special, SetSpecial, drink, SetDrink, nameError, setNameError } = useInfo()

  const handleSubmit = (e) => {
    e.preventDefault()

    const orderValues = {
      name: name,
      mealName: meal.name,
      mealPrice: meal.value,
      specialName: special.name,
      specialPrice: special.value,
      drinkName: drink.name,
      drinkPrice: drink.value,
      total: meal.value + special.value + drink.value,
    }

    if (name === '') {
      setNameError(true)
      return
    }

    const existingOrdersJSON = localStorage.getItem("Ordenes");
    let existingOrders = existingOrdersJSON ? JSON.parse(existingOrdersJSON) : [];

    const existingIndex = existingOrders.findIndex((order) => order.name === name);

    if (existingIndex !== -1) existingOrders[existingIndex] = orderValues
    else existingOrders.push(orderValues)

    localStorage.setItem("Ordenes", JSON.stringify(existingOrders));

    setModal(false)
  }

  return (
    <form onSubmit={handleSubmit} className="absolute inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="w-96 h-[30rem] bg-red-600 flex flex-col justify-evenly shadow-2xl rounded-lg px-6">
        <header className="flex justify-between mb-8 ">
          <h2 className="font-extrabold uppercase text-center">Información de la orden</h2>
          <button onClick={() => setModal(false)}><BsXLg /></button>
        </header>
        <div className="relative">
          <label htmlFor='name' className="font-bold inline-block pb-2">Ingrese el nombre del cliente</label>
          <input
            name='name'
            onChange={(e) => {
              SetName(e.target.value)
              setNameError(false)
            }}
            placeholder="Santiago, Walter..."
            value={name}
            className="w-full outline-none px-2 py-2 rounded-md mb-1 placeholder:text-black placeholder:opacity-40"
            type="text"
          />
          {nameError && <ErrorNameModal textError={'Falta ingresar el nombre'} />}
        </div>
        <div className="grid grid-rows-3 grid-cols-2 gap-2">
          <label htmlFor="mealname" className="col-span-2 font-bold">Elige el plato de: {name}</label>
          <select
            required
            name="mealName"
            value={meal.mealName}
            onChange={(e) => SetMeal(Meals[e.target.value])}
            className="rounded-md"
          >
            {Meals.map((mealOption, index) => (
              <option key={index} value={index}>{mealOption.name}</option>
            ))}
          </select>
          <span>{meal.value}$</span>
          <select
            required
            name="specialName"
            value={special.specialName}
            onChange={(e) => SetSpecial(Specials[e.target.value])}
            className="rounded-md"
          >
            {Specials.map((SpecialsOption, index) => (
              <option key={index} value={index}>{SpecialsOption.name}</option>
            ))}
          </select>
          <span>{special.value}$</span>
          <select
            required
            name="drinkName"
            onChange={(e) => SetDrink(Drinks[e.target.value])}
            className="rounded-md"
            value={drink.drinkName}
          >
            {Drinks.map((DrinksOption, index) => (
              <option key={index} value={index}>{DrinksOption.name}</option>
            ))}
          </select>
          <span>{drink.value}$</span>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="font-bold rounded-md w-full border border-black px-4 py-2 before:transition-all before:duration-500 relative before:absolute before:bottom-2 before:w-0 before:h-[.3px] before:bg-black before:hover:w-[14%]"
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  )
}
