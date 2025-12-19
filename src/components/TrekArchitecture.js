import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaDesktop, FaServer, FaDatabase, FaVideo, FaReact, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiWebgl, SiSocketdotio, SiMongodb, SiAwsamplify } from 'react-icons/si';

const TrekArchitecture = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto p-6">
      {/* Main Container */}
      <div className="relative">
        {/* User Layer */}
        <div className="flex flex-col items-center mb-12">
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 shadow-lg shadow-green-500/10 w-full max-w-2xl">
            <h3 className="text-xl font-bold text-green-400 mb-4 text-center">User Interface</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
                <div className="text-green-400 text-3xl mb-2"><FaDesktop /></div>
                <div className="text-green-400 font-mono text-sm mb-2">Web Browser</div>
                <div className="text-xs text-gray-400">React + Three.js</div>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
                <div className="text-green-400 text-3xl mb-2"><SiWebgl /></div>
                <div className="text-green-400 font-mono text-sm mb-2">3D Experience</div>
                <div className="text-xs text-gray-400">React Three Fiber</div>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Lines */}
        <div className="hidden md:block">
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 800 500">
            {/* Client to API */}
            <path
              d="M400,180 L400,100"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
            />
            {/* API to Services */}
            <path
              d="M400,300 Q500,250 600,200"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
            />
            {/* API to Database */}
            <path
              d="M400,300 L400,400"
              stroke="#3B82F6"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
            />
          </svg>
        </div>

        {/* Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* API Layer */}
          <motion.div
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-500/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4">Application Logic</h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">State Management</div>
                <div className="text-xs text-gray-400">Zustand Store</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Motion Capture</div>
                <div className="text-xs text-gray-400">MediaPipe Holistic</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Animation Solver</div>
                <div className="text-xs text-gray-400">Kalidokit + VRM</div>
              </div>
            </div>
          </motion.div>

          {/* 3D Services */}
          <motion.div
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-500/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4">3D Services</h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Scene Management</div>
                <div className="text-xs text-gray-400">React Three Fiber</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Asset Loading</div>
                <div className="text-xs text-gray-400">3D Models & Textures</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Physics Engine</div>
                <div className="text-xs text-gray-400">Collision Detection</div>
              </div>
            </div>
          </motion.div>

          {/* Data Layer */}
          <motion.div
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-500/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4">Data Layer</h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">MongoDB</div>
                <div className="text-xs text-gray-400">User Data & Content</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">CDN</div>
                <div className="text-xs text-gray-400">Asset Delivery</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Redis</div>
                <div className="text-xs text-gray-400">Caching & Sessions</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Infrastructure */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-green-400 mb-6">Infrastructure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
              <div className="text-green-400 text-2xl mb-2"><FaAws /></div>
              <div className="font-medium">AWS</div>
              <p className="text-sm text-gray-400">EC2, S3, CloudFront</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
              <div className="text-green-400 text-2xl mb-2"><FaServer /></div>
              <div className="font-medium">Containerization</div>
              <p className="text-sm text-gray-400">Docker + Kubernetes</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
              <div className="text-green-400 text-2xl mb-2"><SiAwsamplify /></div>
              <div className="font-medium">CI/CD</div>
              <p className="text-sm text-gray-400">GitHub Actions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrekArchitecture;
