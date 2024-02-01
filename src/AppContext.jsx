import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export function useAppContext(){
    return useContext(AppContext);
}

export function AppProvider({children}){
    const [countries, setCountries] = useState([])
    const [points, setPoints] = useState(0)


    const fetchData = async (API) => {
        setCountries([])
        const response = await fetch(API);
        const json = await response.json();
        addToObj(json)
    }

    const addToObj = (array) => {
        let newArray = array.map((obj, index)=> {
            return{
                ...obj, 
                correctAns: false,
                addedId: index,
            }
        })
        console.log(newArray)
        setCountries(newArray)
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

    const changeToCorrectAnswer = (index) => {
        const newArr = [...countries];
        newArr[index].correctAns = true;
        setCountries(newArr)
    }

    const sortArr = (key) => {
        const sortedArr = [...countries].sort((a, b) => {
            if (key === "a-z") {
                return a.name.common.localeCompare(b.name.common)
            } else if (key === "z-a") {
                return b.name.common.localeCompare(a.name.common)
            } else if (key === "reverse") {
                return b.addedId - a.addedId
            }
        })
        setCountries(sortedArr)
    }

    const filterFlags = () => {
        let filteredCountries = countries.filter(country => {
            const failedFlags = country.correctAns === false; 
            return failedFlags 
        })
        setCountries(filteredCountries);
    }

    const contextValue = {
        countries, 
        setCountries,
        points,
        fetchData,
        pointCounter,
        shuffleArray,
        changeToCorrectAnswer,
        sortArr,
        filterFlags,
    }

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
}