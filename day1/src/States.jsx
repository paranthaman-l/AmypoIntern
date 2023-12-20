/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/rules-of-hooks */
import { useContext, createContext, useState } from "react";


const Context = createContext();

export const States = ({ children }) => {
    const [data, setData] = useState([]);
    return (
        <Context.Provider
            value={{
                data,
                setData
            }}>
            {children}
        </Context.Provider>
    )
}

export const useStates = () => useContext(Context);