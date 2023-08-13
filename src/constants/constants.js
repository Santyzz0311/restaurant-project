import platoCorriente from '../assets/platoCorriente.jpg'
import platoEjecutivo from '../assets/platoEjecutivo.jpg'
import especialAcom from '../assets/especialAcom.jpg'
import entradaAcom from '../assets/entradaAcom.jpg'
import jugosBebidas from '../assets/jugosBebidas.jpeg'
import gaseosasBebidas from '../assets/gaseosasBebidas.jpg'

export const MenuItems = [
  {
    name: "Plato Corriente",
    value: 12000,
    category: 'Comida Principal',
    imgSrc: platoCorriente,
    alt: 'Platillo de un menu con comida'
  },
  {
    name: "Plato Ejecutivo",
    value: 15000,
    category: 'Comida Principal',
    imgSrc: platoEjecutivo,
    alt: 'Platillo de un menu con comida'
  },
  {
    name: "Especiales",
    value: 22000,
    category: 'Acompañamiento',
    imgSrc: especialAcom,
    alt: 'Platillo de un menu con comida'
  },
  {
    name: "Entradas",
    value: 7000,
    category: 'Acompañamiento',
    imgSrc: entradaAcom,
    alt: 'Platillo de un menu con comida'
  },
  {
    name: "Jugos Naturales",
    value: 4000,
    category: 'Bebida',
    imgSrc: jugosBebidas,
    alt: 'Platillo de un menu con comida'
  },
  {
    name: "Gaseosa",
    value: 2500,
    category: 'Bebida',
    imgSrc: gaseosasBebidas,
    alt: 'Platillo de un menu con comida'
  }
]

export const Meals = [
  {
    name: 'N/A',
    value : 0
  },
  {
    name: "Plato Corriente",
    value: 12000
  },
  {
    name: "Plato Ejecutivo",
    value: 15000
  }
]

export const Specials = [
  {
    name: 'N/A',
    value : null
  },
  {
    name: "Especiales",
    value: 22000
  },
  {
    name: "Entradas",
    value: 7000
  }
]

export const Drinks = [
  {
    name: 'N/A',
    value : 0
  },
  {
    name: "Jugos Naturales",
    value: 4000
  },
  {
    name: "Gaseosa",
    value: 2500
  }
]