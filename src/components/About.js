import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'PyTorch',
    'Computer Vision', 'NLP', 'Data Science', 'MLOps', 'Cloud Computing'
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-900 relative overflow-hidden">
      {/* Decorative elements matching Hero */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="glass-card p-8 md:p-10 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-green-900/30 w-full"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
                About Me
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full"></div>
            </div>
            
            <div className="space-y-6 text-gray-200 text-lg leading-relaxed">
              <p>
                I'm a <span className="text-green-300 font-medium">Machine Learning Engineer</span> specializing in building intelligent systems. I create practical AI solutions that solve real-world problems through innovative thinking and clean, efficient code.
              </p>
              <p>
                With expertise in deep learning, computer vision, and NLP, I bridge the gap between research and production. I'm passionate about responsible AI and continuously explore new ways to make technology more intuitive and impactful.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <h3 className="text-2xl font-semibold text-green-300 mb-6">Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-4 py-2 bg-gray-700/50 text-gray-200 rounded-full text-sm font-medium border border-gray-600/50 hover:border-green-400/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default About;
