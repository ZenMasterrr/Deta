import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import Fireflies from './Fireflies';
import Navbar from './Navbar';
import Footer from './Footer';
import BrainzArchitecture from './BrainzArchitecture';

const BrainzCaseStudy = () => {
  const navigate = useNavigate();

  // Impact stats
  const stats = [
    { 
      value: 'High',
      label: 'Accuracy',
      description: 'in personality and communication style replication'
    },
    { 
      value: 'Always',
      label: 'Available',
      description: 'digital twin ready for interactions anytime'
    },
    { 
      value: 'Exceptional',
      label: 'User Satisfaction',
      description: 'with digital twin authenticity and performance'
    },
  ];

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
              Brainz - AI-Powered Digital Twin Platform
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Creating digital twins that perfectly mirror your personality through advanced AI and natural language processing
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
              Brainz is an innovative AI-powered platform that creates a digital twin mirroring your personality, communication style, and behavioral patterns. By analyzing speech, writing, and interaction patterns, Brainz builds a sophisticated AI model that can engage in conversations, respond to queries, and interact with others just like you would. The platform leverages advanced natural language processing and machine learning to capture unique mannerisms, tone, and decision-making processes, creating an authentic digital representation.
            </p>
            
            {/* Project Demo */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">Digital Twin Demo</h3>
              <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50">
                <div className="relative pt-[56.25%] w-full"> {/* 16:9 Aspect Ratio */}
                  <video 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    controls
                    controlsList="nodownload"
                    preload="metadata"
                    aria-label="Digital Twin Demo Video"
                  >
                    <source src="/twin.mp4" type="video/mp4" />
                    Your browser does not support the video tag. Here's a 
                    <a href="/twin.mp4" download>link to download the video</a> instead.
                  </video>
                </div>
              </div>
              <p className="mt-4 text-gray-400 text-sm">
                Interactive demo showing the digital twin creation and personality analysis workflow.
              </p>
            </div>

            {/* System Architecture */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-4 text-green-400">System Architecture</h3>
              <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50">
                <BrainzArchitecture />
              </div>
              <p className="mt-4 text-gray-400 text-sm">
                Three-tier architecture ensuring secure, scalable, and performant digital twin creation and interaction.
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
                  <div className="w-full h-20 rounded-md bg-black mb-2"></div>
                  <p className="text-center font-mono text-sm">#000000</p>
                  <p className="text-center text-xs text-gray-400">Black</p>
                </div>
                <div className="bg-orange-500 p-6 rounded-lg border border-gray-700">
                  <div className="w-full h-20 rounded-md bg-orange-500 mb-2"></div>
                  <p className="text-center font-mono text-sm">#F97316</p>
                  <p className="text-center text-xs text-gray-400">Orange</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-700">
                  <div className="w-full h-20 rounded-md bg-white mb-2"></div>
                  <p className="text-center font-mono text-sm">#FFFFFF</p>
                  <p className="text-center text-xs text-gray-400">White</p>
                </div>
                <div className="bg-transparent p-6 rounded-lg border border-gray-700">
                  <div className="w-full h-20 rounded-md bg-gradient-to-br from-transparent via-black/30 to-transparent mb-2"></div>
                  <p className="text-center font-mono text-sm">Transparent</p>
                  <p className="text-center text-xs text-gray-400">Transparent</p>
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
              <h3 className="text-2xl font-bold mb-4 text-green-400">1. Personality Analysis</h3>
              <p className="text-gray-300 mb-4">
                Advanced AI that studies your unique communication patterns, speech mannerisms, and behavioral traits to create an accurate digital twin.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Speech pattern recognition and analysis</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Writing style and tone mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Behavioral pattern identification</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <img 
                src="/brain3.png" 
                alt="Brainz Dashboard" 
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
              <h3 className="text-2xl font-bold mb-4 text-green-400">2. Digital Twin Creation</h3>
              <p className="text-gray-300 mb-4">
                Build a sophisticated AI model that captures your unique personality traits and communication style.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Custom AI model generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Personality trait mapping</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Continuous learning and adaptation</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 md:order-1">
              <img 
                src="/brain1.png" 
                alt="Model Training Interface" 
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
              <h3 className="text-2xl font-bold mb-4 text-green-400">3. Natural Interaction</h3>
              <p className="text-gray-300 mb-4">
                Seamless interaction with your digital twin through natural conversation and text-based communication.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Voice and text-based communication</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Context-aware responses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Emotional intelligence and tone matching</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700">
              <img 
                src="/brain2.png" 
                alt="Voice Chat Interface" 
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
              Brainz revolutionizes digital interaction by creating authentic digital twins that preserve and extend personal presence through advanced AI. The platform's sophisticated analysis and modeling capabilities ensure a truly personalized digital experience.
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
                <span className="text-gray-300">Significantly reduced user confusion during model training through intuitive UI/UX improvements</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span className="text-gray-300">Greatly increased user engagement with the introduction of interactive voice features</span>
              </li>
              <li className="flex items-start">
                <span className="text-green-400 mr-3 mt-1">✓</span>
                <span className="text-gray-300">Consistently received high user satisfaction ratings for overall platform experience</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Challenges & Solutions */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Challenges & Solutions
          </motion.h2>
          
          <div className="max-w-4xl mx-auto space-y-8">
            <motion.div 
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-green-400">Challenge 1: Complex Workflow Simplification</h3>
              <p className="text-gray-300 mb-3">AI model training involves complex parameters and settings that could overwhelm users.</p>
              <h4 className="font-semibold text-blue-400 mb-2">Solution:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Implemented a progressive disclosure pattern</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Created guided workflows with clear progress indicators</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Provided sensible defaults with advanced options available</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-green-400">Challenge 2: Real-time Feedback</h3>
              <p className="text-gray-300 mb-3">Users need immediate feedback during voice interactions and model training.</p>
              <h4 className="font-semibold text-blue-400 mb-2">Solution:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Implemented real-time visual feedback for voice input</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Added progress indicators for long-running operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  <span>Used WebSockets for live updates</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Improvements */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-4xl mx-auto bg-gray-800/50 p-8 rounded-xl border border-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-center">Future Improvements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Enhanced onboarding tutorial',
                'More customization options for the voice interface',
                'Advanced analytics visualization',
                'Dark/light theme toggle'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">→</span>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Explore the Code */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-green-400">Explore the Code</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
              Interested in the technical details? Check out the source code on GitHub to see how this project was built.
            </p>
            <motion.a
              href="https://github.com/ZenMasterrr/Brainz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View on GitHub</span>
              <FiExternalLink className="ml-2" />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
      </div>
    </div>
  );
};

export default BrainzCaseStudy;
