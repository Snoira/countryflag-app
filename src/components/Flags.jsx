import { useState } from 'react'

const Flags = (props) => {
    const { country, index } = props
    const [flagClicked, setFlagClicked] = useState(false)

    // console.log(country.name.common)
    return (
        <div key={index}>
            <img className='flagImg' src={country.flags.png} alt={country.flags.alt}
                onClick={() => { setFlagClicked(!flagClicked) }} />
            {
                flagClicked &&

                <div className='countryInfo'>
                    <label for="country" >Country: </label>
                    <input id="country" name='country' type="text" />
                    {/* {country.capital &&
                        country.capital.map(index =>
                            <><label for={"capital" + index} >Capital:</label> <input key={index} type="text" id={"capital" + index} name={"capital" + index} /></>
                        )} */}
                </div>

                // <div className='countryInfo'>
                //     <p>Land: {country.name && country.name.common}</p>
                //     {country.capital && country.capital.map((capital, index) => <p key={index}>Huvudstad: {capital}</p> )}
                //     <p>Population: {country.population && country.population}</p>
                // </div>
            }
        </div>

    )
}

export default Flags