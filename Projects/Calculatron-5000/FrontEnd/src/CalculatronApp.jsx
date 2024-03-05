import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import CalculatronHomePage from "./pages/HomePage";


export default function Calculatron() {  

    return ( 
        <>
            <Routes>
                <Route path="/calculatron" element={<CalculatronHomePage/>} /> 
            </Routes>
        </>
    )
  }