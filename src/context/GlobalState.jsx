import { createContext, useContext, useReducer, useState } from 'react'
import AppReduce from "./AppReducer";

const initialState = {
    transactions: []
}

export const Context = createContext()

export const useGlobalState = () => {
    const context = useContext(Context)
    return context
}

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReduce, initialState)

    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return (
        <Context.Provider
            value={{
                transactions: state.transactions,
                addTransaction,
            }}>
            {children}
        </Context.Provider>
    )
}