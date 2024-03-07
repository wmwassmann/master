import React, { useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Game from "../Projects/WordGame/src/Pages/WordGameHomePage.jsx";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar/Navbar";
import SiteHub from './pages/SiteHub';
import CalculatronHomePage from '../Projects/Calculatron/FrontEnd/src/Pages/CalculatronHomePage.jsx';

export default function App() {
  

  return ( 
    <>
      <div className="nav-global">
        <Navbar /> 
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>} />      
        <Route path="/resume" element={<Resume/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/calculatron" element={<CalculatronHomePage />}/>
        <Route path="/wordgame" element={<Game/>} />
      </Routes>
    </>
  )
  }