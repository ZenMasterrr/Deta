import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Icons for technologies
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaPython, 
  FaDatabase, 
  FaGitAlt, 
  FaServer, 
  FaBrain, 
  FaRobot 
} from 'react-icons/fa';

// Import only the icons we actually use
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiGraphql, 
  SiTailwindcss, 
  SiRedux, 
  SiDocker, 
  SiGithub, 
  SiTensorflow, 
  SiPytorch, 
  SiKeras, 
  SiScikitlearn, 
  SiGooglecloud, 
  SiDjango,
  SiHeroku,
  SiNetlify
} from 'react-icons/si';

const TechStack = () => {
  const [activeTab, setActiveTab] = useState('fullstack');

  const techCategories = {
    fullstack: {
      title: 'Full-Stack Development',
      icon: <FaServer className="w-6 h-6" />,
      skills: [
        { 
          name: 'Frontend',
          items: [
            { name: 'React', icon: <FaReact className="w-6 h-6 text-[#61DAFB]" /> },
            { name: 'Next.js', icon: <SiNextdotjs className="w-6 h-6" /> },
            { name: 'JavaScript', icon: <FaJs className="w-6 h-6 text-[#F7DF1E]" /> },
            { name: 'TypeScript', icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" /> },
            { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" /> },
            { name: 'Redux', icon: <SiRedux className="w-6 h-6 text-[#764ABC]" /> }
          ]
        },
        { 
          name: 'Backend',
          items: [
            { name: 'Node.js', icon: <FaNodeJs className="w-6 h-6 text-[#68A063]" /> },
            { name: 'Express', icon: <SiExpress className="w-6 h-6" /> },
            { name: 'Django', icon: <SiDjango className="w-6 h-6 text-[#092E20]" /> },
            { name: 'MongoDB', icon: <SiMongodb className="w-6 h-6 text-[#47A248]" /> },
            { name: 'PostgreSQL', icon: <SiPostgresql className="w-6 h-6 text-[#336791]" /> },
            { name: 'GraphQL', icon: <SiGraphql className="w-6 h-6 text-[#E10098]" /> }
          ]
        },
        { 
          name: 'DevOps & Tools',
          items: [
            { name: 'Docker', icon: <SiDocker className="w-6 h-6 text-[#2496ED]" /> },
            { name: 'Git', icon: <FaGitAlt className="w-6 h-6 text-[#F05032]" /> },
            { name: 'GitHub', icon: <SiGithub className="w-6 h-6" /> },
            { name: 'Google Cloud', icon: <SiGooglecloud className="w-6 h-6 text-[#4285F4]" /> },
            { name: 'Heroku', icon: <SiHeroku className="w-6 h-6 text-[#430098]" /> },
            { name: 'Netlify', icon: <SiNetlify className="w-6 h-6 text-[#00C7B7]" /> },
            { name: 'CI/CD', icon: <SiGithub className="w-6 h-6" /> }
          ]
        }
      ]
    },
    ai: {
      title: 'AI/ML Engineering',
      icon: <FaBrain className="w-6 h-6" />,
      skills: [
        { 
          name: 'Frameworks',
          items: [
            { name: 'TensorFlow', icon: <SiTensorflow className="w-6 h-6 text-[#FF6F00]" /> },
            { name: 'PyTorch', icon: <SiPytorch className="w-6 h-6 text-[#EE4C2C]" /> },
            { name: 'Keras', icon: <SiKeras className="w-6 h-6 text-[#D00000]" /> },
            { name: 'scikit-learn', icon: <SiScikitlearn className="w-6 h-6 text-[#F7931E]" /> }
          ]
        },
        { 
          name: 'Technologies',
          items: [
            { name: 'Python', icon: <FaPython className="w-6 h-6 text-[#3776AB]" /> },
            { name: 'Computer Vision', icon: <FaRobot className="w-6 h-6 text-[#4CAF50]" /> },
            { name: 'NLP', icon: <SiTensorflow className="w-6 h-6 text-[#4CAF50]" /> },
            { name: 'Deep Learning', icon: <FaBrain className="w-6 h-6 text-[#9C27B0]" /> }
          ]
        },
        { 
          name: 'MLOps',
          items: [
            { name: 'Model Deployment', icon: <SiDocker className="w-6 h-6 text-[#2496ED]" /> },
            { name: 'Data Pipelines', icon: <FaDatabase className="w-6 h-6 text-[#2196F3]" /> },
            { name: 'MLflow', icon: <SiTensorflow className="w-6 h-6 text-[#0194E2]" /> },
            { name: 'Model Serving', icon: <FaServer className="w-6 h-6 text-[#607D8B]" /> }
          ]
        }
      ]
    }
  };

  const currentCategory = techCategories[activeTab];

  return (
    <section id="skills" className="py-16 md:py-20 bg-gradient-to-b from-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-left mb-12 md:mb-16 px-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500 leading-tight">
            My Tech Stack
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl text-base md:text-lg leading-relaxed">
            Technologies and tools I use to build amazing digital experiences and intelligent systems
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-start mb-10 md:mb-12 px-4">
          <div className="inline-flex rounded-xl bg-gray-700/50 p-1 shadow-lg">
            {Object.entries(techCategories).map(([key, { title, icon }]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 ${
                  activeTab === key 
                    ? 'bg-gray-800 text-white shadow-lg' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
                }`}
              >
                {icon}
                <span>{title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div 
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="w-full"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-4">
            {currentCategory.skills.map((category, index) => (
              <div 
                key={index} 
                className="glass-card p-6 rounded-2xl bg-gray-800/50 backdrop-blur-lg border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 h-full flex flex-col"
              >
                <h3 className="text-xl font-semibold text-green-300 mb-4">{category.name}</h3>
                <div className="grid grid-cols-2 gap-3 flex-grow">
                  {category.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      whileHover={{ y: -2 }}
                      className="flex items-center space-x-2 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700/80 transition-colors h-full"
                    >
                      <span className="flex-shrink-0">{item.icon}</span>
                      <span className="text-sm font-medium text-gray-200">{item.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
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

export default TechStack;
