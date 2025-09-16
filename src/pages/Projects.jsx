import React from 'react';
import { link } from 'framer-motion/client';

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured MERN stack e-commerce site with Stripe integration, cart system, and admin panel.',
    image: 'https://www.solutions4ecommerce.com/wp-content/uploads/2018/01/ECommerce_Illustration_.png',
    link: '#',
    isCompleted: false,
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React and Tailwind showcasing skills, projects, and contact form.',
    image: 'https://image2url.com/images/1757351516002-6d487cc9-30b2-49ac-b955-515b5c3fb703.png',
    link: 'https://deluxe-clafoutis-1e575c.netlify.app/',
    isCompleted: true,
  },
  {
    title: 'Admin Dashboard',
    description: 'Real-time analytics dashboard with charts, user management, and API data using React and Chart.js.',
    image: 'https://colorlib.com/wp/wp-content/uploads/sites/2/nalika-simple-free-bootstrap-admin-dashboard.jpg',
    link: '#',
    isCompleted: false,
  },
  {
    title: 'Blog CMS',
    description: 'Content management system for blogs with rich text editor, user roles, and dynamic routing.',
    image: 'https://sitecloudy.com/wp-content/uploads/2021/07/MaxPixel.net-Cms-Software-Cms-Software-Laptop-6019023-1.png',
    link: '#',
    isCompleted: false,
  },
  {
    title: 'Fitness Tracker App',
    description: 'Cross-platform mobile app built with React Native to track workouts, nutrition, and progress.',
    image: 'https://cdn.dribbble.com/users/2580756/screenshots/9190139/media/8a14873264f756755f75e6109be5ee4e.jpg',
    link : '#',
    isCompleted: false,
  },
];

const Projects = () => {
  const handleClick = () => {
    alert('I am currently working on this project.');
  };
  return (
    <section
      id="projects"
      className="bg-white dark:bg-gray-900 py-20 px-4 sm:px-6 md:px-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#37f3ba] dark:text-[#37f3ba] mb-16">
          My Projects
        </h2>-
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover"
              />
              <div className="p-10 flex flex-col justify-between h-[260px]">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {project.description}
                  </p>
                </div>
                {/* <a
                  href={project.link}
                  className="mt-4 inline-block text-center px-5 py-2 bg-[#37f3ba] text-white rounded-full hover:bg-[#2fd8a1] transition"
                >
                  View Project
                </a> */}
                {project.isCompleted ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-center px-5 py-2 bg-[#37f3ba] text-white rounded-full hover:bg-[#2fd8a1] transition"
                  >
                    View Project
                  </a>
                ) : (
                  <button
                    onClick={handleClick}
                    className="mt-4 inline-block text-center px-5 py-2 bg-[#37f3ba] text-white rounded-full hover:bg-[#2fd8a1] transition"
                  >
                    View Project
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
