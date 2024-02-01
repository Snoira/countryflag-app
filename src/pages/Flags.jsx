// import CountryInfo from "../components/CountryInfo"
import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"

const Flags = () => {
      const [countries, setCountries] = useState([])
    const location = useLocation()

 useEffect(()=>{
    console.log(location.state)
    setCountries(location.state)

 },[])

  
    

return(
    <div>
        <h1>test</h1>
        <button
        onClick={()=>{
            console.log(countries)
        }}>
            lieh</button>
    </div>
    // <CountryInfo />
)
}

export default Flags