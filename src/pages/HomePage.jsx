import { Link } from "react-router-dom"
import style from './HomePageStyle.module.css'

function BtnLink({ to, children }){
    return <Link to={to}><button className={style.BtnLink}>{children}</button></Link>;
}

const HomePage = () => {
    return (
        <div className={style.Page}>
            <div className={style.Frame}>
                <h1 className={style.Title} >Flag Quiz</h1>
            <div className={style.BtnContainer}>
                <BtnLink to="/Test">Try your knowledge!</BtnLink>
                <BtnLink to="/Flashcards">Study with flash cards</BtnLink>
            </div>
            </div>
        </div>
    )
    // return (
    //     <div className="Page HomePage">
    //         <div className="Frame">
    //             <h1 className="titel" >Flag Quiz</h1>
    //         <div className="BtnContainer">
    //             <BtnLink to="/Test">Try your knowledge!</BtnLink>
    //             <BtnLink to="/Flashcards">Study with flash cards</BtnLink>
    //         </div>
    //         </div>
    //     </div>
    // )
}

export default HomePage