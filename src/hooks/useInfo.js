import { useState } from "react"

export function useInfo() {
  const [name, SetName] = useState('')
  const [meal, SetMeal] = useState({ mealName: "Seleccione un plato", mealPrice: 0 })
  const [special, SetSpecial] = useState({ specialName: "Seleccione un especial", specialPrice: 0 })
  const [drink, SetDrink] = useState({ drinkName: "Seleccione una bebida", drinkPrice: 0 })
  const [nameError, setNameError] = useState(false)


  return { name, SetName, meal, SetMeal, special, SetSpecial, drink, SetDrink, nameError, setNameError }
}