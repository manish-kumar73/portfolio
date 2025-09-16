import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs, FaGithub,
} from 'react-icons/fa';
import {
  SiC, SiCplusplus, SiExpress, SiMongodb, SiMysql, SiPostman, SiVite, SiVscodium, SiPrisma,
} from 'react-icons/si';

const skills = [
  // Frontend
  { name: 'HTML', icon: <FaHtml5 className="text-orange-500 text-xl md:text-4xl" /> },
  { name: 'CSS', icon: <FaCss3Alt className="text-blue-500 text-xl md:text-4xl" /> },
  { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-xl md:text-4xl" /> },
  { name: 'React', icon: <FaReact className="text-cyan-400 text-xl md:text-4xl" /> },

  // Backend
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-xl md:text-4xl" /> },
  { name: 'Express.js', icon: <SiExpress className="text-gray-700 dark:text-gray-300 text-xl md:text-4xl" /> },
  { name: 'C', icon: <SiC className="text-blue-400 text-xl md:text-4xl" /> },
  { name: 'C++', icon: <SiCplusplus className="text-purple-500 text-xl md:text-4xl" /> },

  // Databases
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-xl md:text-4xl" /> },
  { name: 'MySQL', icon: <SiMysql className="text-blue-600 text-xl md:text-4xl" /> },
  { name: 'Prisma', icon: <SiPrisma className="text-indigo-500 text-xl md:text-4xl" /> },

  // Tools
  { name: 'GitHub', icon: <FaGithub className="text-black dark:text-white text-xl md:text-4xl" /> },
  { name: 'Postman', icon: <SiPostman className="text-orange-400 text-xl md:text-4xl" /> },
  { name: 'Vite', icon: <SiVite className="text-purple-400 text-xl md:text-4xl" /> },

  // IDEs
  { name: 'VS Code', icon: <SiVscodium className="text-blue-400 text-xl md:text-4xl" /> },
];

const Skills = () => {
  return (
    <section id='skills' className="bg-white dark:bg-gray-900 py-16 px-6 md:px-20 text-gray-900 dark:text-gray-100">
      <h2 className="text-4xl font-bold text-[#37f3ba] text-center mb-12">My Skills</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-7 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-[80px] h-[80px] md:w-[140px] md:h-[140px] bg-gray-100 dark:bg-[#2b2b2b] rounded-xl flex flex-col items-center justify-center text-4xl shadow-md transition-transform duration-300 hover:scale-[1.1] hover:rotate-[3deg] hover:shadow-[0_0_25px_#37f3ba] hover:bg-white dark:hover:bg-[#1f1f1f]"
            style={{
              perspective: '1000px',
              transformStyle: 'preserve-3d',
            }}
          >
            {skill.icon}
            <p className="mt-2 text-sm md:text-xl font-medium text-center text-gray-700 dark:text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
