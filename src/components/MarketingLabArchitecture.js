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
            <h3 className="text-xl font-bold text-green-400 mb-4 text-center">Backend Services (Dockerized)</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm mb-2">API Engine</div>
                <div className="text-xs text-gray-400">Python + FastAPI</div>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm mb-2">Database</div>
                <div className="text-xs text-gray-400">PostgreSQL (Async)</div>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm mb-2">Tasks</div>
                <div className="text-xs text-gray-400">APScheduler</div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm mb-2">Simulation Engine</div>
                <div className="text-xs text-gray-400">Probabilistic/Monte Carlo</div>
              </div>
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm mb-2">OSINT Engine</div>
                <div className="text-xs text-gray-400">BeautifulSoup + Feedparser</div>
              </div>
            </div>

          </div>
        </div>

        {/* Connection Lines */}
        <div className="hidden md:block">
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 800 400">
            {/* Backend to Frontend */}
            <path
              d="M400,220 L400,100"
              stroke="#10B981"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
            />
            {/* Database Connection */}
            <path
              d="M300,160 L400,160"
              stroke="#10B981"
              strokeWidth="1"
              strokeDasharray="2,2"
              fill="none"
            />
          </svg>
        </div>

        {/* Frontend and Other Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
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
                <div className="text-green-400 font-mono text-sm">React 18 + Vite</div>
                <div className="text-xs text-gray-400">Core Framework</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">TypeScript</div>
                <div className="text-xs text-gray-400">Type Safety</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Tailwind CSS</div>
                <div className="text-xs text-gray-400">Styling System</div>
              </div>
            </div>
          </motion.div>

          {/* Visualization */}
          <motion.div
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 shadow-lg shadow-green-500/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4">Visualization</h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Recharts</div>
                <div className="text-xs text-gray-400">Data Charting</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Framer Motion</div>
                <div className="text-xs text-gray-400">Animations</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Lucide React</div>
                <div className="text-xs text-gray-400">Icons</div>
              </div>
            </div>
          </motion.div>

          {/* Deployment */}
          <motion.div
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-green-500/30 shadow-lg shadow-green-500/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4">Infrastructure</h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Docker</div>
                <div className="text-xs text-gray-400">Containerization</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Docker Compose</div>
                <div className="text-xs text-gray-400">Orchestration</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Git</div>
                <div className="text-xs text-gray-400">Version Control</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarketingLabArchitecture;
