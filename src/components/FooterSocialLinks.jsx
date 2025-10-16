import React from 'react'
import { FaInstagram, FaXTwitter, FaLinkedin } from 'react-icons/fa6'

const FooterSocialLinks = () => {
  const links = [
    {
      id: 1,
      label: 'LinkedIn',
      icon: <FaLinkedin size={20} />,
      href: 'https://www.linkedin.com/in/sahej-hira-47834021b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      color: 'hover:text-blue-500',
    },
    {
      id: 2,
      label: 'Instagram',
      icon: <FaInstagram size={20} />,
      href: 'https://www.instagram.com/by.sahej?igsh=dG9kdnJibGN1NGZo&utm_source=qr',
      color: 'hover:text-pink-500',
    },
    {
      id: 3,
      label: 'X',
      icon: <FaXTwitter size={20} />,
      href: 'https://x.com/sahejhira?s=21',
      color: 'hover:text-gray-400',
    },
    {
      id: 4,
      label: 'Speakub',
      icon: <img src="/speakub_logo.png" alt="Speakub" className="w-5 h-5 object-contain" />,
      href: 'https://speakub.qzz.io/',
      color: 'hover:text-white',
    },
  ]

  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-30">
      <div className="flex items-center gap-6 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 border border-white/20 shadow-lg">
        {links.map(({ id, label, icon, href, color }) => (
          <div key={id} className="relative group">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className={`flex items-center justify-center w-10 h-10 text-white/80 transition-all duration-300 ${color} hover:scale-110`}
            >
              {icon}
            </a>
            {/* Tooltip */}
            <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-black/80 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none">
              {label}
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-black/80"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default FooterSocialLinks