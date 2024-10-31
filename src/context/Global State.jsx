import { Children, createContext } from "react";

export const Context = createContext();

export const GlobalProvider = ({ Children }) => {
    return (
        <Context.Provider value={{ total: 100 }}>
            { children }
        </Context.Provider>
    )
}