import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Projects", path: "/portfolio" },
    { id: 4, name: "Experience",path: "/experience" },
    { id: 5, name: "Contact",path:  "/contact" },
  ];

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 w-11/12 max-w-5xl z-40 rounded-xl glass border border-white/6">
      <nav className="flex items-center justify-between px-4 py-3 text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full accent-gradient flex items-center justify-center text-white font-bold">SH</div>
          <Link to="/" className="text-2xl font-semibold tracking-tight">Sahej Hira</Link>
        </div>

        <ul className="hidden md:flex items-center gap-6">
          {links.map(({ id, name, path }) => (
            <li key={id} className="text-sm hover:text-[var(--accent)]">
              <Link to={path}>{name}</Link>
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button aria-label="Toggle menu" onClick={() => setNav(!nav)} className="p-2 rounded-md hover:bg-white/5">
            {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </nav>

        {nav && (
        <div className="md:hidden p-6 rounded-b-xl glass">
          <ul className="flex flex-col gap-4">
            {links.map(({ id, name, path }) => (
              <li key={id} onClick={() => setNav(false)}>
                <Link to={path} className="block text-lg">{name}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default NavBar;
