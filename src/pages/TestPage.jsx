// import ChooseCountry from "../components/ChooseCountry"
// import { useLocation, Link } from "react-router-dom"
// import { useState } from "react"

// const TestPage = () => {
//     const [points, setPoints] = useState(0)
//     const location = useLocation()
//     console.log(location.state)

//     const countingPoints = () => {
//         let count = points + 1;
//         setPoints(count)
//     }

// return (
//     <div className="flagPage">
//     <h1>Test your knowledge!</h1>
//     <Link to={"/"}>Home</Link>
//     <h2>{points} points</h2>
//     <div className="chooseCountryContainer">
//       <ChooseCountry continent={location.state} fromPage={"test"} countingPoints={countingPoints} />  
//     </div>  
//     </div>
// )
// }

// export default TestPage