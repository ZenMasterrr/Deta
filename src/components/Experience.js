import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const projects = [
    {
      title: "Brainz",
      role: "Frontend Developer",
      period: "2023 - Present",
      description: "An AI-powered voice interaction platform for training and interacting with custom AI models through natural conversation.",
      features: [
        "Built with React, TypeScript, and Tailwind CSS",
        "Voice interaction and natural language processing",
        "Real-time model training visualization",
        "Responsive design for all devices"
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "WebSockets", "AI/ML"],
      gif: "/gifs/brainz-demo.gif",
      liveLink: "#",
      codeLink: "#",
      caseStudyLink: "/brainz"
    },
    {
      title: "Marketing Lab",
      role: "Full Stack Developer",
      period: "2024",
      description: "A modern, interactive portfolio website with 3D elements and smooth animations.",
      features: [
        "Built with Next.js and Framer Motion",
        "3D model integration with Three.js",
        "Dark/light mode support",
        "Optimized for performance and SEO"
      ],
      skills: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS"],
      gif: "/gifs/portfolio-demo.gif", // Replace with actual GIF path
      liveLink: "#",
      codeLink: "#",
      caseStudyLink: "/marketing-lab",
      buttonColor: "from-green-500 to-green-600"
    },
    {
      title: "Trek",
      role: "Full Stack Developer",
      period: "2023",
      description: "A collaborative task management application with real-time updates and team features.",
      features: [
        "Real-time collaboration with WebSockets",
        "User authentication and authorization",
        "Drag-and-drop interface",
        "File attachments and comments"
      ],
      skills: ["Node.js", "Express", "MongoDB", "Socket.IO", "React"],
      gif: "/gifs/taskflow-demo.gif", // Replace with actual GIF path
      liveLink: "#",
      codeLink: "#",
      caseStudyLink: "/trek",
      buttonColor: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-green-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 relative z-10">
        <motion.div 
          className="text-left mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl text-lg">
            Here are some of my recent projects that showcase my skills and expertise.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col border border-gray-700/50 hover:border-green-500/30 transition-all duration-300">
                {/* GIF Preview */}
                <div className="relative overflow-hidden h-48 bg-gray-800">
                  <img 
                    src={project.gif} 
                    alt={`${project.title} demo`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-white">{project.title}</h3>
                      <p className="text-green-300 text-sm">{project.role}</p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-green-300 text-sm">{project.role} • {project.period}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          <span className="text-gray-300 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.skills.map((skill, i) => (
                        <span 
                          key={i} 
                          className="px-2.5 py-1 text-xs font-medium bg-gray-800/50 text-green-300 rounded-full border border-gray-700"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-4 pt-2 border-t border-gray-800">
                    {project.caseStudyLink ? (
                      <motion.a
                        href={project.caseStudyLink}
                        className={`flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r ${project.buttonColor || 'from-blue-500 to-blue-600'} text-white hover:opacity-90 transition-opacity`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Case Study
                      </motion.a>
                    ) : project.liveLink && project.liveLink !== "#" ? (
                      <motion.a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-green-500 to-green-600 text-white hover:opacity-90 transition-opacity"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Live Demo
                      </motion.a>
                    ) : null}
                    {project.codeLink && (
                      <motion.a
                        href={project.codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg bg-gray-800 text-green-400 border border-gray-700 hover:bg-gray-700/50 transition-colors"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Back to top link */}
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2 rotate-90 origin-right text-sm text-gray-400 hover:text-white transition-colors z-50">
        <a href="#" className="flex items-center">
          BACK TO TOP
        </a>
      </div>
    </section>
  );
};

export default Experience;
