// import { useState } from "react"
import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext";
import style from "./ChooseContinentStyle.module.css"

const ChooseContinent = () => {
    const {fetchData} = useAppContext();

    return (
        <div className={style.SelectContinentContainer}>
            <h1>Select Continent</h1>
            <select className={style.Select}
                defaultValue="" required 
                onChange={async (e) => 
                    { e.target.value && await fetchData(e.target.value) }} >
                <option hidden value="" >Select a continent</option>
                <option value="https://restcountries.com/v3.1/region/africa" >Africa</option>
                <option value="https://restcountries.com/v3.1/region/asia" >Asia</option>
                <option value="https://restcountries.com/v3.1/region/europe" >Europe</option>
            </select>
            {/* <Link to="/" className={style.homeLink}>back to homepage</Link> */}
        </div>
    )
}

export default ChooseContinent;