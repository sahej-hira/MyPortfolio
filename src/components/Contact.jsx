import React, { useState } from "react";

const Contact = () => {
  return (
    <section className="py-40">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">Get in touch</h2>
        <p className="mt-3 muted text-center">I’m available for freelance work and collaborations. Send a brief message and I’ll reply within 48 hours.</p>

        <div className="mt-8 glass rounded-lg p-6">
          <form className="grid gap-4">
            <input className="p-3 bg-transparent border border-white/10 rounded-md" placeholder="Your name" />
            <input className="p-3 bg-transparent border border-white/10 rounded-md" placeholder="Email" />
            <textarea className="p-3 bg-transparent border border-white/10 rounded-md" rows={6} placeholder="How can I help?" />
            <div className="flex justify-end">
              <button className="px-6 py-2 accent-btn rounded-md font-semibold">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

// import React from "react";

// const Contact = () => {
//   return (
//     <div
//       id="contact"
//       className="w-full h-screen bg-gradient-to-b from-black to-pink-300 text-white md:h-screen"
//     >
//       <div className="max-w-screem-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//         <div className="pb-8">
//           <p className=" text-4xl font-bold inline border-b-4 border-pink-300">
//             Contact me
//           </p>
//           <p className="py-6">Get in touch with me by filling the form below</p>
//         </div>

//         <div className="flex justify-center items-center rounded bg-black bg-opacity-50 p-[0.8rem] pt-[1rem]">
//           <form action="" className="flex flex-col w-full md:w-1/2">
//             <input
//               type="text"
//               name="name"
//               placeholder="Enter your name here"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />
//             <input
//               type="text"
//               name="email"
//               placeholder="Enter your email here"
//               className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             />
//             <textarea
//               name="message"
//               row="1100"
//               placeholder="Leave your message here"
//               className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
//             ></textarea>
//             <button className="text-white bg-gradient-to-b from-pink-500 via-gray-950 to-pink-300 px-5 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
//               Submit
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
