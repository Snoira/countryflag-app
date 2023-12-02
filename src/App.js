import './App.css';
// import ChooseContinent from './components/ChooseContinent';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
// import FlashcardPage from './pages/FlashcardPage';
// import TestPage from './pages/TestPage';
import Flags from './pages/Flags';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      {/* <Route path='/Flashcards' element={<FlashcardPage />}/>
      <Route path='/Test' element={<TestPage />} />  */}
      <Route path='/Flags/' element={<Flags />} />
      </Routes>
      {/* <ChooseContinent /> */}
    </div>
  );
}

export default App;
