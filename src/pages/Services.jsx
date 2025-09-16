import React from 'react';
import { FaCode, FaPaintBrush, FaPlug, FaChartBar, FaMobileAlt, FaCloud } from 'react-icons/fa';

const services = [
  {
    title: 'Web Development',
    description: 'Building scalable and responsive websites using MERN stack.',
    icon: <FaCode className="text-6xl text-[#37f3ba] mb-6" />,
    project: {
      name: 'E-Commerce Platform',
      link: '/projects/ecommerce',
    },
  },
  {
    title: 'UI/UX Design',
    description: 'Designing intuitive and engaging user interfaces.',
    icon: <FaPaintBrush className="text-6xl text-[#37f3ba] mb-6" />,
    project: {
      name: 'Portfolio Redesign',
      link: '/projects/portfolio',
    },
  },
  {
    title: 'API Integration',
    description: 'Connecting apps with third-party services and custom APIs.',
    icon: <FaPlug className="text-6xl text-[#37f3ba] mb-6" />,
    project: {
      name: 'Payment Gateway Setup',
      link: '/projects/payment',
    },
  },
  {
    title: 'Dashboard Solutions',
    description: 'Creating admin dashboards with real-time data visualization.',
    icon: <FaChartBar className="text-6xl text-[#37f3ba] mb-6" />,
    project: {
      name: 'Analytics Dashboard',
      link: 'https://doctor-app-1-mn2x.onrender.com',
    },
  },
  {
    title: 'Cloud Deployment',
    description: 'Deploying scalable apps on cloud platforms like Render & Vercel.',
    icon: <FaCloud className="text-6xl text-[#37f3ba] mb-6" />,
    project: {
      name: 'DevOps Setup',
      link: '/projects/devops',
    },
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white dark:bg-[#0f172a] py-16 px-4 sm:px-6 md:px-20 text-gray-800 dark:text-gray-200 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-[#37f3ba] mb-12">
          Our Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 dark:bg-[#1e293b] hover:shadow-gray-600 dark:hover:shadow-gray-600 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center text-center transition-shadow duration-300"
              style={{ minHeight: '300px' }}
            >
              {service.icon}
              <h3 className="text-2xl font-semibold text-[#37f3ba] mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
