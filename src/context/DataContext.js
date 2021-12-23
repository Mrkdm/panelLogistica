import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
export const DataContext = createContext();

var dataFixed ={}

useEffect(()=>{
    (async()=>{
        dataFixed = await axios.get('http://68.183.16.45/api/message')
    })
})

export const DataProvider = ({children}) => {
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
