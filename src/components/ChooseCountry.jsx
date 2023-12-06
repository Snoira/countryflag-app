import { useEffect, useState, useParams } from 'react'
import CountryInfo from "./CountryInfo"

const ChooseCountry = (props) => {
    const [countries, setCountries] = useState([])


    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(props.continent)
            const data = await response.json()
            console.log(data)
            setCountries(data)
        }
        fetchData();
    }, [])

    return (
        <div className='flagContainer'>
            {
            countries.map((country, index) => {
                return(
                    <div key={index} className='flags'>
                      <CountryInfo country={country} index={index} />  
                    </div>
                )
            })
        }
        </div>
    )
}

export default ChooseCountry;