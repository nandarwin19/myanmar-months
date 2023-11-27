import {BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import CoverPage from "./components/CoverPage";
import Months from "./components/Months";
import MonthCard from "./components/MonthCard";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CoverPage/>} />
        <Route path="/months" element={<Months/>} />
        <Route path="/months/:monthId" element={<MonthCard/>}/>
      </Routes>
    </BrowserRouter>    
  )
}

export default App
