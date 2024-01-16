import { Link } from "react-router-dom"

function BtnLink({ to, children }){
    return <Link to={to}><button className="btnLink">{children}</button></Link>;
}

const HomePage = () => {
    return (
        <div className="HomePage">
            <h1>Flagg quiz</h1>
            <div>
                <BtnLink to="/Flashcards">Study with flash cards</BtnLink>
                <BtnLink to="/Test">Try your knowledge!</BtnLink>
            </div>
        </div>
    )
}

export default HomePage