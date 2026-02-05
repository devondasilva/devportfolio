import './index.css'
import App from './App.tsx'
import About from './pages/About.tsx'
import Myproject from './pages/Myprojects.tsx';
import Contact from './pages/Contact.tsx';
import Brand from './components/Brand.tsx';
import WebDesign from './components/Web.tsx';
import LogoShow from './components/logoshow.tsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


const root = document.getElementById("root");

if (root) {
  ReactDOM.createRoot(root).render(
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Aboutme" element={<About />} />
        <Route path="/Myprojects" element={<Myproject/>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Brand" element={<Brand />} />
        <Route path="/WebDesign" element={<WebDesign />} />
        <Route path="/LogoShow" element={<LogoShow />} />
        
      </Routes>
    </Router>
  );
} else {
  <div>Not found</div>
  console.error("Root element not found");
}