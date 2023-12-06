import { useEffect, useState } from 'react'
import CountryInfo from "./CountryInfo"
import Flags from './Flags'

const ChooseCountry = (props) => {
    const [countries, setCountries] = useState([])

    // console.log(props.fromPage)
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
                if(props.fromPage == "flashcards"){
                    return(
                    <div key={index} className='flags'>
                        <CountryInfo country={country} index={index} />  
                    </div>
                    )
                } else{
                    return(
                        <div key={index} className='flags'>
                          <Flags country={country} index={index} />  
                        </div>
                    )
                }
            })
        }
        </div>
    )
}

export default ChooseCountry;