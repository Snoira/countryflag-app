import { Link } from "react-router-dom"

function BtnLink({ to, children }){
    return <Link to={to}><button className="BtnLink">{children}</button></Link>;
}

const HomePage = () => {
    return (
        <div className="Page HomePage">
            <div className="Frame">
                <h1 className="titel" >Flag Quiz</h1>
            <div className="BtnContainer">
                <BtnLink to="/Test">Try your knowledge!</BtnLink>
                <BtnLink to="/Flashcards">Study with flash cards</BtnLink>
            </div>
            </div>
        </div>
    )
}

export default HomePage