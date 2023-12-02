import { useEffect, useState, useParams } from 'react'
// import CountryInfo from "./CountryInfo"
import { Link } from 'react-router-dom'

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

    return (
        <div>
            <Link to={"/Flags/"} state={countries} >
                <button onClick={()=>{console.log(countries)}}>testlänk?</button>
            </Link>

            {/* {
            countries.map((country, index) => {
                return(
                    // <CountryInfo key={index} country={country} index={index} />
                    <Link to={"/Flags/" + country.name.common} state={country} key={index} >
                        <p>testlänk?</p>
                    </Link>
                )
            })
        } */}
        </div>
    )
}

export default ChooseCountry;