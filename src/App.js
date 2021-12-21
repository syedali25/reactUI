
import './App.css';

import { Routes, Route } from "react-router-dom";
import Login from './pages/Login';
import Console from './pages/Console';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/console" element={<Console />} />
      </Routes>


    </>
  );
}

export default App;
