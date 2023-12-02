import {useState} from "react"
import ChooseCountry from "./ChooseCountry"

const ChooseContinent = () => {

const [selectedContinent, setSelectedContinent] = useState("")
const [buttonClicked, setButtonClicked] = useState(false)

    return (
        <div>
            <h1>{buttonClicked ? "":"Choose a Continent!"}</h1>
            <hr />
            <select name="Continents" id="continents">
                <option value="https://restcountries.com/v3.1/region/africa">Africa</option>
                <option value="https://restcountries.com/v3.1/region/asia">Asia</option>
                <option value="https://restcountries.com/v3.1/region/europe">Europe</option>
            </select>
            <button
            onClick={()=>{
                const continent = document.querySelector("#continents").value;
                setSelectedContinent(continent)
                console.log(buttonClicked)
                setButtonClicked(!buttonClicked)
            }}
            >{buttonClicked ? "Hide Countries" : "Show Countries"}</button>
            {
                buttonClicked && <ChooseCountry continent={selectedContinent} />
            }
        </div>

    )
}

export default ChooseContinent;