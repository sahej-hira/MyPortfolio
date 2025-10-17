import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import NavBar from "./components/NavBar";
import StarsBackground from "./components/StarsBackground";
import Home from "./components/Home";
import SEOHelmet from "./components/SEOHelmet";
import PerformanceOptimizer from "./components/PerformanceOptimizer";

import FooterSocialLinks from "./components/FooterSocialLinks";
import About from "./components/About";
import Packages from "./components/Experience";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";

function App() {
  return (
    <HelmetProvider>
      <PerformanceOptimizer />
      <div>
        <StarsBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <NavBar />
          <Routes>
            <Route path="/" element={
              <>
                <SEOHelmet 
                  title="Sahej Hira - Full Stack Developer | Poet | Founder | Portfolio 2025"
                  description="Welcome to Sahej Hira's portfolio. Full Stack Developer, Poet, and Founder specializing in React, JavaScript, Python, ML/AI, and cybersecurity. Discover my journey from recovery to innovation."
                  canonical="https://sahej-hira.github.io/MyPortfolio/"
                />
                <Home />
              </>
            } />
            <Route path="/about" element={
              <>
                <SEOHelmet 
                  title="About Sahej Hira - Developer Journey & Background"
                  description="Learn about Sahej Hira's journey from sports and early coding to becoming a full-stack developer, poet, and founder. Discover the story of recovery, resilience, and building Speakub."
                  canonical="https://sahej-hira.github.io/MyPortfolio/about"
                />
                <About />
              </>
            } />
            <Route path="/portfolio" element={
              <>
                <SEOHelmet 
                  title="Sahej Hira's Projects - Full Stack Development Portfolio"
                  description="Explore Sahej Hira's development projects including React applications, Python ML projects, cybersecurity tools, and full-stack web applications. See the technical skills in action."
                  canonical="https://sahej-hira.github.io/MyPortfolio/portfolio"
                />
                <Portfolio />
              </>
            } />
            <Route path="/experience" element={
              <>
                <SEOHelmet 
                  title="Sahej Hira's Experience - Internships & Skills"
                  description="Discover Sahej Hira's professional experience including internships in ML/AI, cybersecurity, and web development. Learn about technical skills and career progression."
                  canonical="https://sahej-hira.github.io/MyPortfolio/experience"
                />
                <Packages />
              </>
            } />
            <Route path="/blog" element={
              <>
                <SEOHelmet 
                  title="Sahej Hira's Blog - Poetry, Tech & Recovery"
                  description="Explore Sahej Hira's poetry and writings on Medium. A unique blend of technical insights, personal recovery journey, and creative expression through words."
                  canonical="https://sahej-hira.github.io/MyPortfolio/blog"
                />
                <Blog />
              </>
            } />
          </Routes>
         
          <FooterSocialLinks />
        </div>
      </div>
    </HelmetProvider>
  );
}

export default App;
