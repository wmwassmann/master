import React, { useEffect } from 'react';
import { Route, Routes, Link, useLocation } from 'react-router-dom';
import HomePage from "./pages/HomePage";
import Contact from "./pages/Contact";
import Game from "./pages/Game";
import Resume from "./pages/Resume";
import Navbar from "./components/Navbar/Navbar";
import SiteHub from './pages/SiteHub';

export default function App() {
  

  return ( 
    <>
      <div className="nav-global">
        <Navbar /> 
      </div>
      {/* <SiteHub/> */}
      <Routes>
        <Route path="/" element={<HomePage/>} />      
        <Route path="/resume" element={<Resume/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/game" element={<Game/>} />
      </Routes>
    </>
  )
}


// import "./css/globalStyle.css";
// import { Route, Routes, HashRouter as Router } from 'react-router-dom';
// import HomePage from "./pages/HomePage";
// import Contact from "./pages/Contact";
// import Game from "./pages/Game";
// import Resume from "./pages/Resume";
// import Navbar from "./components/Navbar/Navbar";

// export default function App() {
//   return ( 
//       <>
//       <div className="nav-global">
//         <Navbar /> 
//       </div>
//         <Routes>
//           <Route path="/" element={<HomePage/> } />      
//           <Route path="/resume" element={<Resume/>} />
//           <Route path="/contact" element={<Contact/>} />
//           <Route path="/game" element={<Game/>} />
//         </Routes>
//       </>
//   )
// }