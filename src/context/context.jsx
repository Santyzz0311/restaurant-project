import { createContext, useState } from 'react';

export const ContextWrapper = createContext()

export function ContextProvider({ children }) {

  const [modal, setModal] = useState(false)
  const [selector, setSelector] = useState('List Order')
  const [order, setOrder] = useState(false)


  return (
    <ContextWrapper.Provider value={{
      modal,
      setModal,
      selector,
      setSelector,
      order,
      setOrder,
    }}>
      {children}
    </ContextWrapper.Provider>

  )
}