import ChooseCountry from "../components/ChooseCountry"
import { useLocation, Link } from "react-router-dom"
import { useState } from "react"

const TestPage = () => {
    const [points, setPoints] = useState(null)
    const location = useLocation()
    console.log(location.state)

    const countingPoints = () => {
        let count = points + 1;
        setPoints(count)
    }

return (
    <div className="flagPage">
    <h1>Test your knowledge!</h1>
    <Link to={"/"}>Home</Link>
    <h3>{points}</h3>
    <div className="chooseCountryContainer">
      <ChooseCountry continent={location.state} fromPage={"test"} />  
    </div>  
    </div>
)
}

export default TestPage