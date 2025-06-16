import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const projects = [
    {
      title: "Brainz",
      description: "An innovative AI-powered web application that creates a digital twin mirroring your personality, communication style, and behavioral patterns through advanced natural language processing and machine learning.",
      features: [
        "Creates authentic digital twins that replicate speech, writing, and interaction patterns",
        "Advanced NLP and ML to capture unique mannerisms, tone, and decision-making",
        "Three-tier architecture for secure, scalable, and responsive performance",
        "Web-based solution accessible through any modern browser"
      ],
      skills: ["React", "TypeScript", "Tailwind CSS", "WebSockets", "AI/ML"],
      gif: "/gifs/brainz.gif",
      liveLink: "#",
      codeLink: "https://github.com/ZenMasterrr/Brainz",
      caseStudyLink: "/brainz"
    },
    {
      title: "Marketing Lab",
      description: "A cutting-edge marketing campaign simulator that combines data visualization with an aesthetic interface to help marketers plan, simulate, and analyze campaigns through an intuitive interface.",
      features: [
        "Multi-step campaign builder with dynamic forms that adapt to user inputs",
        "Real-time 3D data visualization using Three.js for engaging data representation",
        "Interactive dashboard with actionable insights and analytics",
        "Responsive design with futuristic UI for complex marketing data visualization"
      ],
      skills: ["React", "Three.js", "D3.js", "Node.js", "MongoDB", "WebSockets"],
      gif: "/gifs/market.gif",
      liveLink: "#",
      codeLink: "https://github.com/ZenMasterrr/Marketing-Lab",
      caseStudyLink: "/marketing-lab",
      buttonColor: "from-blue-500 to-purple-600"
    },
    {
      title: "Trek",
      description: "An interactive 3D trekking web application that combines modern web technologies with Unity to create an immersive virtual exploration experience.",
      features: [
        "Immersive 3D environments powered by Unity",
        "Responsive interface with smooth animations",
        "Card-based system for exploring global destinations",
        "Rich visual content and cultural insights"
      ],
      skills: ["Unity", "HTML5", "CSS3", "JavaScript", "3D Modeling"],
      gif: "/gifs/trek.gif",
      liveLink: "#",
      codeLink: "https://github.com/ZenMasterrr/3d-Game",
      caseStudyLink: "/trek",
      buttonColor: "from-amber-500 to-orange-600"
    }
  ];

  return (
    <section id="experience" className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <div className="absolute -top-32 -right-32 w-64 h-64 bg-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
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
              <div className="glass-card rounded-2xl overflow-hidden h-full flex flex-col border border-amber-100/20 bg-amber-50/5 hover:border-amber-200/40 transition-all duration-300">
                {/* GIF Preview */}
                <div className="relative overflow-hidden h-48 bg-amber-50/10">
                  <img 
                    src={project.gif} 
                    alt={`${project.title} demo`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div className="p-6 flex-grow">
                      <h3 className="text-2xl font-bold text-amber-50 mb-3 group-hover:text-green-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col text-amber-50">
                  <div className="flex-1">
                    <p className="text-amber-100 mb-4">{project.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          <span className="text-amber-100 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-4 pt-2 border-t border-gray-800">
                    {project.caseStudyLink ? (
                      <motion.a
                        href={project.caseStudyLink}
                        className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-amber-50 hover:opacity-90 transition-opacity"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        View More
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
                        className="flex-1 text-center px-4 py-2 text-sm font-medium rounded-lg bg-amber-900/30 text-amber-200 border border-amber-200/30 hover:bg-amber-900/50 transition-colors"
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
