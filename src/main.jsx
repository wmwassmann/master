import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Calculatron from '../Projects/Calculatron-5000/FrontEnd/src/CalculatronApp.jsx';
import { HashRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
)
