import React from "react";
import { Link } from "react-router-dom";
import VerticalTextSlider from "./VerticalTextSlider";

const Home = () => {
  return (
    <main>
      <section id="home" className="min-h-screen flex items-center pt-20">
        <div className="max-w-5xl mx-auto w-full px-6 py-20 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="mb-4 text-sm uppercase text-blue-900 font-medium tracking-widest">Sahej Hira</div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight flex items-baseline">
              <span className="mr-3">The</span>
              <VerticalTextSlider
                items={["poet", "writer", "painter", "founder", "full stack dev", "survivor", "gamer", "explorer", "music lover", "traveller", "blogger", "vlogger", "photographer", "designer", "innovator", "visionary", "coder", "artist", "storyteller","adventurer", "strategist", "leader", "team player", "communicator", "problem solver", "ideator", "collaborator", "researcher", "influencer", "mentor", "coach", "volunteer", "activist"]}
                interval={2200}
                inline={true}
                className="text-4xl md:text-6xl font-extrabold"
              />
            </h1>
            <p className="mt-6 text-lg muted max-w-xl">
              I don't like to be defined only by my profession. There is more to us as humans — I'm a multifaceted individual with a passion for creativity and self-expression. Specializing in full-stack development, machine learning, cybersecurity, and building meaningful connections through technology.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link 
                to="/portfolio" 
                className="px-6 py-3 rounded-md accent-btn font-semibold shadow-md"
                aria-label="View Sahej Hira's development projects and portfolio"
              >
                View projects
              </Link>
              <Link 
                to="/blog" 
                className="px-6 py-3 rounded-md border" 
                style={{borderColor: 'rgba(255,255,255,0.04)', color: 'var(--muted)'}}
                aria-label="View Sahej Hira's poetry and blog posts"
              >
                View Poetry
              </Link>
            </div>
          </div>

          <div className="flex-1 flex flex-col items-center md:items-end w-full relative">
            <div className="w-72 h-72 rounded-2xl glass flex flex-col items-center justify-center overflow-visible relative">
              <div className="w-72 h-72 rounded-2xl overflow-hidden">
                <img 
                  src={process.env.PUBLIC_URL + '/sahej.jpg'} 
                  alt="Sahej Hira - Full Stack Developer, Poet, and Founder of Speakub" 
                  loading="lazy" 
                  className="w-full h-full object-cover"
                  width="288"
                  height="288"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
