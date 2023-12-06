import ChooseCountry from "../components/ChooseCountry"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const Flags = () => {

    const location = useLocation()
    
    return (
        <div>
            <ChooseCountry continent={location.state}/>
        </div>
    )
}

export default Flags