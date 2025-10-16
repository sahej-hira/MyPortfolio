import React from "react";

const timeline = [
	{
		company: "SpeaKub — Communication Coaching Platform",
		title: "Founder",
		date: "(Present)",
		tech: "React.js, Tailwind CSS, Node.js, Express.js, MongoDB",
		bullets: [
			"Developed a full-stack platform with authentication and scalable architecture",
			"Designed UI with Tailwind and built REST APIs with Express and MongoDB",
		],
	},
	{
		company: "Techshilla",
		title: "Machine Learning Intern",
		date: "Mar 2025 – Jun 2025",
		tech: "Python, Google Colab, OpenCV, TensorFlow/Keras",
		bullets: [
			"Built a brain tumor classification model using image preprocessing and CNNs",
			"Trained and evaluated models; visualized results with Matplotlib/Seaborn",
		],
	},
	{
		company: "Bluestock Fintech",
		title: "SDE Intern (Team Lead)",
		date: "Jan 2025 – Feb 2025",
		tech: "MERN stack, PostgreSQL, Jest, Postman",
		bullets: [
			"Led development of a scalable IPO web app and REST APIs",
			"Added unit/API tests and input validation for production reliability",
		],
	},
	{
		company: "Extion Infotech",
		title: "Cybersecurity Intern",
		date: "Jan 2025 – Mar 2025",
		tech: "OpenVAS, security logging",
		bullets: [
			"Performed vulnerability analysis and produced mitigation reports",
			"Investigated security logs to detect threats",
		],
	},
	{
		company: "Codsoft",
		title: "Machine Learning Intern",
		date: "Dec 2023 – Jan 2025",
		tech: "Python, Scikit-learn",
		bullets: [
			"Built ML models for fraud detection, spam filtering, and classification",
			"Handled end-to-end workflows from preprocessing to evaluation",
		],
	},
	{
		company: "Panesia Infotec",
		title: "AI/ML Research",
		date: "Jul 2024 – Aug 2024",
		tech: "Deep learning (CNN/RNN), optimization",
		bullets: [
			"Implemented and optimized deep learning models for real-world tasks",
		],
	},
];

const Experience = () => {
	return (
		<section className="py-40">
			<div className="max-w-4xl mx-auto px-6">
				<h2 className="text-3xl font-bold text-center mb-6">Work Experience </h2>
				<p className="muted text-center mb-8">Following are the roles and companies I was situated with.</p>

				<div className="relative before:absolute before:left-4 before:top-8 before:bottom-8 before:w-[2px]">
					<ul className="space-y-8">
						{timeline.map((item, idx) => (
							<li key={item.company} className="relative pl-12">
								<div className="absolute left-2 top-2 w-4 h-4 rounded-full" style={{background: 'var(--bg-2)', border: '1px solid rgba(255,255,255,0.04)'}}></div>
								<div className="glass p-6 rounded-xl shadow-md">
									<div className="flex items-start justify-between">
										<div>
											<h3 className="text-lg font-semibold">{item.title}</h3>
											<div className="text-sm muted">{item.company} • <span className="font-mono text-xs muted">{item.date}</span></div>
										</div>
										<div className="text-sm text-right muted">{item.tech}</div>
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

export default Experience;

// import React from "react";
// import html from "../assets/html.png";
// import css from "../assets/css.png";
// import tailwind from "../assets/tailwind.png";
// import javascript from "../assets/javascript.png";
// import reactImg from "../assets/react.png";
// import figma from "../assets/figmaLogo.png";
// import github from "../assets/github.png";
// import jupyter from "../assets/jupyter.png";
// import keras from "../assets/kerasLogo.png";
// import node from "../assets/node.png";
// import python from "../assets/pythonLogo.png";
// import tensorflow from "../assets/tensorFlowLogo.png";
// import pytorch from "../assets/pytorchLogo.png";

// const Experience = () => {
//   const skills = [
//     {
//       id: 1,
//       src: figma,
//       title: "Figma",
//       style: "shadow-green-500",
//     },
//     {
//       id: 2,
//       src: html,
//       title: "HTML",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 3,
//       src: css,
//       title: "CSS",
//       style: "shadow-blue-500",
//     },
//     {
//       id: 4,
//       src: tailwind,
//       title: "Tailwind CSS",
//       style: "shadow-sky-400",
//     },
//     {
//       id: 5,
//       src: javascript,
//       title: "Javascript",
//       style: "shadow-yellow-500",
//     },
//     {
//       id: 6,
//       src: reactImg,
//       title: "React",
//       style: "shadow-blue-600",
//     },
//     {
//       id: 7,
//       src: node,
//       title: "Node",
//       style: "shadow-green-500",
//     },
//     {
//       id: 8,
//       src: github,
//       title: "Github",
//       style: "shadow-grey-400",
//     },
//     {
//       id: 9,
//       src: python,
//       title: "Python",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 10,
//       src: jupyter,
//       title: "Jupyter notebooks",
//       style: "shadow-orange-500",
//     },
//     {
//       id: 11,
//       src: tensorflow,
//       title: "Tensorflow",
//       style: "shadow-yellow-500",
//     },
//     {
//       id: 12,
//       src: pytorch,
//       title: "Pytorch",
//       style: "shadow-orange-700",
//     },

//     {
//       id: 13,
//       src: keras,

