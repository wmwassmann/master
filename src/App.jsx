import "./css/style.css";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <BrowserRouter>       
        <Routes>
          {/* routes */}
          <Route index element={<HomePage/> } />      
          <Route path="about" element={<AboutMe/>} />
          <Route path="portfolio" element={<Portfolio/>} />
        </Routes>
    </BrowserRouter>
  )
}