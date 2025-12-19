import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const projects = [
    {
      title: "Dteams",
      description: "A complete Agent Foundry platform that empowers users to create, train, and deploy 'Digital Employees' with distinct personalities, cloned voices, and autonomous capabilities.",
      features: [
        "Browser-based Audio Dataset Creator for custom voice training",
        "Neural Voice Cloning (XTTS v2) with <500ms latency streaming",
        "Autonomous Action Engine ('Zaps') for executing real-world tasks",
        "Full-stack architecture with Next.js, FastAPI, and AWS SageMaker"
      ],
      skills: ["Next.js", "FastAPI", "AWS SageMaker", "ChromaDB", "WebSockets"],
      video: "/twin.mp4",
      liveLink: "#",
      codeLink: "https://github.com/ZenMasterrr/Dteams-X-Ai",
      caseStudyLink: "/Dteams"
    },
    {
      title: "Marketing Lab",
      description: "A professional-grade simulation platform integrating real-time Open Source Intelligence (OSINT) with probabilistic ROI modeling for advanced marketing strategy testing.",
      features: [
        "AI Campaign Simulation using Monte Carlo & probabilistic modeling",
        "Automated OSINT engine for real-time competitor scouting",
        "Interactive Data Visualization with cyberpunk aesthetics",
        "Persistent command center for multi-campaign management"
      ],
      skills: ["React", "FastAPI", "Docker", "Python", "OSINT"],
      video: "/marketing.mp4",
      liveLink: "#",
      codeLink: "https://github.com/ZenMasterrr/Marketing-Lab",
      caseStudyLink: "/marketing-lab",
      buttonColor: "from-blue-500 to-purple-600"
    },
    {
      title: "Trek",
      description: "An immersive web-based 3D experience that transports users to global destinations, featuring real-time avatar control and accessible design.",
      features: [
        "Detailed 3D environments with first-person navigation",
        "Real-time webcam-based motion capture for VRM avatars",
        "Accessible design including text-to-speech and colorblind modes",
        "Interactive cultural insights and educational content"
      ],
      skills: ["React Three Fiber", "Three.js", "MediaPipe", "VRM", "Accessibility"],
      video: "/trek.mp4",
      liveLink: "#",
      codeLink: "https://github.com/ZenMasterrr/Virtual-Frontier",
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
                {/* Video Preview */}
                <div className="relative overflow-hidden h-48 bg-amber-50/10">
                  <video
                    src={project.video}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
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
