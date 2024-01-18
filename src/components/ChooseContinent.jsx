// import { useState } from "react"
import { useAppContext } from "../AppContext";

const ChooseContinent = () => {
    const {fetchData} = useAppContext();

    return (
        <>
            <h1>Select Continent</h1>
            <select defaultValue="" required 
                onChange={async (e) => 
                    { e.target.value && await fetchData(e.target.value) }} >
                <option hidden value="" >Select a continent</option>
                <option value="https://restcountries.com/v3.1/region/africa" >Africa</option>
                <option value="https://restcountries.com/v3.1/region/asia" >Asia</option>
                <option value="https://restcountries.com/v3.1/region/europe" >Europe</option>
            </select>
        </>
    )
}

export default ChooseContinent;