import {useState} from "react"
import {Link} from "react-router-dom"

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
            </button>
            {
                buttonClicked && 
                <div className="linkContainer">
                <Link to="/flashcards/" state={selectedContinent}><h4>Study with flash cards</h4></Link>
                <Link to="/test/" state={selectedContinent}><h4>Test your knowledge</h4></Link>
                </div>
            }
        </div>
    )
}

export default ChooseContinent;