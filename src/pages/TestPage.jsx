import { useAppContext } from "../AppContext";
import ChooseContinent from "../components/ChooseContinent"
// import TestCard from "../components/TestCard";
import SimpleCarousel from "../components/ChooseCountry";

const TestPage = () => {

    const { countries, points } = useAppContext();

    return (
        <>
            <ChooseContinent />
            
            {
                countries.length > 0 &&
                <>
                    {/* <h6>Points: {points}/{countries.length} </h6> */}
                    <SimpleCarousel />
                </>
            }
        </>
    )
}

export default TestPage