import { useContext } from "react"
import { ContextWrapper } from "../context/context"
import { Meals, Specials, Drinks } from '../constants/constants.js'
import { useInfo } from "../hooks/useInfo"
import { BsXLg } from "react-icons/bs";
import ErrorNameModal from "./ErrorNameModal";

export default function ModalOrder() {

  const { setModal } = useContext(ContextWrapper)
  const { name, SetName, meal, SetMeal, special, SetSpecial, drink, SetDrink, formError, setFormError } = useInfo()

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
      setFormError(prevState => ({
        ...prevState,
        name: true
      }))
      return
    }

    if (meal.mealPrice === Meals[0].value) {
      setFormError(prevState => ({
        ...prevState,
        meal: true
      }))
      return
    }

    if (special.specialPrice === Specials[0].value) {
      setFormError(prevState => ({
        ...prevState,
        special: true
      }))
      return
    }

    if (drink.drinkPrice === Drinks[0].value) {
      setFormError(prevState => ({
        ...prevState,
        drink: true
      }))
      return
    }

    const haveError = !formError.name && !formError.meal && !formError.special && !formError.drink
    
    if (haveError) {
      const existingOrdersJSON = localStorage.getItem("Ordenes");
      let existingOrders = existingOrdersJSON ? JSON.parse(existingOrdersJSON) : [];
  
      const existingIndex = existingOrders.findIndex((order) => order.name === name);
  
      if (existingIndex !== -1) existingOrders[existingIndex] = orderValues
      else existingOrders.push(orderValues)
  
      localStorage.setItem("Ordenes", JSON.stringify(existingOrders));
  
      setModal(false)
    } else {
      return
    }
    console.log(haveError);
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
              if (e.target.value === '') setFormError(prevState => ({ ...prevState, name: true }))
              else setFormError(prevState => ({ ...prevState, name: false }))
            }}
            placeholder="Santiago, Walter..."
            value={name}
            className="w-full outline-none px-2 py-2 rounded-md mb-1 placeholder:text-black placeholder:opacity-40"
            type="text"
          />
          {formError.name && <ErrorNameModal textError={'Falta ingresar el nombre'} />}
        </div>
        <div className="grid grid-rows-3 grid-cols-2 gap-2">
          
          <label htmlFor="mealname" className="col-span-2 font-bold">Elige el plato de: {name}</label>
          <select
            required
            name="mealName"
            value={meal.mealName}
            onChange={(e) => {
              SetMeal(Meals[e.target.value])
              if (e.target.value == 0) setFormError(prevState => ({ ...prevState, meal: true }))
              else setFormError(prevState => ({ ...prevState, meal: false }))
            }}
            className="rounded-md py-2"
          >
            {Meals.map((mealOption, index) => (
              <option key={index} value={index}>{mealOption.name}</option>
            ))}
          </select>
          {formError.meal ? <ErrorNameModal textError={'Ingrese un plato'} /> : <span className="place-self-center">{`${meal.value === undefined ? '0' : meal.value}$`}</span>}

          <select
            required
            name="specialName"
            value={special.specialName}
            onChange={(e) => {
              SetSpecial(Specials[e.target.value])
              if (e.target.value == 0) setFormError(prevState => ({ ...prevState, special: true }))
              else setFormError(prevState => ({ ...prevState, special: false }))
            }}
            className="rounded-md py-2"
          >
            {Specials.map((SpecialsOption, index) => (
              <option key={index} value={index}>{SpecialsOption.name}</option>
            ))}
          </select>
          {formError.special ? <ErrorNameModal textError={'Ingrese un especial'} /> : <span className="place-self-center">{`${special.value === undefined ? '0' : special.value} $`}</span>}
          
          <select
            required
            name="drinkName"
            onChange={(e) => {
              SetDrink(Drinks[e.target.value])
              if (e.target.value == 0) setFormError(prevState => ({ ...prevState, drink: true }))
              else setFormError(prevState => ({ ...prevState, drink: false }))
            }}
            className="rounded-md py-2"
            value={drink.drinkName}
          >
            {Drinks.map((DrinksOption, index) => (
              <option key={index} value={index}>{DrinksOption.name}</option>
            ))}
          </select>
          {formError.drink ? <ErrorNameModal textError={'Ingrese una bebida'} /> : <span className="place-self-center">{`${drink.value === undefined ? '0' : drink.value} $`}</span>}
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
