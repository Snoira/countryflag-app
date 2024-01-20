import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext";
import ChooseContinent from "../components/ChooseContinent";
import CountryCard from "../components/CountryInfo";

const FlashcardPage = () => {
    const { countries, shuffleArray } = useAppContext();

    return (
        <div className="Page FlashCardPage">

            <ChooseContinent />

            {countries.length > 0 &&
                <>
                    {/* <button onClick={()=>{ shuffleArray() }} >Shuffle</button> */}
                    <div className="flagContainer">
                        {countries.map((country, index) => {
                            return (
                                <CountryCard key={index} country={country} />
                            )
                        })}
                    </div>

                </>
            }
            <div className="linkBtnContainer">
                <Link to="/" className="homeLink">back to homepage</Link>
                {countries.length > 0 && <button onClick={() => { shuffleArray() }} >Shuffle</button>}
            </div>
        </div>
    )
}

export default FlashcardPage