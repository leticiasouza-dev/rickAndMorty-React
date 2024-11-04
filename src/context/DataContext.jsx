import axios from "axios";
import { Children, createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = ({children}) => {

    const [data, setData] = useState([]);

    const fetchData = async (endpoint) =>{
        const resposta = await axios.get(`https://rickandmortyapi.com/api/${endpoint}`)
        setData(resposta.data)
    }

    return(
        <DataContext.Provider value={{data, fetchData}}>
            {children}
        </DataContext.Provider>
    )
}