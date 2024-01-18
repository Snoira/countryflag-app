// import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext";
import ChooseContinent from "../components/ChooseContinent";
import CountryCard from "../components/CountryInfo";

const FlashcardPage = () => {
    const {countries}= useAppContext();

    return (
        <div>
            <ChooseContinent />
            <div className="Frame">
                {countries.length > 0 &&
                    countries.map((country, index) => {

                        return (
                            <CountryCard key={index} country={country} />
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default FlashcardPage