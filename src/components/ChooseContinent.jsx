import {useState} from "react"
import {Link} from "react-router-dom"
import ChooseCountry from "./ChooseCountry"

const ChooseContinent = () => {

const [selectedContinent, setSelectedContinent] = useState("")
const [buttonClicked, setButtonClicked] = useState(false)

    return (
        <div className="continent">
            <h1 className="continentH1">Choose a Continent</h1>
            <select className="continentSelect" name="Continents" id="continents">
                <option value="https://restcountries.com/v3.1/region/africa">Africa</option>
                <option value="https://restcountries.com/v3.1/region/asia">Asia</option>
                <option value="https://restcountries.com/v3.1/region/europe">Europe</option>
            </select>
            <button className="continentBtn"
            onClick={()=>{
                const continent = document.querySelector("#continents").value;
                setSelectedContinent(continent)
                console.log(buttonClicked)
                setButtonClicked(!buttonClicked)
            }}
            >
                Select Continent
                {/* {buttonClicked ? "Hide Countries" : "Show Countries"} */}
            </button>
            {
                buttonClicked && 
                <>
                <br />
                <br />
                <br />
                <Link to="/Flags/" state={selectedContinent}>Show flags</Link>
                <br />
                </>
                // <ChooseCountry continent={selectedContinent} />
            }
        </div>

    )
}

export default ChooseContinent;