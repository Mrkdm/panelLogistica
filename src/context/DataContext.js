import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const DataContext = createContext();

var dataFixed ={}



export const DataProvider = ({children}) => {
    useEffect(()=>{
    (async()=>{
        dataFixed = await axios.get('http://68.183.16.45/api/message')
    })()
})
    const [client, setClient] = useState(dataFixed);
    return (
        <DataContext.Provider value={{
            client,
            setClient
        }}>
            {children}
        </DataContext.Provider>
    )
}
