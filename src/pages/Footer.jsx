import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="footer" className="bg-white dark:bg-[#0f172a] text-gray-800 dark:text-gray-200 py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Name & Tagline */}
        <div className="text-center md:text-left px-8">
          <h2 className="text-2xl font-bold text-[#37f3ba]">Manish Kumar</h2>
          <p className="mt-2 italic text-gray-600 dark:text-gray-400">
            “Crafting code with purpose and passion.”
          </p>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            I’m a fullstack developer with a knack for clean UI, responsive design, and pixel-perfect execution. Whether it’s a sleek portfolio, a dynamic dashboard, or a full-scale web app — I build experiences that users love and businesses trust.
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Currently open for freelance projects — if you're looking for someone who delivers on time, communicates clearly, and codes like a beast, let's connect!
          </p>
        </div>

        {/* Navigation Links */}
        <div className="text-center md:text-left ml-0 md:ml-35">
          <h3 className="text-lg font-semibold text-[#37f3ba] mb-4">Quick Links</h3>
          <div className="grid grid-cols-3 gap-2 text-sm font-medium">
            <a href="#home" className="hover:text-[#37f3ba] transition">Home</a>
            <a href="#services" className="hover:text-[#37f3ba] transition">Services</a>
            <a href="#projects" className="hover:text-[#37f3ba] transition">Projects</a>
            <a href="#about" className="hover:text-[#37f3ba] transition">About</a>
            <a href="#skills" className="hover:text-[#37f3ba] transition">Skills</a>
            <a href="#contact" className="hover:text-[#37f3ba] transition">Contact</a>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end space-x-6">
          <a href="https://github.com/manish-kumar73" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-xl text-[#37f3ba] hover:text-emerald-800 transition" />
          </a>
          <a href="https://www.linkedin.com/in/manish-kumar-339168358" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-xl text-[#37f3ba] hover:text-emerald-800 transition" />
          </a>
          <a href="https://wa.me/917379628206" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-xl text-[#37f3ba] hover:text-emerald-800 transition" />
          </a>
          <a href="https://www.instagram.com/manish_raider125/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl text-[#37f3ba] hover:text-emerald-800 transition" />
          </a>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-sm text-gray-500 dark:text-gray-400">
        Made with ❤️ in India | Built using React & Tailwind CSS
      </div>
      <p className="mt-4 text-sm text-center text-[#37f3ba]">
        © {new Date().getFullYear()} Manish Kumar. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
