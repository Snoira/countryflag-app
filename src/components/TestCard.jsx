import { useState } from "react"
import { useAppContext } from "../AppContext"
import style from './TestCard.module.css'

const TestCard = ({ country, nextSlide }) => {
    const { pointCounter } = useAppContext();
    const [showInput, setShowInput] = useState(false);
    const [wrongAnswer, setWrongAnswer] = useState(false)
    const [completed, setCompleted] = useState(false)

    const rightAnswer = () => {
        setShowInput(false)
        setWrongAnswer(false)
        setCompleted(true)
        nextSlide()
    }

    const handleAnswer = () => {
        let answer = document.getElementById("answerInput").value.toLowerCase();
        if (answer === country.name.common.toLowerCase()) {
            pointCounter(1)
            rightAnswer()
        } else {
            setWrongAnswer(true);
        }
    }

    return (
        <div className={completed ? `${style.cardContainer} ${style.completed}` : style.cardContainer} >
            <img className={showInput ? style.backgroundFlag : style.flag}
                src={country.flags.png}
                alt={country.flags.alt}
                onClick={() => { !completed && setShowInput(!showInput); console.log(country.name.common); setWrongAnswer(false) }} 
                popovertarget="IC"/>

            { !completed && showInput &&
            
                <div id="IC" className={`${style.inputContainer} ${wrongAnswer ? style.shakeEffect : ''}`}
                    style={showInput ? { display: 'flex' } : { display: 'none' }}
                    popover >
                    <input id="answerInput"
                        className={style.answerInput}
                        type="text"
                        pattern="[a-zA-Z]*"
                        placeholder="Name of country"></input>
                    <button className={style.answerBtn} onClick={() => { handleAnswer() }}>ok</button>
                </div>
            }

        </div>

    )
}

export default TestCard;