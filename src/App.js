import './App.css';
import { Routes, Route } from "react-router-dom"
import { AppProvider } from './AppContext';
import HomePage from './pages/HomePage'
import FlashcardPage from './pages/FlashcardPage';
import TestPage from './pages/TestPage';

function App() {

  return (
    <AppProvider>
      <div className="App">
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Flashcards' element={<FlashcardPage />} />
          <Route path='/Test' element={<TestPage />} />
        </Routes>
      </div>
    </AppProvider>
  );
}

export default App;
