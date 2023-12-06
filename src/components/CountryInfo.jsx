import { useState } from 'react'

const CountryInfo = (props) => {
    const { country, index } = props
    const [flagClicked, setFlagClicked] = useState(false)

    return (
        <div key={index}>
            <img className='flagImg' src={country.flags.png} alt={country.flags.alt}
                onClick={() => { setFlagClicked(!flagClicked) }} />
            {
                flagClicked &&
                <div className='countryInfo'>
                    <p>Country: {country.name && country.name.common}</p>
                    {country.capital && country.capital.map((capital, index) => <p key={index}>Capital: {capital}</p> )}
                    <p>Population: {country.population && country.population}</p>
                </div>
            }
        </div>
    )
}

export default CountryInfo