import ChooseCountry from "../components/ChooseCountry"
import { useLocation, Link } from "react-router-dom"

const FlashcardPage = () => {

    const location = useLocation()
    console.log(location.state)

    return (
        <div className="flagPage">
        <h1>Flag-Cards</h1>
        <Link to={"/"}>Home</Link>
        <div className="chooseCountryContainer">
            <ChooseCountry continent={location.state} fromPage={"flashcards"}/>
        </div>
        </div>
    )
}

export default FlashcardPage