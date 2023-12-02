import {useState} from 'react'

const CountryInfo = (props) => {
    const {country, index} = props
    const [flagClicked, setFlagClicked] = useState(false)

    // console.log(country.name.common)
    return (
        <li key= {index}>
           <img src={country.flags.png} alt={country.flags.alt}
           onClick={()=>{setFlagClicked(!flagClicked)}}/>
            {
            flagClicked &&
            <div>
                <p>{country.name && country.name.common}</p>
                {country.capital && country.capital.map((capital, index) => <p key={index}>{capital}</p> )}
                <p>{country.population && country.population}</p>
            </div>
            }
        </li>
        
    )
}

export default CountryInfo