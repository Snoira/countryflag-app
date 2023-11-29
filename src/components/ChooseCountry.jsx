import { useEffect, useState } from 'react'
import CountryInfo from "./CountryInfo"

const ChooseCountry = (props) => {
const [countries, setCountries] = useState([])


useEffect(() => {
    const fetchData = async () => {
        const response = await fetch(props.continent)
        const data = await response.json()
        // console.log(data)
        setCountries(data)

    }
    fetchData();
}, [])

return(
    <ul>

        {
            countries.map((country, index) => {
                return(
                    <CountryInfo country={country} index={index} />
                )
            })
        }
    </ul>
    

)
}

export default ChooseCountry;