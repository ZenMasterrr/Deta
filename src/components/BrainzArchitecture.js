import React from 'react';
import { motion } from 'framer-motion';
import { FaDatabase, FaAws } from 'react-icons/fa';
import { SiNextdotjs, SiFastapi, SiPytorch, SiAmazon, SiDocker } from 'react-icons/si';

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
              <div className="bg-gray-700/50 p-4 rounded-lg border border-gray-600/30 w-full max-w-xs transition-transform hover:scale-105 duration-300">
                <div className="flex items-center justify-center mb-2 text-white">
                  <SiNextdotjs className="text-2xl" />
                </div>
                <div className="text-green-400 font-mono text-sm mb-1 text-center">Agent Studio</div>
                <div className="text-xs text-gray-400 text-center">Next.js + React UI</div>
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
              className="animate-pulse"
            />
            {/* API to AI Services */}
            <path
              d="M400,300 Q500,250 600,200"
              stroke="#F97316"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
            />
            {/* API to Data */}
            <path
              d="M400,300 L400,400"
              stroke="#F97316"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
            />
            {/* API to Training */}
            <path
              d="M400,300 Q300,250 200,200"
              stroke="#F97316"
              strokeWidth="2"
              strokeDasharray="5,5"
              fill="none"
            />
          </svg>
        </div>

        {/* Core Services */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* AI Training & Inference */}
          <motion.div
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/30 shadow-lg shadow-orange-500/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center justify-center gap-2">
              <FaAws className="text-orange-400" /> AI Core
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">SageMaker Training</div>
                <div className="text-xs text-gray-400">LoRA Fine-tuning (TinyLlama)</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Inference Endpoint</div>
                <div className="text-xs text-gray-400">Real-time LLM Generation</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Voice Cloning</div>
                <div className="text-xs text-gray-400">Coqui XTTS v2</div>
              </div>
            </div>
          </motion.div>

          {/* Backend API */}
          <motion.div
            className="bg-gray-800/80 backdrop-blur-sm p-6 rounded-2xl border border-orange-500/30 shadow-lg shadow-orange-500/10"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center justify-center gap-2">
              <SiFastapi className="text-teal-400" /> Backend API
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">FastAPI Service</div>
                <div className="text-xs text-gray-400">Orchestration Controller</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">WebSocket Gateway</div>
                <div className="text-xs text-gray-400">Streaming Audio/Text</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Automation Engine</div>
                <div className="text-xs text-gray-400">Zap Logic & Triggers</div>
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
            <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center justify-center gap-2">
              <FaDatabase className="text-purple-400" /> Key Data
            </h3>
            <div className="space-y-3">
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Vector DB</div>
                <div className="text-xs text-gray-400">ChromaDB (RAG Memories)</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Artifact Store</div>
                <div className="text-xs text-gray-400">AWS S3 (Models/Datasets)</div>
              </div>
              <div className="bg-gray-700/50 p-3 rounded-lg border border-gray-600/30">
                <div className="text-green-400 font-mono text-sm">Metadata</div>
                <div className="text-xs text-gray-400">JSON/Postgres</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Infrastructure */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold text-green-400 mb-6">Infrastructure</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 transition-colors hover:border-green-500/50">
              <div className="text-green-400 text-2xl mb-2 flex justify-center"><SiDocker /></div>
              <div className="font-medium">Containerized</div>
              <p className="text-sm text-gray-400">Portable & Scalable</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 transition-colors hover:border-green-500/50">
              <div className="text-green-400 text-2xl mb-2 flex justify-center"><SiAmazon /></div>
              <div className="font-medium">AWS Cloud</div>
              <p className="text-sm text-gray-400">EC2 + SageMaker</p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50 transition-colors hover:border-green-500/50">
              <div className="text-green-400 text-2xl mb-2 flex justify-center"><SiPytorch /></div>
              <div className="font-medium">ML Core</div>
              <p className="text-sm text-gray-400">PyTorch 2.0</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrainzArchitecture;
