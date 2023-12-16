import "./css/globalStyle.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Game from "./pages/Game";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>  
        <Navbar /> 
        <Routes>
          {/* routes */}
          <Route path="master/" element={<HomePage/> } />      
          <Route path="master/about" element={<AboutMe/>} />
          <Route path="master/portfolio" element={<Portfolio/>} />
          <Route path="master/game" element={<Game/>} />
        </Routes>
    </BrowserRouter>
  )
}