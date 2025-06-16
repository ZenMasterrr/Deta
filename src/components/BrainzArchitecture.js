import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaUser, FaServer, FaDatabase, FaCode, FaNetworkWired } from 'react-icons/fa';
import { SiNextdotjs, SiNodedotjs, SiPytorch, SiMongodb, SiRabbitmq, SiSocketdotio } from 'react-icons/si';

const BrainzArchitecture = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto p-6">
      {/* Main Container */}
      <div className="relative">
        {/* User Interaction Layer */}
        <div className="flex flex-col items-center mb-12">
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 shadow-lg shadow-green-500/10 w-full max-w-2xl">
            <h3 className="text-xl font-bold text-green-400 mb-4 text-center">User Interaction</h3>
            <div className="flex justify-center">
            <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30 w-full max-w-xs">
              <div className="text-green-400 font-mono text-sm mb-2">Web Interface</div>
              <div className="text-xs text-gray-400">Next.js + React</div>
            </div>
          </div>
          </div>
        </div>

        {/* Connection Lines */}
        <div className="hidden md:block">
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
            {/* User to API */}
            <path 
              d="M400,180 L400,100" 
              stroke="#F97316" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              fill="none"
            />
            {/* API to AI Services */}
            <path 
              d="M400,300 Q500,250 600,200" 
              stroke="#F97316" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              fill="none"
            />
            {/* API to Database */}
            <path 
              d="M400,300 L400,400" 
              stroke="#F97316" 
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
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/30 shadow-lg shadow-orange-500/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4">API Layer</h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">REST API</div>
                <div className="text-xs text-gray-400">Express.js</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">WebSocket</div>
                <div className="text-xs text-gray-400">Real-time Updates</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Authentication</div>
                <div className="text-xs text-gray-400">JWT + OAuth2</div>
              </div>
            </div>
          </motion.div>

          {/* AI Services */}
          <motion.div 
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/30 shadow-lg shadow-orange-500/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4">AI Services</h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">NLP Engine</div>
                <div className="text-xs text-gray-400">PyTorch + Transformers</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Personality Model</div>
                <div className="text-xs text-gray-400">Custom ML Models</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Training Pipeline</div>
                <div className="text-xs text-gray-400">Automated Retraining</div>
              </div>
            </div>
          </motion.div>

          {/* Data Layer */}
          <motion.div 
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/30 shadow-lg shadow-orange-500/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4">Data Layer</h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">MongoDB</div>
                <div className="text-xs text-gray-400">Document Store</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Vector DB</div>
                <div className="text-xs text-gray-400">Embedding Storage</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Redis</div>
                <div className="text-xs text-gray-400">Caching Layer</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Infrastructure */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-green-400 mb-6">Infrastructure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
              <div className="text-green-400 text-2xl mb-2"><FaServer /></div>
              <div className="font-medium">Containerized</div>
              <p className="text-sm text-gray-400">Docker + Kubernetes</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
              <div className="text-green-400 text-2xl mb-2"><FaNetworkWired /></div>
              <div className="font-medium">CI/CD</div>
              <p className="text-sm text-gray-400">GitHub Actions</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
              <div className="text-green-400 text-2xl mb-2"><FaCode /></div>
              <div className="font-medium">Monitoring</div>
              <p className="text-sm text-gray-400">Prometheus + Grafana</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainzArchitecture;
