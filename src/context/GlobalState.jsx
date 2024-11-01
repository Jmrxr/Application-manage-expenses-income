import { createContext, useContext, useReducer, useState } from 'react'
import AppReduce from "./APpReducer";

export const Context = createContext()

export const useGlobalState = () => {
    const context = useContext(Context)
    return context
}

export const GlobalProvider = ({ children }) => {
    const [state, setState] = useReducer(AppReduce,[])

    
    
    return (
        <Context.Provider value={{ state, setState, }}>
            {children}
        </Context.Provider>
    )
}