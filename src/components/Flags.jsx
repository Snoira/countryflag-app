import { useState, useEffect } from 'react'

const Flags = (props) => {
    const { country, index } = props
    const [flagClicked, setFlagClicked] = useState(false)
    // const [rightAnswer, setRightAnswer] = useState(false)

    const { countingPoints } = props

    
    // useEffect(()=>{
    //     if (rightAnswer) {
    //         countingPoints();
    //     } 
    // },[])


    return (
        <div key={index}>
            <img className={rightAnswer ? 'flagImg done':'flagImg'} src={country.flags.png} alt={country.flags.alt}
                onClick={() => { setFlagClicked(!flagClicked) }} />
            {
                flagClicked &&
                <div className='flagTestContainer'>
                    <div className='inputContainer'>
                      <label>Country: </label>
                    <input id="answerInput" type="text" />  
                    </div>
                    <button className='inputButton'
                        onClick={() => {
                            let answer = document.querySelector("#answerInput").value;
                            if (answer === country.name.common) {
                                // countingPoints();
                                // setRightAnswer(true)
                                // setFlagClicked(!flagClicked)
                            }
                        }}
                    >ok</button>

                </div>
            }
        </div>
    )
}

export default Flags