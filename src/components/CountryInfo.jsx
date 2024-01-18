import { useState } from 'react'
import { Link } from "react-router-dom";
import style from './CountryInfoStyle.module.css'

const CountryCard = ({ country }) => {
    const [flagClicked, setFlagClicked] = useState(false)

    return (
        <div className={flagClicked ? style.modal : style.cardContainer}>
            {/* <div className={style.flagContainer}>
                
            </div> */}
            <img className={style.flagImg} src={country.flags.png} alt={country.flags.alt}
                onClick={() => setFlagClicked(!flagClicked) } />
            {/* {
                flagClicked &&
                <>
                    <button className={style.closeBtn} onClick={() => setFlagClicked(!flagClicked) } 
                    >X</button>
                    <div className={style.infoContainer}>
                        <p>Country: {country.name ? country.name.common : ""}</p>
                        {
                            country.capital ?
                                country.capital.map((capital, index) =>
                                    <p key={index}>Capital: {capital}</p>
                                ) : "No capital found"
                        }
                        <p>Population: {country.population ? country.population : ""}</p>
                    </div>
                    <Link className={style.TestLink} to="/Test">Ready to try your knowledge?</Link>
                </>
            } */}
        </div>

    )
}

export default CountryCard