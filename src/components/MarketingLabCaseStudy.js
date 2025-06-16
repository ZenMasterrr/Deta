import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import Fireflies from './Fireflies';
import Navbar from './Navbar';
import Footer from './Footer';
import MarketingLabArchitecture from './MarketingLabArchitecture';

const MarketingLabCaseStudy = () => {
  const navigate = useNavigate();

  // Impact stats
  const stats = [
    { 
      value: 'Immersive',
      label: '3D Visualizations',
      description: 'for complex campaign analytics'
    },
    { 
      value: 'Intuitive',
      label: 'Campaign Builder',
      description: 'with dynamic form fields'
    },
    { 
      value: 'Real-time',
      label: 'Performance Metrics',
      description: 'with interactive dashboards'
    },
  ];

  const features = [
    {
      title: '3D Campaign Analytics',
      description: 'Revolutionary Three.js powered data visualizations that transform complex marketing metrics into interactive 3D landscapes.',
      placeholder: '3D Analytics',
      points: [
        'Interactive 3D campaign performance landscapes',
        'Real-time data streaming with WebSockets',
        'Customizable visualization layers and presets',
        'Drill-down capabilities for detailed analysis'
      ]
    },
    {
      title: 'AI-Powered Campaign Builder',
      description: 'Intelligent form system that adapts to campaign type and user behavior.',
      placeholder: 'Campaign Builder',
      points: [
        'Context-aware dynamic form fields',
        'AI-suggested campaign parameters',
        'Real-time collaboration features',
        'Version history and A/B testing setup'
      ]
    },
    {
      title: 'Predictive Analytics Dashboard',
      description: 'Comprehensive real-time analytics with predictive modeling capabilities.',
      placeholder: 'Analytics Dashboard',
      points: [
        'Customizable widget-based interface',
        'Predictive performance modeling',
        'Automated insights and recommendations',
        'Multi-channel attribution modeling'
      ]
    }
  ];

  const designProcess = [
    { 
      title: 'Market Research',
      description: 'Comprehensive analysis of marketing tools and pain points, including interviews with 50+ marketers to define core requirements.'
    },
    { 
      title: 'User Journey Mapping',
      description: 'Created detailed user flows and wireframes focusing on simplifying complex campaign management tasks.'
    },
    { 
      title: 'UI/UX Design',
      description: 'Developed a futuristic yet functional interface with a focus on data visualization and user experience.'
    },
    { 
      title: 'Agile Development',
      description: 'Two-week sprints with continuous integration, testing, and stakeholder feedback loops.'
    },
    { 
      title: 'Deployment & Scaling',
      description: 'Phased rollout with performance monitoring, user training, and continuous optimization.'
    }
  ];

  const challenges = [
    {
      title: 'Data Complexity',
      description: 'Presenting multi-dimensional marketing data without overwhelming users.',
      solution: 'Developed a progressive disclosure system with multiple visualization layers, allowing users to explore data at their own pace.'
    },
    {
      title: 'Performance Optimization',
      description: 'Maintaining real-time performance with complex 3D visualizations.',
      solution: 'Implemented WebWorkers for data processing and optimized Three.js rendering pipeline, achieving smooth performance.'
    },
    {
      title: 'User Adoption',
      description: 'Ensuring marketing teams could effectively use the advanced features.',
      solution: 'Created an adaptive learning system with contextual tooltips, video tutorials, and an interactive knowledge base.'
    }
  ];

  // Smooth scroll to top on component mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-x-hidden">
      <Fireflies />
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        {/* Back Button */}
        <motion.button
          onClick={() => navigate(-1)}
          className="flex items-center text-green-400 hover:text-green-300 transition-colors bg-gray-800/90 hover:bg-gray-700 px-4 py-2 rounded-lg border border-gray-700 shadow-md mb-12"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={{ x: 5 }}
        >
          <FiArrowLeft className="mr-2" /> Back to Portfolio
        </motion.button>

        {/* Hero Section */}
        <section className="relative mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Marketing Lab - AI-Powered Campaign Simulator
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              A cutting-edge marketing platform that transforms campaign management with immersive 3D analytics, AI-driven insights, and real-time collaboration tools
            </p>
          </motion.div>
        </section>

      {/* Project Overview */}
      <section id="overview" className="py-16 bg-gray-900/50 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Project Overview</h2>
            <p className="text-lg text-gray-300 mb-12 leading-relaxed">
              Marketing Lab revolutionizes how marketing teams conceptualize, execute, and analyze campaigns. By combining advanced 3D data visualization with AI-powered insights, 
              it transforms complex marketing data into intuitive, interactive experiences. The platform enables marketers to simulate campaign outcomes, optimize strategies in real-time, 
              and collaborate seamlessly across teams—all within a visually stunning interface that makes data-driven decision making more accessible than ever.
            </p>
            
            {/* Project Demo */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Project Demo</h3>
              <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50">
                <div className="relative pt-[56.25%] w-full"> {/* 16:9 Aspect Ratio */}
                  <video 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                    aria-label="Marketing Lab Demo Video"
                  >
                    <source src="/marketing.mp4" type="video/mp4" />
                    Your browser does not support the video tag. Here's a 
                    <a href="/marketing.mp4" download>link to download the video</a> instead.
                  </video>
                </div>
              </div>
              <p className="mt-4 text-gray-400 text-sm">
                Walkthrough of the Marketing Lab platform showcasing campaign creation, 3D analytics visualization, and real-time collaboration features.
              </p>
            </div>

            {/* System Architecture */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-8 text-green-400">System Architecture</h3>
              <div className="bg-gray-800/30 rounded-xl overflow-hidden border border-gray-700/50 p-6">
                <MarketingLabArchitecture />
              </div>
              <p className="mt-6 text-gray-400 text-sm text-center max-w-3xl mx-auto">
                The platform leverages a robust microservices architecture built with Node.js and React, featuring real-time data synchronization, 
                AI/ML model integration, and scalable cloud infrastructure to handle complex marketing data processing and visualization at scale.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Design System */}
      <section className="py-16 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Design System</h2>
            
            {/* Color Palette */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-green-400">Color Palette</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-black p-6 rounded-lg border border-gray-700">
                  <div className="w-full h-20 rounded-md bg-black mb-2 border border-gray-700"></div>
                  <p className="text-center font-mono text-sm">#000000</p>
                  <p className="text-center text-xs text-gray-400">Black</p>
                </div>
                <div className="bg-purple-600 p-6 rounded-lg border border-gray-700">
                  <div className="w-full h-20 rounded-md bg-purple-600 mb-2"></div>
                  <p className="text-center font-mono text-sm">#9333EA</p>
                  <p className="text-center text-xs text-gray-400">Purple</p>
                </div>
                <div className="bg-pink-500 p-6 rounded-lg border border-gray-700">
                  <div className="w-full h-20 rounded-md bg-pink-500 mb-2"></div>
                  <p className="text-center font-mono text-sm">#EC4899</p>
                  <p className="text-center text-xs text-gray-400">Pink</p>
                </div>
                <div className="bg-blue-500 p-6 rounded-lg border border-gray-700">
                  <div className="w-full h-20 rounded-md bg-blue-500 mb-2"></div>
                  <p className="text-center font-mono text-sm">#3B82F6</p>
                  <p className="text-center text-xs text-gray-400">Blue</p>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-green-400">Typography</h3>
              <div className="bg-gray-900 p-6 rounded-xl border border-gray-700">
                <h1 className="text-4xl font-bold mb-4">Heading 1</h1>
                <h2 className="text-3xl font-bold mb-4">Heading 2</h2>
                <h3 className="text-2xl font-semibold mb-4">Heading 3</h3>
                <p className="text-lg mb-4">Body text - Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-sm text-gray-400">Small text - Additional information or captions</p>
              </div>
            </div>

            {/* UI Components section removed as requested */}
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl font-bold mb-16 text-center text-green-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Key Features
          </motion.h2>
          
          {/* Feature 1 */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">1. 3D Data Visualization</h3>
              <p className="text-gray-300 mb-4">
                Interactive Three.js powered data representations with cyberpunk styling for immersive data exploration.
              </p>
              <ul className="space-y-2">
                {features[0].points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50">
              <img 
                src="/mar1.png" 
                alt="3D Data Visualization" 
                className="w-full h-full object-cover"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-green-400">2. Dynamic Forms</h3>
              <p className="text-gray-300 mb-4">
                Context-aware form fields that adapt based on user inputs and selections for a streamlined experience.
              </p>
              <ul className="space-y-2">
                {features[1].points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 md:order-1">
              <img 
                src="/mar3.png" 
                alt="Dynamic Form Interface" 
                className="w-full h-full object-cover"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </motion.div>

          {/* Feature 3 */}
          <motion.div 
            className="grid md:grid-cols-2 gap-8 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-green-400">3. Real-time Analytics</h3>
              <p className="text-gray-300 mb-4">
                Live campaign performance metrics with interactive filtering and customization options.
              </p>
              <ul className="space-y-2">
                {features[2].points.map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-blue-400 mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50">
              <img 
                src="/mar2.png" 
                alt="Analytics Dashboard" 
                className="w-full h-full object-cover"
                style={{ maxHeight: '300px' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results & Impact */}
      <section className="py-20 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-green-400">Results & Impact</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-300">
              The implementation of Marketing Lab resulted in significant improvements across key metrics, enhancing both user experience and marketing effectiveness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, boxShadow: '0 10px 30px -10px rgba(16, 185, 129, 0.1)' }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-3">
                  {stat.value}
                </div>
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{stat.label}</h3>
                <p className="text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 max-w-4xl mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-green-400 mb-4">Key Achievements</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span className="text-gray-300">Significantly increased user engagement through interactive data visualizations</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span className="text-gray-300">Dramatically reduced campaign setup time with streamlined workflows and dynamic forms</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Design Process */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-green-400">Design Process</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-8"></div>
            <p className="text-lg text-gray-300">
              A user-centered approach that balances aesthetics with functionality, ensuring an intuitive and engaging experience.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-purple-500"></div>
            
            {/* Process Steps */}
            <div className="space-y-16">
              {designProcess.map((step, index) => (
                <motion.div
                  key={index}
                  className={`relative flex ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} items-center`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {/* Content */}
                  <div className={`w-5/12 p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}>
                    <div className="flex items-center mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-4 ${index % 2 === 0 ? 'bg-green-500/10 text-green-400' : 'bg-blue-500/10 text-blue-400'}`}>
                        <span className="text-xl font-bold">{index + 1}</span>
                      </div>
                      <h3 className={`text-xl font-bold ${index % 2 === 0 ? 'text-green-400' : 'text-blue-400'}`}>
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-300">{step.description}</p>
                    {step.details && (
                      <div className="mt-4 p-4 bg-gray-900/50 rounded-lg border-l-4 border-green-500">
                        <h4 className="font-semibold text-green-400 mb-2">Key Activities</h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, i) => (
                            <li key={i} className="flex items-start">
                              <span className="text-green-400 mr-2 mt-1">•</span>
                              <span className="text-gray-300">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                  
                  {/* Timeline dot */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full ${index % 2 === 0 ? 'bg-green-500' : 'bg-blue-500'} border-4 border-gray-900`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Button */}
      <section className="py-20 bg-gray-900/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-green-400">Explore the Code</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in the technical details? Check out the source code on GitHub to see how this project was built.
            </p>
            <motion.a
              href="https://github.com/ZenMasterrr/Marketing-Lab"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-green-500/30 rounded-xl text-green-400 font-medium transition-all duration-300 group"
              whileHover={{ 
                y: -3,
                boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)'
              }}
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="mr-3 group-hover:scale-110 transition-transform"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View on GitHub</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
          </motion.div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
      
      </div>{/* End of max-w-7xl container */}
    </div>
  );
};

export default MarketingLabCaseStudy;
