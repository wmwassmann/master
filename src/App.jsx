import "./css/globalStyle.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <BrowserRouter>  
        <Navbar /> 
        <Routes>
          {/* routes */}
          <Route index element={<HomePage/> } />      
          <Route path="about" element={<AboutMe/>} />
          <Route path="portfolio" element={<Portfolio/>} />
        </Routes>
    </BrowserRouter>
  )
}