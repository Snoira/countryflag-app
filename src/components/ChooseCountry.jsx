import { useEffect, useState } from 'react'
import CountryInfo from "./CountryInfo"
import Flags from './Flags'

const ChooseCountry = (props) => {
    const [countries, setCountries] = useState([])

    const { continent, fromPage, countingPoints } = props

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(continent)
            const data = await response.json()
            setCountries(data)
        }
        fetchData();
    }, [])

    return (
        <div className='flagContainer'>
            {
            countries.map((country, index) => {

                if(fromPage == "flashcards"){
                    return(
                    <div key={index} className='flags'>
                        <CountryInfo country={country} index={index} />  
                    </div>
                    )
                } else{
                    return(
                        <div key={index} className='flags'>
                          <Flags country={country} index={index} countingPoints={countingPoints} />  
                        </div>
                    )
                }

            })
        }
        </div>
    )
}

export default ChooseCountry;