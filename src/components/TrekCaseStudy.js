import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import Fireflies from './Fireflies';
import Navbar from './Navbar';
import Footer from './Footer';
import TrekArchitecture from './TrekArchitecture';

const TrekCaseStudy = () => {
  const navigate = useNavigate();

  // Impact stats
  const stats = [
    {
      value: 'Immersive',
      label: '3D Experience',
      description: 'Explore cities in stunning 3D detail'
    },
    {
      value: 'Educational',
      label: 'Content',
      description: 'Learn about culture and history'
    },
    {
      value: 'Accessible',
      label: 'Design',
      description: 'Built for all users'
    },
  ];

  const features = [
    {
      title: '3D World Exploration',
      description: 'Navigate through detailed 3D environments of global destinations.',
      placeholder: '3D World View',
      points: [
        'First-person navigation controls',
        'Interactive points of interest',
        'VRM Avatar integration'
      ]
    },
    {
      title: 'Real-time Motion Capture',
      description: 'Control your avatar using your webcam with face and pose tracking.',
      placeholder: 'Motion Capture',
      points: [
        'Face & Hand tracking via MediaPipe',
        'Real-time expression mapping',
        'Interactive avatar control'
      ]
    },
    {
      title: 'Accessible Design',
      description: 'Inclusive features for all users.',
      placeholder: 'Accessibility',
      points: [
        'Text-to-speech functionality',
        'Colorblind mode',
        'Adjustable text sizes'
      ]
    }
  ];

  const designProcess = [
    {
      title: 'Research',
      description: 'Analyzed travel and education app markets to identify opportunities.'
    },
    {
      title: 'Wireframing',
      description: 'Created low-fidelity prototypes for key user flows.'
    },
    {
      title: 'UI/UX Design',
      description: 'Developed high-fidelity designs with a focus on immersion and accessibility.'
    },
    {
      title: 'Development',
      description: 'Built using React Three Fiber, Three.js, and VRM for web-based 3D rendering.'
    },
    {
      title: 'Testing',
      description: 'Conducted user testing to refine the experience.'
    }
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
              3D Trekking Adventure
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-green-400 rounded-full mx-auto mb-8"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              An immersive 3D experience that lets you explore world destinations and discover their cultural heritage
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
                3D Trekking Adventure is a web-based React Three Fiber experience that transports users to stunning locations around the world.
                Explore detailed 3D environments, control your VRM avatar with your webcam, and learn about local culture.
              </p>

              {/* Project Demo */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 text-green-400">Game Demo</h3>
                <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50">
                  <div className="relative pt-[56.25%] w-full"> {/* 16:9 Aspect Ratio */}
                    <video
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      controls
                      controlsList="nodownload"
                      preload="metadata"
                      aria-label="3D Trekking Adventure Demo Video"
                    >
                      <source src="/trek.mp4" type="video/mp4" />
                      Your browser does not support the video tag. Here's a
                      <a href="/trek-demo.mp4" download>link to download the video</a> instead.
                    </video>
                  </div>
                </div>
                <p className="mt-4 text-gray-400 text-sm">
                  Experience the immersive 3D environments and interactive elements of the trekking adventure.
                </p>
              </div>

              {/* System Architecture */}
              <div className="mb-12">
                <h3 className="text-2xl font-semibold mb-4 text-green-400">System Architecture</h3>
                <div className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50">
                  <TrekArchitecture />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* User Persona */}
        <section className="py-16 bg-gray-900/30 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700/50"
            >
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">User Persona</h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <div className="bg-gray-700/30 p-6 rounded-xl mb-6">
                    <h3 className="text-2xl font-bold mb-4 text-green-400">The Digital Explorer</h3>
                    <p className="text-gray-300 mb-4">
                      <span className="font-semibold text-green-300">Demographics:</span> 25-40 years old, Tech-Savvy Professional, Travel Enthusiast
                    </p>
                    <p className="text-gray-300 mb-4">
                      <span className="font-semibold text-green-300">Bio:</span> A modern professional with a passion for travel and technology. They seek immersive digital experiences that allow them to explore the world from anywhere. With a busy schedule, they value high-quality virtual experiences that provide both education and entertainment, helping them discover new cultures and destinations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-300 mb-2">Goals</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          <span>Discover new cultures through immersive experiences</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          <span>Learn about historical sites and their significance</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-400 mr-2 mt-1">•</span>
                          <span>Share experiences with friends and fellow travelers</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-700/30 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-300 mb-2">Frustrations</h4>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2 mt-1">•</span>
                          <span>Limited by physical travel constraints</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2 mt-1">•</span>
                          <span>Shallow or inaccurate cultural information</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-red-400 mr-2 mt-1">•</span>
                          <span>Poorly designed virtual experiences</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-700/30 p-6 rounded-xl">
                  <h4 className="font-semibold text-green-300 mb-4">Key Behaviors</h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-500/20 p-2 rounded-lg mr-3">
                        <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium text-white">Tech-Savvy</h5>
                        <p className="text-sm text-gray-400">Comfortable with new technologies and digital platforms</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-purple-500/20 p-2 rounded-lg mr-3">
                        <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium text-white">Time-Constrained</h5>
                        <p className="text-sm text-gray-400">Seeks efficient ways to learn during busy schedule</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-500/20 p-2 rounded-lg mr-3">
                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h5 className="font-medium text-white">Quality-Focused</h5>
                        <p className="text-sm text-gray-400">Values well-researched, accurate information</p>
                      </div>
                    </li>
                  </ul>
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

            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`grid md:grid-cols-2 gap-8 items-center mb-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className={index % 2 === 0 ? '' : 'md:order-2'}>
                  <h3 className="text-2xl font-bold mb-4 text-green-400">{index + 1}. {feature.title}</h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.points.map((point, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-green-400 mr-2">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 ${index % 2 === 0 ? '' : 'md:order-1'}`}>
                  {index < 2 ? (
                    <img
                      src={`/trek${index + 1}.png`}
                      alt={feature.placeholder}
                      className="w-full h-full object-cover"
                      style={{ maxHeight: '300px' }}
                    />
                  ) : (
                    <div className="w-full h-full min-h-[300px] p-6 bg-gray-800/70">
                      <h4 className="text-lg font-semibold text-green-400 mb-4">Accessibility Features</h4>
                      <div className="space-y-3">
                        {[
                          { icon: '👁️', title: 'Text-to-Speech', desc: 'Full screen reader support' },
                          { icon: '🎨', title: 'Color Modes', desc: 'High contrast & colorblind friendly' },
                          { icon: '⌨️', title: 'Keyboard Nav', desc: 'Full keyboard navigation' },
                          { icon: '📏', title: 'Text Scaling', desc: 'Adjustable text sizes' },
                          { icon: '🔊', title: 'Audio Cues', desc: 'Helpful sound feedback' },
                          { icon: '📱', title: 'Touch Support', desc: 'Optimized for touch devices' }
                        ].map((item, i) => (
                          <div key={i} className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-700/50 transition-colors">
                            <span className="text-xl mt-0.5">{item.icon}</span>
                            <div>
                              <p className="font-medium text-gray-100">{item.title}</p>
                              <p className="text-sm text-gray-400">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
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
                  <div className="bg-gray-900 p-6 rounded-lg border border-gray-700">
                    <div className="w-full h-20 rounded-md bg-gray-900 mb-2 border border-gray-700"></div>
                    <p className="text-center font-mono text-sm">#1A1A2E</p>
                    <p className="text-center text-xs text-gray-400">Background</p>
                  </div>
                  <div className="bg-green-900/50 p-6 rounded-lg border border-gray-700">
                    <div className="w-full h-20 rounded-md bg-green-900/50 mb-2"></div>
                    <p className="text-center font-mono text-sm">#166534</p>
                    <p className="text-center text-xs text-gray-400">Primary</p>
                  </div>
                  <div className="bg-yellow-500/80 p-6 rounded-lg border border-gray-700">
                    <div className="w-full h-20 rounded-md bg-yellow-500/80 mb-2"></div>
                    <p className="text-center font-mono text-sm">#D4AF37</p>
                    <p className="text-center text-xs text-gray-400">Accent</p>
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                    <div className="w-full h-20 rounded-md bg-gray-800 mb-2"></div>
                    <p className="text-center font-mono text-sm">#2D3748</p>
                    <p className="text-center text-xs text-gray-400">Surface</p>
                  </div>
                </div>
              </div>

              {/* Typography */}
              <div className="mb-12">
                <h3 className="text-xl font-semibold mb-6 text-green-400">Typography</h3>
                <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                  <h1 className="text-4xl font-bold mb-4 font-['Montserrat']">Montserrat - Headings</h1>
                  <h2 className="text-3xl font-bold mb-4 font-['Montserrat']">Modern and clean typeface</h2>
                  <h3 className="text-2xl font-semibold mb-4 font-['Montserrat']">Perfect for clear hierarchy</h3>
                  <p className="text-lg mb-4 font-['Open_Sans']">Open Sans - Body text for optimal readability in longer content. The quick brown fox jumps over the lazy dog.</p>
                  <p className="text-sm text-gray-400 font-['Playfair_Display'] italic">Playfair Display - Used for elegant quotes and highlights that need a touch of sophistication.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Accessibility Features */}
        <section className="py-16 bg-gray-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              className="text-3xl font-bold mb-12 text-center text-green-400"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Accessibility Features
            </motion.h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                { title: 'Text-to-Speech', description: 'All content is accessible via screen readers and text-to-speech functionality.' },
                { title: 'Colorblind Mode', description: 'Special color palettes for different types of color vision deficiency.' },
                { title: 'Adjustable Text', description: 'Users can increase text size for better readability.' },
                { title: 'Keyboard Navigation', description: 'Full support for keyboard-only navigation throughout the application.' },
                { title: 'Subtitles/Transcripts', description: 'All audio content includes optional subtitles and transcripts.' },
                { title: 'Motion Reduction', description: 'Option to reduce or disable animations for users with motion sensitivity.' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-700/30 p-6 rounded-xl border border-gray-600/50 hover:border-green-500/30 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-green-400">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Considerations */}
        <section className="py-16 bg-gray-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center text-green-400">Technical Considerations</h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                <motion.div
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Performance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Level of Detail (LOD) for 3D models to optimize rendering</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Asset streaming for large environments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Progressive loading of high-resolution textures</span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-gray-800/50 p-8 rounded-xl border border-gray-700/50"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h3 className="text-2xl font-bold mb-4 text-green-400">Cross-Platform</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      <span>Responsive UI scaling for different screen sizes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Touch controls optimized for mobile devices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span>Cloud save functionality for cross-device progress</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Future Enhancements */}
        <section className="py-16 bg-gray-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="max-w-4xl mx-auto bg-gray-800/50 p-8 rounded-xl border border-gray-700"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-center text-green-400">Future Enhancements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  'Multiplayer Mode for shared exploration',
                  'AR Mode for real-world integration',
                  'User-Generated Content platform',
                  'Seasonal Events and special tours',
                  'Educational Quests and challenges',
                  'Expanded location library'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <span className="text-yellow-400 mr-3 mt-1">→</span>
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
                Interested in the technical implementation? Check out the source code on GitHub to see how this project was built.
              </p>
              <motion.a
                href="https://github.com/ZenMasterrr/Virtual-Frontier"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 transform"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View on GitHub</span>
                <FiExternalLink className="ml-2" />
              </motion.a>
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default TrekCaseStudy;
