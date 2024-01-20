import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext";
import ChooseContinent from "../components/ChooseContinent"
// import TestCard from "../components/TestCard";
import SimpleCarousel from "../components/ChooseCountry";

const TestPage = () => {

    const { countries, points } = useAppContext();

    return (
        <div className="Page">
            <ChooseContinent />
            {
                countries.length > 0 &&
                <>
                    <h3>Points: {points}</h3>
                    <SimpleCarousel />
                </>
            }
            <Link to="/" className="homeLink">back to homepage</Link>
        </div>
    )
}

export default TestPage