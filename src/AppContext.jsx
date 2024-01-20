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

    const shuffleArray = () => {
        const newArray = [...countries];
        for (let i = newArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        setCountries(newArray);
      };

    const pointCounter = (n) => {
        setPoints(points+n)
    }

    const contextValue = {
        countries, 
        setCountries,
        points,
        fetchData,
        pointCounter,
        shuffleArray,
    }

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}