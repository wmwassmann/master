import React, { useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Game from "./pages/Game";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar/Navbar";
import SiteHub from './pages/SiteHub';
import CalculatronHomePage from '../Projects/Calculatron5000/FrontEnd';

export default function App() {
  

  return ( 
    <>
      <div className="nav-global">
        <Navbar /> 
      </div>
      <Routes>
        <Route path="/" element={<HomePage/>} />      
        <Route path ="/calculatron" element={<CalculatronHomePage />}/>
        <Route path="/resume" element={<Resume/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </>
  )
  }