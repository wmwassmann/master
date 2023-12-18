import "./css/globalStyle.css";
import { Route, Routes, HashRouter as Router } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Game from "./pages/Game";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar";

export default function App() {
  return ( 
      <>
        <Navbar /> 
        <Routes>
          {/* routes */}
          <Route path="/" element={<HomePage/> } />      
          <Route path="/about" element={<AboutMe/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
          <Route path="/game" element={<Game/>} />
        </Routes>
      </>
  )
}