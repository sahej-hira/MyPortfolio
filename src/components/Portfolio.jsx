import React from "react";
import QuestionBox from "../assets/portfolio_pics/QuestionBox.png";
import RandomQuoteGenerator from "../assets/portfolio_pics/RandomQuoteGenerator.png";
import VFierce from "../assets/portfolio_pics/VFierce.png";
import AmbulanceDetection from "../assets/portfolio_pics/AmbulanceDetection.png";
import SpeaKub from "../assets/portfolio_pics/speakub_image.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      name: "Ambulance Detection System",
      src: AmbulanceDetection,
      URL: "https://github.com/sahej-hira/Ambulance-Identification",
      description: "A web app that detects ambulance in real-time and custom changes traffic lights to let emergency vehicles pass.",
      button: "Code",
    },
    {
      id: 2,
      name: "SpeaKub",
      src: SpeaKub,
      URL: "https://speakub.qzz.io/",
      description: "A web app where we help users with anxiety management, communication skills and interview prep.",
      button: "Demo",
    },
    {
      id: 3,
      name: "QuestionBox.ai",
      src: QuestionBox,
      URL: "https://github.com/sahej-hira/QuestionBox.ai",
      description: "A web app that uses AI to give personalized question papers to practice from.",
      button: "Code",
    },
    {
      id: 4,
      name: "VFierce",
      src: VFierce,
      URL:"https://github.com/shark-lamp/vfierce",
      description: "A web app that helps new women enterpreneurs with the knowledge of governmnet schemes and resources to their rescue.",
      button: "Code",
    },
    {
      id: 5,
      name: "Random Quote Generator",
      src: RandomQuoteGenerator,
      URL:"https://github.com/shark-lamp/QuestionBox.ai",
      description: "A web app that generates random quotes.",
      button: "Code",
    },
  ];

  const handleProjectClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      id="portfolio"
      className="w-full text-[var(--muted)] py-40"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4" style={{color: 'var(--primary)'}}>
            Projects
          </h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{backgroundColor: 'var(--accent)'}}></div>
          <p className="text-xl text-[var(--muted)] max-w-2xl mx-auto">
            Here are some of the projects I've worked on recently.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolios.map(({ id, name, src, URL, description, button }) => (
            <div 
              key={id} 
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-gray-700 hover:border-[var(--accent)]"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={src}
                  alt={name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              {/* Content Container */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-[var(--accent)] transition-colors duration-300">
                  {name}
                </h3>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-6 min-h-[60px]">
                  {description}
                </p>
                
                {/* Button */}
                <button
                  onClick={() => handleProjectClick(URL)}
                  className="w-full py-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800"
                  style={{
                    backgroundColor: 'var(--accent)',
                    boxShadow: '0 4px 15px rgba(var(--accent-rgb), 0.3)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = 'var(--primary)';
                    e.target.style.boxShadow = '0 6px 20px rgba(var(--accent-rgb), 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = 'var(--accent)';
                    e.target.style.boxShadow = '0 4px 15px rgba(var(--accent-rgb), 0.3)';
                  }}
                >
                  {button} →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-[var(--muted)] mb-4">
            Interested in working together?
          </p>
          <a 
            href="#contact" 
            className="inline-block py-3 px-8 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105"
            style={{backgroundColor: 'var(--accent)'}}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
