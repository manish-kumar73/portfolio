import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  useEffect(() => {
    const glow = document.getElementById('cursor-glow');
    const moveGlow = (e) => {
      glow.style.left = `${e.clientX - 40}px`;
      glow.style.top = `${e.clientY - 40}px`;
    };
    window.addEventListener('mousemove', moveGlow);
    return () => window.removeEventListener('mousemove', moveGlow);
  }, []);

  return (
    <section
      id="home"
      className="relative bg-white dark:bg-[#0f172a] pt-16 min-h-[calc(100vh-100px)] md:min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-20 overflow-hidden text-gray-800 dark:text-gray-200"
    >
      {/* ✨ Floating Text */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute top-17 left-4 md:text-3xl text-sm sm:text-base font-semibold text-[#37f3ba] animate-pulse"
      >
        Full Stack Developer 🚀
      </motion.div>

      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute bottom-4 right-4 text-4xl text-[#22c55e] animate-bounce"
      >
        Clean Code. Creative Design.
      </motion.div>

      {/* 🧑‍💻 Hero Section */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center z-10 max-w-2xl w-full"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#37f3ba] mb-4 leading-tight">
          Hi, I'm <span className="text-gray-900 dark:text-gray-100">Manish Kumar</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-700 dark:text-gray-300 mb-6 px-2">
          I design and develop modern web applications using React, Node.js, MongoDB, and more. Let's build something amazing together.
        </p>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=manishkumarr2060@gmail.com&su=Hello&body=Hi Manish, I’d like to connect with you."
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 bg-[#37f3ba] text-[#0f172a] rounded-full hover:bg-[#2ce4c1] transition font-bold"
        >
          🚀 Hire Me
        </a>
      </motion.div>

      {/* 🌀 Cursor Glow Effect */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          id="cursor-glow"
          className="w-20 h-20 bg-[#37f3ba] opacity-30 rounded-full fixed blur-2xl transition-all duration-300"
        ></div>
      </div>
    </section>
  );
};

export default Home;
