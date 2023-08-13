import { createContext, useState } from 'react';

export const ContextWrapper = createContext()

export function ContextProvider({ children }) {

  const [modal, setModal] = useState(false)
  const [selector, setSelector] = useState(() => {
    const selectorFromStorage = window.localStorage.getItem('Selector')
    return selectorFromStorage ? Boolean(selectorFromStorage) : false
  })
  const [menu, setMenu] = useState(() => {
    const menuFromStorage = window.localStorage.getItem('Menu')
    return menuFromStorage ? Boolean(menuFromStorage) : true
  })
  
  return (
    <ContextWrapper.Provider value={{
      modal,
      setModal,
      selector,
      setSelector,
      menu,
      setMenu
    }}>
      {children}
    </ContextWrapper.Provider>

  )
}