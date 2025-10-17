import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHelmet = ({ 
  title = "Sahej Hira - Full Stack Developer | Poet | Founder | Portfolio 2025",
  description = "Sahej Hira - Full Stack Developer, Poet, and Founder of Speakub. Expert in React, JavaScript, Python, ML/AI, and cybersecurity. Explore my projects, poetry, and journey from recovery to innovation.",
  keywords = "Sahej Hira, Full Stack Developer, React Developer, JavaScript, Python, Machine Learning, AI, Cybersecurity, Portfolio, Poet, Speakub, Web Development, Frontend, Backend",
  canonical = "https://sahej-hira.github.io/MyPortfolio/",
  ogImage = "https://sahej-hira.github.io/MyPortfolio/sahej.jpg"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SEOHelmet;