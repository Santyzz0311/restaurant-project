import { useState } from "react";

export const useGetInfoOrders = () => {
  const existingOrdersJSON = localStorage.getItem("Ordenes")
  const existingOrders = existingOrdersJSON ? JSON.parse(existingOrdersJSON) : []

  const mealCounts = {};
  existingOrders.forEach((order) => {
    if (mealCounts[order.mealName]) {
      mealCounts[order.mealName] += 1;
    } else {
      mealCounts[order.mealName] = 1;
    }
  });

  let mostOrderedMeal = null;
  let maxCount = 0;

  for (const meal in mealCounts) {
    if (mealCounts[meal] > maxCount) {
      mostOrderedMeal = meal;
      maxCount = mealCounts[meal];
    }
  }
  
  const totalExistingOrders = existingOrders.reduce((total, order) => total + order.total, 0);

  const [isInLocalStorage, setIsInLocalStorage] = useState(true)

  const handleClear = () => {
    localStorage.clear()
    setIsInLocalStorage(false)
  }

  return { mostOrderedMeal, totalExistingOrders, isInLocalStorage, handleClear, existingOrders, maxCount }
}