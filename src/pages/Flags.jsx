import ChooseCountry from "../components/ChooseCountry"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const Flags = () => {

    const location = useLocation()
    console.log(location.state)

    return (
        <div className="flagPage">
        <h1>Try your knowledge of flags!</h1>
        <div className="chooseCountryContainer">
            <ChooseCountry continent={location.state}/>
        </div>
        </div>
        
    )
}

export default Flags