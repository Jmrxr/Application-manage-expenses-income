// Import necessary fuction the react
import { createContext, useContext, useReducer, useState } from 'react'
import AppReduce from "./AppReducer";

// We define the initial state of the context
const initialState = {
    transactions: []
}

// Create context for our app
export const Context = createContext()

// Custom hook to access the global context
export const useGlobalState = () => {
    const context = useContext(Context)
    return context
}

// Provider component that encapsulates the global state logic
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReduce, initialState)

// Fuction add new transaction
    const addTransaction = (transaction) => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    };

    // Fuction delete transaction
    const deleteTransaction = (id) => {
        dispatch({
            type: "DELETE_TRANSACTION",
            payload: id
        })
    };

    return (
        <Context.Provider
            value={{
                transactions: state.transactions,
                addTransaction,
                deleteTransaction
            }}>
            {children}
        </Context.Provider>
    )
}