import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import FlashcardPage from './pages/FlashcardPage';
import TestPage from './pages/TestPage';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/flashcards/' element={<FlashcardPage />} />
      <Route path='/test/' element={<TestPage />}/>
      </Routes>
    </div>
  );
}

export default App;
