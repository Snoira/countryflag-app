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
                    <h3>Points: {points}/{countries.length} </h3>
                    <SimpleCarousel />
                </>
            }
        </div>
    )
}

export default TestPage