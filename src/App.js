import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import StarsBackground from "./components/StarsBackground";
import Home from "./components/Home";

import FooterSocialLinks from "./components/FooterSocialLinks";
import About from "./components/About";
import Packages from "./components/Experience";
import Portfolio from "./components/Portfolio";
import FAQSection from './components/Contact';

function App() {
  return (
    <div>
      <StarsBackground />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Packages />} />
          <Route path="/contact" element={<FAQSection />} />
        </Routes>
       
        <FooterSocialLinks />
      </div>
    </div>
  );
}

export default App;
