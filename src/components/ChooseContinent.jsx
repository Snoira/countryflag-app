// import { useState } from "react"
import { useAppContext } from "../AppContext";

const ChooseContinent = () => {
    const {fetchData} = useAppContext();

    return (
        <>
            <p>Select Continent</p>
            <select onChange={async (e) => { e.target.value && await fetchData(e.target.value) }}>
                <option value="" >Continents</option>
                <option value="https://restcountries.com/v3.1/region/africa" >Africa</option>
                <option value="https://restcountries.com/v3.1/region/asia" >Asia</option>
                <option value="https://restcountries.com/v3.1/region/europe" >Europe</option>
            </select>
        </>
    )
}

export default ChooseContinent;