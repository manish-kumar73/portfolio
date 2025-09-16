import React from 'react';

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-white text-gray-800 py-16 px-6 md:px-20 dark:bg-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="relative">
          <img
            src="https://img.freepik.com/premium-photo/anime-engineer-working-computer-office-engineering-architecture-concept-menboywindow_968517-85483.jpg"
            alt="Developer at work"
            className="rounded-xl shadow-xl"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-[#37f3ba] mb-4 dark:text-[#5ef7c9]">
            About Me
          </h2>
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            I'm a passionate{' '}
            <span className="text-[#37f3ba] font-semibold dark:text-[#5ef7c9]">
              Full Stack Developer
            </span>{' '}
            with over 5 years of experience in creating digital experiences
            that make a difference. My journey started with curiosity and
            evolved into building innovative solutions.
          </p>
          <p className="text-gray-600 mb-6 dark:text-gray-400">
            I specialize in modern JavaScript frameworks, responsive design,
            and user experience optimization. When I'm not coding, I'm
            exploring new tech, contributing to open-source, or sharing
            knowledge with the dev community.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 text-center">
            <div>
              <p className="text-2xl font-bold text-[#37f3ba] dark:text-[#5ef7c9]">
                0+
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Years Experience
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#37f3ba] dark:text-[#5ef7c9]">
                10+
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Projects Completed
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-[#37f3ba] dark:text-[#5ef7c9]">
                1+
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Happy Clients
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-4">
            {[
              {
                title: 'Clean Code',
                description:
                  'Maintainable, scalable, and efficient code with best practices.',
              },
              {
                title: 'Creative Design',
                description: 'Visually appealing and user-friendly interfaces.',
              },
              {
                title: 'Fast Performance',
                description: 'Optimized for speed across all devices.',
              },
              {
                title: 'Team Player',
                description: 'Effective collaboration with cross-functional teams.',
              },
            ].map((skill, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-[#1e8f6f] text-xl">✔</span>
                <p>
                  <strong className="text-[#37f3ba] dark:text-[#5ef7c9]">
                    {skill.title}:
                  </strong>{' '}
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
