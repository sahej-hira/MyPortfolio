import React from "react";

// Keep original section order in the data, but we'll render reversed so the
// bottom entry appears first (recent-first display as requested).
const timeline = [
  {
    period: "Nursery to 8th",
    title: "Early performance and sports",
    bullets: [
      "Participated in dances, school musicals, and performed often since nursery.",
      "Won multiple school sports events and learned early teamwork and competition.",
    ],
  },
  {
    period: "9th to 12th",
    title: "School: sport, first code, and challenges",
    bullets: [
      "Captain of various sports teams including throwball and handball; participated in kabaddi, chhucha/chocho, marathons, and shotput.",
      "Experienced bullying in school.",
      "Took both medical and non-medical streams in 11th (COVID struck during 11th).",
      "Took first HTML lessons in 9th and made my first website that year; learned Python and JavaScript by 12th.",
    ],
  },
  {
    period: "College",
    title: "Computer Science, volleyball, and exploration",
    bullets: [
      "Studied Computer Science and played volleyball.",
      "Extended into JavaScript frameworks, backend development, UX design, and full-stack projects.",
      "Explored cyber security, ML/AI and the wider web ecosystem.",
      "Interned at Panesia Infotec as an ML/AI intern.",
      "did multiple courses on coursera and youtube to enhance my skills.",
    ],
  },
  {
    period: "Internship period",
    title: "Cross-disciplinary internships",
    bullets: [
      "Cybersecurity: Extion Infotech.",
      "ML/AI: Techshilla.",
      "Web: Bluestock (team lead).",
      "Gained practical exposure across web, security, and ML during internships.",
    ],
  },
  {
    period: "Paralysis & recovery",
    title: "Health challenge and creative pivot",
    bullets: [
      "Was paralysed — forgot how to walk or feed myself and wasn't sure I would make it.",
      "During recovery I started pursuing poetry as a last, fearless wish: began a Medium poetry page and Instagram channel.",
      "Stayed home for months dealing with severe anxiety; gradually started walking again.",
    ],
  },
  {
    period: "Grad",
    title: "Rebuilding: routine and outreach",
    bullets: [
      "Regular walks turned into regular jogs; still recovering but regaining control.",
      "Started Speakub to help others with anxiety, focusing on communication as a tool for healing.",
    ],
  },
  {
    period: "Present",
    title: "Growing Speakub and exploring",
    bullets: [
      "Expanding Speakub and exploring opportunities for professional and personal growth.",
    ],
  },
];

const About = () => {
  return (
    <section className="py-40" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto px-6">
        <h2 id="about-heading" className="text-4xl font-bold text-center mb-4">About Sahej Hira</h2>
        <p className="muted text-center mb-8">A short, recent-first timeline of my life: how I learned, struggled, and built the work I do today as a full-stack developer, poet, and founder.</p>

        <div className="text-center mb-8">
          <p className="muted mb-3">Quick links — explore my creative work and startup</p>
          <div className="inline-flex gap-3 flex-wrap justify-center">
            <a
              href="https://medium.com/@sahej.k.hira"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md accent-btn font-semibold text-sm"
              aria-label="Read Sahej Hira's poetry blogs on Medium"
            >
              Poetry blogs
            </a>

            <a
              href="https://speakub.qzz.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md accent-btn font-semibold text-sm"
              aria-label="Visit Speakub - Sahej Hira's communication platform startup"
            >
              Startup
            </a>

            <a
              href="https://www.instagram.com/by.sahej/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-md accent-btn font-semibold text-sm"
              aria-label="Watch Sahej Hira's poetry vlogs on Instagram"
            >
              Poetry vlogs
            </a>
          </div>
        </div>

        <div className="relative before:absolute before:left-4 before:top-8 before:bottom-8 before:w-[2px]" style={{'--tw-before-bg': 'linear-gradient(180deg, rgba(255,255,255,0.03), rgba(255,255,255,0.01))'}}>
          <ul className="space-y-8">
            {/* Render reversed so the bottom entry in the data appears first in the UI */}
            {timeline
              .slice()
              .reverse()
              .map((item) => (
                <li key={item.title + item.period} className="relative pl-12">
                  <div className="absolute left-2 top-2 w-4 h-4 rounded-full" style={{background: 'var(--bg-2)', border: '1px solid rgba(255,255,255,0.04)'}}></div>
                  <div className="glass p-6 rounded-xl shadow-md">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{item.title}</h3>
                        <div className="text-sm muted">{item.period}</div>
                      </div>
                    </div>

                    <ul className="mt-4 list-disc ml-5 text-sm muted">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="mb-1">{b}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;


// import React from "react";
// import { FaHandPointRight } from "react-icons/fa";

// const About = () => {
//   return (
//     <div
//       id="about"
//       className="w-full md:h-full bg-gradient-to-b from-sky-300 via-black to-black text-white"
//     >
//       <div className="max-w-screen-lg p-4 mx-auto flex flex-col jusitfy-center w-full ">
//         <div className="pt-8">
//           <p className="text-4xl justify-center items-center font-bold inline border-b-4 border-pink-200">
//             About
//           </p>
//         </div>

//         <p className="text-xl mt-20">
//           Hi! I am Sahej, a final year student pursuing Bachlors in technology
//           with my major in Computer Science from Eternal University.
//         </p>
//         <br/><br/>
//         <p>Here are some pointers, incase you wish to know more About me:</p>
//         <br />
//         <ul className="text-ml mb-4">
//           <li className="flex">
//             <span className="mr-2">
//               <FaHandPointRight />
//             </span>
//             Born and brought up in Delhi, I come from a joint family that has
//             enriched me with an adventurous and competitive spirit since
//             childhood.{" "}
//           </li>
//           <li className="flex">
//             <span className="mr-2">
//               <FaHandPointRight />
//             </span>
//             I don't categorise myself into "introvert" and "extrovert" labels, I
//             am someone who adapts to the environment if it goes in accordance
//             with my code of conduct.{" "}
//           </li>
//           <li className="flex">
//             <span className="mr-2">
//               <FaHandPointRight />
//             </span>
//             I'm passionate about solving problems and harnessing my
//             skills working on hands-on projects.
//           </li>
//           <li className="flex">
//             <span className="mr-2">
//               <FaHandPointRight />
//             </span>
//             Having interned in various roles such as ML, cybersecurity and SDE, I like challenging my limits.
//           </li>
//           <li className="flex">
//             <span className="mr-2">
//               <FaHandPointRight />
//             </span>
//             With over 222+ problems score on leetcode, I harness my problem
//             solving skills to think of innovative solutions to solving problems
//             and approaching it in an innovative manner(may include but not
//             limited to software).{" "}
//           </li>

          
//         </ul>

       
//       </div>
//     </div>
//   );
// };

// export default About;
