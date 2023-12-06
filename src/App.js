import './App.css';
import { Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import Flags from './pages/Flags';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Flags/' element={<Flags />} />
      </Routes>
    </div>
  );
}

export default App;
