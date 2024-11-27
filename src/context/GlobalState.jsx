// Import necessary fuction the react
import { createContext, useContext, useReducer, useEffect } from 'react'
import AppReduce from "./AppReducer";

const initialState = {
    transactions: []
}

// Create context for our app
export const Context = createContext()


export const useGlobalState = () => {
    const context = useContext(Context)
    return context
}

// Provider component that encapsulates the global state logic
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReduce, initialState,
        () =>{
            const localData = localStorage.getItem('transactions')
            
            return localData ? JSON.parse(localData) : initialState
        });

        useEffect(() => {
            localStorage.setItem('transactions', JSON.stringify(state))
        }, [state])

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