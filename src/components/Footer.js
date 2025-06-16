import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const contactItems = [
    {
      name: 'GitHub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ),
      link: 'https://github.com/ZenMasterrr',
      text: 'github.com/ZenMasterrr'
    },
    {
      name: 'Email',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z"/>
        </svg>
      ),
      link: 'mailto:harshitpandey5506@gmail.com',
      text: 'harshitpandey5506@gmail.com'
    },
    {
      name: 'Phone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M20 22.621l-3.521-3.52c-1.224.804-2.705 1.365-4.296 1.682-2.025.398-4.195-.167-5.923-1.895-2.93-2.93-3.285-7.672-.589-10.94 1.009-1.209 2.295-2.094 3.729-2.651l-1.917-1.917 1.414-1.414 17.678 17.678-1.415 1.415-2.172-2.172v2.35zm-2.605-4.621c.8-.858 1.43-1.877 1.847-3.001.129-.348.234-.706.315-1.07l-9.845-9.845c-1.521.527-2.903 1.349-4.062 2.508-2.353 2.354-2.354 6.049-.002 8.405 2.354 2.354 6.05 2.352 8.405 0h-.001zm-10.395-8.34c-.208.32-.372.665-.497 1.03-.253.74-.397 1.534-.397 2.34 0 .413.336.75.75.75s.75-.337.75-.75c0-.625.111-1.235.326-1.805.064-.17.14-.336.225-.497l-.957-.958v.001z"/>
        </svg>
      ),
      link: 'tel:+918303360535',
      text: '+91 83033 60535'
    }
  ];

  return (
    <footer id="contact" className="py-16 md:py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Interested in discussing potential projects or opportunities? I'm available for professional inquiries and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.link}
              target={item.name === 'Email' || item.name === 'Phone' ? '_self' : '_blank'}
              rel="noopener noreferrer"
              className="group bg-amber-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col items-center text-center h-full">
                <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center text-green-700 mb-4 group-hover:bg-amber-200 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.name}</h3>
                <p className="text-gray-600 text-sm flex-1 flex items-center">
                  {item.text}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <motion.p 
            className="text-gray-500 text-sm"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            &copy; {new Date().getFullYear()} Harshit Pandey. All rights reserved.
          </motion.p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
