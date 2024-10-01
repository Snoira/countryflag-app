import { Link } from "react-router-dom";
import { useAppContext } from "../AppContext";
import ChooseContinent from "../components/ChooseContinent"
import SimpleCarousel from "../components/ChooseCountry";
import style from '../components/ChooseContinentStyle.module.css'

const TestPage = () => {

    const { countries, points } = useAppContext();

    return (
        <div className={style.TestPage}>
            <ChooseContinent />
            {
                countries.length > 0 &&
                <>
                    <h3>Points: {points}</h3>
                    <SimpleCarousel />
                </>
            }
            <Link to="/" className={style.homeLink}>back to homepage</Link>
        </div>
    )
}

export default TestPage