// import { Link } from "react-router-dom"
import ChooseContinent from '../components/ChooseContinent';

const HomePage = () => {
    return (
        <div className="HomePage">
            <h1>Länder och Flaggor</h1>
            <ChooseContinent />

            {/* <Link to="/Flashcards">
                <button>Flash Cards</button>
            </Link>
            <Link to="/Test">
            <button>Test</button>
            </Link> */}
        </div>
    )
}

export default HomePage