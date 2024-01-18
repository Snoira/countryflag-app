import { useState } from "react"
import { useAppContext } from "../AppContext"
import style from './TestCard.module.css'

const TestCard = ({ country }) => {
    const { pointCounter } = useAppContext();
    const {flagClicked, setFlagClicked} = useState(false)

    return (
        <div className={style.cardContainer} >
            <img className={style.flag} src={country.flags.png} alt={country.flags.alt}/>
            <div>
                <input id="answerInput" type="text"></input>
            <button onClick={()=> {
                // let answer = document.getElementById("answerInput").value;
                console.log(document.getElementById("answerInput").value)
                console.log(country.name.common)
            }}>ok</button>
            </div>
        </div>

    )
}

export default TestCard;