import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext(){
    return useContext(AppContext);
}

export function AppProvider({children}){
    const [countries, setCountries] = useState([])
    const [points, setPoints] = useState(0)

    const fetchData = async (API) => {
        const response = await fetch(API);
        const json = await response.json();
        console.log(json)
        setCountries(json)
    }

    const pointCounter = () => {
        setPoints(points+1)
    }

    const contextValue = {
        countries, 
        setCountries,
        fetchData,
        pointCounter,
    }

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}