import { useState } from "react"
// import { Link } from 'react-router-dom';
import { useAppContext } from "../AppContext"
import style from './TestCard.module.css'

const TestCard = ({ country, nextSlide, index, currentSlide }) => {
    const { pointCounter, changeToCorrectAnswer, filterFlags } = useAppContext();
    const [showInput, setShowInput] = useState(false);
    const [wrongAnswer, setWrongAnswer] = useState(false)

    const rightAnswer = () => {
        setShowInput(false)
        setWrongAnswer(false)
        changeToCorrectAnswer(index)
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
        <div className={country.correctAns ? `${style.cardContainer} ${style.completed}` : style.cardContainer} >
            <img className={showInput ? style.backgroundFlag : style.flag}
                src={country.flags.png}
                alt={country.flags.alt}
                onClick={() => { !country.correctAns && setShowInput(!showInput); console.log(country.name.common); setWrongAnswer(false) }} />

            {currentSlide === index && showInput ?
                <div className={`${style.inputContainer} ${wrongAnswer ? style.shakeEffect : ''}`}
                    style={showInput ? { display: 'flex' } : { display: 'none' }}>
                    <input id="answerInput"
                        className={wrongAnswer ? `${style.answerInput} ${style.wrongInput}` : style.answerInput}
                        type="text"
                        pattern="[a-zA-Z]*"
                        placeholder="Name of country"
                        onClick={() => { setWrongAnswer(false) }}
                        autoFocus
                    />
                    <button className={style.answerBtn} onClick={() => { handleAnswer() }}>ok</button>
                </div> : ''
            }
        </div>
    )
}

export default TestCard;