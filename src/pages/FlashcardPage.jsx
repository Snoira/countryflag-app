import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext";
import ChooseContinent from "../components/ChooseContinent";
import CountryInfo from "../components/CountryInfo";

const FlashcardPage = () => {
    const { countries, shuffleArray, sortArr } = useAppContext();

    return (
        <div className="Page FlashCardPage">

            <ChooseContinent />

            {countries.length > 0 &&
                <>
                    <div>
                        {countries.map((country, index) => {
                            return (
                                <CountryInfo key={index} country={country} />
                            )
                        })}
                    </div>
                </>
            }
            <div className="linkBtnContainer">
                <Link to="/" className="homeLink">back to homepage</Link>
                {countries.length > 0 &&
                    <div className="btnContainer" >
                        <button onClick={() => { shuffleArray() }} >Shuffle</button>
                        <button onClick={() => { sortArr("a-z") }} >A-Z</button>
                        <button onClick={() => { sortArr("z-a") }} >Z-A</button>
                        <button onClick={() => { sortArr("reverse") }} >Reverse</button>
                    </div>
                }
            </div>
        </div>
    )
}

export default FlashcardPage