import React from 'react';
import { motion } from 'framer-motion';

const MarketingLabArchitecture = () => {
  return (
    <div className="relative w-full max-w-6xl mx-auto p-6">
      {/* Main Container */}
      <div className="relative">
        {/* Backend Services */}
        <div className="flex flex-col items-center mb-12">
          <div className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 shadow-lg shadow-green-500/10 w-full max-w-2xl">
            <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Backend Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm mb-2">API Server</div>
                <div className="text-xs text-gray-400">Node.js + Express</div>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm mb-2">Database</div>
                <div className="text-xs text-gray-400">MongoDB</div>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm mb-2">Auth Service</div>
                <div className="text-xs text-gray-400">JWT + OAuth2</div>
              </div>
            </div>
          </div>
        </div>

        {/* Connection Lines */}
        <div className="hidden md:block">
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
            {/* Backend to Frontend */}
            <path 
              d="M400,180 L400,100" 
              stroke="#10B981" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              fill="none"
            />
            {/* Backend to Analytics */}
            <path 
              d="M400,300 Q500,250 600,200" 
              stroke="#10B981" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              fill="none"
            />
            {/* Backend to External APIs */}
            <path 
              d="M400,300 Q300,250 200,200" 
              stroke="#10B981" 
              strokeWidth="2" 
              strokeDasharray="5,5"
              fill="none"
            />
          </svg>
        </div>

        {/* Frontend and Other Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Frontend */}
          <motion.div 
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 shadow-lg shadow-green-500/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4">Frontend</h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">React</div>
                <div className="text-xs text-gray-400">UI Components</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Three.js</div>
                <div className="text-xs text-gray-400">3D Visualization</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Redux</div>
                <div className="text-xs text-gray-400">State Management</div>
              </div>
            </div>
          </motion.div>

          {/* Analytics Engine */}
          <motion.div 
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 shadow-lg shadow-green-500/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4">Analytics Engine</h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Data Processing</div>
                <div className="text-xs text-gray-400">Real-time Analysis</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Dashboard</div>
                <div className="text-xs text-gray-400">KPI Visualization</div>
              </div>
            </div>
          </motion.div>

          {/* External APIs */}
          <motion.div 
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 shadow-lg shadow-green-500/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4">External Services</h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Email Service</div>
                <div className="text-xs text-gray-400">SendGrid</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Storage</div>
                <div className="text-xs text-gray-400">AWS S3</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">CDN</div>
                <div className="text-xs text-gray-400">Cloudflare</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarketingLabArchitecture;
