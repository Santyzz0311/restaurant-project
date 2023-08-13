import { MenuItems } from "../constants/constants"

export default function Menu() {
  return (
    <>
      <div className="bg-red-500 rounded-lg grid grid-cols-[35rem_35rem] overflow-y-scroll gap-y-10 gap-x-28 h-[95%] w-4/5 p-10">
        {
          MenuItems.map((item, index) => (
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
      </div>
    </>
  )
}
