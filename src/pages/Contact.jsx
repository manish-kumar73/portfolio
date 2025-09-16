import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-white dark:bg-gray-900 dark:text-white py-16 px-3 md:px-6 lg:px-20 w-full"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 bg-white dark:bg-gray-900 dark:text-white shadow-lg rounded-lg p-4 md:p-8">
        {/* 👤 Left Side – About You */}
        <div className="flex flex-col items-center justify-center text-center bg-white dark:bg-gray-900 dark:text-white rounded-md p-6 shadow-sm">
          <img
            src="https://image2url.com/images/1757350834475-4d4c2f01-6d79-429c-aa1b-381ea69def1d.jpg"
            alt="Manish Kumar"
            className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-[#37f3ba]"
          />
          <h2 className="text-xl font-bold text-[#37f3ba] mb-1">
            Manish Kumar
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
            Full Stack Developer focused on building scalable web apps and clean UI experiences.
          </p>

          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>
              📧 <strong>Email:</strong>{" "}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=manishkumarr2060@gmail.com&su=Hello&body=Hi Manish, I’d like to connect with you."
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#37f3ba] hover:underline"
              >
                manishkumarr2060@gmail.com
              </a>
            </p>
            <p>
              📱 <strong>WhatsApp:</strong>{" "}
              <a
                href="https://wa.me/7379628206"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#37f3ba] hover:underline"
              >
                +91 7379628206
              </a>
            </p>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-800 dark:text-gray-300 mb-2">
              Tech Stack
            </h3>
            <div className="flex flex-wrap justify-center gap-2 text-xs text-white">
              <span className="bg-[#37f3ba] px-2 py-1 rounded">MERN</span>
              <span className="bg-[#37f3ba] px-2 py-1 rounded">Tailwind</span>
              <span className="bg-[#37f3ba] px-2 py-1 rounded">Firebase</span>
              <span className="bg-[#37f3ba] px-2 py-1 rounded">Figma</span>
            </div>
          </div>
        </div>

        {/* 📬 Right Side – Contact Form */}
        <div>
          <h2 className="text-3xl font-bold text-[#37f3ba] mb-8 text-center md:text-left">
            Contact Me
          </h2>
          <form
            action="https://formsubmit.co/manishkumarr2060@gmail.com"
            target="_blank"
            method="POST"
            className="space-y-6"
          >
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#37f3ba] focus:border-[#37f3ba]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="you@example.com"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#37f3ba] focus:border-[#37f3ba]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#37f3ba] focus:border-[#37f3ba]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:ring-[#37f3ba] focus:border-[#37f3ba]"
              ></textarea>
            </div>

            <div className="text-center md:text-left">
              <button
                type="submit"
                className="px-6 py-2 bg-[#37f3ba] text-white font-semibold rounded-md hover:bg-[#2fd8a1] transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
