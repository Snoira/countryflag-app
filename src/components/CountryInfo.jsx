import {useState} from 'react'

const CountryInfo = (props) => {
    const {country, index} = props
    const [flagClicked, setFlagClicked] = useState(false)

    // console.log(country.name.common)
    return (
        <li>
           <img src={country.flags.png} alt={country.flags.alt}
           onClick={()=>{setFlagClicked(!flagClicked)}}/>
            {
            flagClicked &&
            <div>
                <p>{country.name.common}</p>
                {country.capital.map((capital)=>{
                    return <p>{capital}</p>
                })}
                <p>{country.population}</p>
            </div>
            }
        </li>
        
    )
}

export default CountryInfo