import ChooseCountry from "../components/ChooseCountry"
import { useLocation, Link } from "react-router-dom"
import { useState } from "react"

const TestPage = () => {

    const location = useLocation()
    console.log(location.state)

    const countingPoints = (point) => {
        let points = 0;
        
    }

return (
    <div className="flagPage">
    <h1>Test your knowledge!</h1>
    <Link to={"/"}>Home</Link>
    <div className="chooseCountryContainer">
      <ChooseCountry continent={location.state} fromPage={"test"}/>  
    </div>  
    </div>
)
}

export default TestPage