import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiGithub, FiCpu, FiMic, FiActivity, FiLayers } from 'react-icons/fi';
import Fireflies from './Fireflies';
import Navbar from './Navbar';
import Footer from './Footer';
import BrainzArchitecture from './BrainzArchitecture';

const DteamsCaseStudy = () => {
  const navigate = useNavigate();

  // Impact stats
  const stats = [
    {
      value: 'Full-Stack',
      label: 'Agent Foundry',
      description: 'From Dataset Creation to Inference Deployment'
    },
    {
      value: '<500ms',
      label: 'Audio Latency',
      description: 'Optimized WebSocket Streaming for TTS'
    },
    {
      value: '100%',
      label: 'Autonomous',
      description: 'Self-healing training & deployment pipelines'
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
            <div className="inline-block px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-mono mb-6 backdrop-blur-sm">
              GenAI Agent Platform
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Dteams: <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">Autonomous AI Workforce</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Dteams isn't just a chatbot wrapper—it's a complete **Agent Foundry**. It empowers users to create, train, and deploy "Digital Employees" with distinct personalities, cloned voices, and the agency to execute real-world tasks.
            </p>
          </motion.div>
        </section>
      </div>

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
            <h2 className="text-3xl font-bold mb-8 text-center text-green-400">The Problem & Solution</h2>
            <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700 mb-12">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                **The Problem:** Most AI agents today are generic. They sound the same (robotic), lack specific domain knowledge, and cannot interact with external systems. Building a custom agent historically required a team of ML Engineers to handle fine-tuning, RAG pipelines, and infrastructure.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                **The solution (Dteams):** A "No-Code" studio that democratizes this process. Users define a persona, upload knowledge (PDFs), and record a 1-minute voice sample. Dteams automates the entire backend: spinning up **AWS SageMaker** training jobs, optimizing **LoRA adapters**, indexing vector embeddings in **ChromaDB**, and deploying a high-fidelity **Coqui XTTS** voice clone—all in under 10 minutes.
              </p>
            </div>

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
                    aria-label="Dteams Demo Video"
                  >
                    <source src="/twin.mp4" type="video/mp4" />
                    Your browser does not support the video tag. Here's a
                    <a href="/twin.mp4" download>link to download the video</a> instead.
                  </video>
                </div>
              </div>
              <p className="mt-4 text-gray-400 text-sm">
                Demonstration of the Agent Foundry workflow: Creating an agent, training the voice model, and deploying the inference endpoint.
              </p>
            </div>

            {/* System Architecture */}
            <div className="mb-12">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-white">Full-Stack Architecture</h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-xs rounded-full border border-blue-500/30">Next.js 14</span>
                  <span className="px-3 py-1 bg-teal-500/20 text-teal-400 text-xs rounded-full border border-teal-500/30">FastAPI</span>
                  <span className="px-3 py-1 bg-orange-500/20 text-orange-400 text-xs rounded-full border border-orange-500/30">AWS SageMaker</span>
                </div>
              </div>

              <div className="bg-slate-950 rounded-xl overflow-hidden border border-gray-800 shadow-2xl">
                <BrainzArchitecture />
              </div>
              <p className="mt-6 text-gray-400 text-sm text-center">
                The architecture decouples the highly responsive UI (Next.js) from the compute-intensive ML operations (SageMaker), bridged by an asynchronous FastAPI Orchestrator.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works (Process Flow) */}
      <section className="py-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-16 text-center text-white">How It Works: The Agent Lifecycle</h2>

            <div className="grid md:grid-cols-4 gap-4 relative">
              {/* Connecting Line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-green-500/20 -translate-y-1/2 z-0"></div>

              {[
                { title: "Define", icon: <FiCpu />, desc: "Set Persona, Role & Goals" },
                { title: "Knowledge", icon: <FiLayers />, desc: "Upload PDFs & Datasets" },
                { title: "Voice", icon: <FiMic />, desc: "Record 1-min Audio Sample" },
                { title: "Deploy", icon: <FiActivity />, desc: "Auto-Train & Launch Endpoint" }
              ].map((step, idx) => (
                <div key={idx} className="relative z-10 bg-gray-800 p-6 rounded-xl border border-gray-700 hover:border-green-500/50 transition-colors group">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg border border-gray-700 flex items-center justify-center text-2xl text-green-400 mb-4 group-hover:scale-110 transition-transform shadow-lg shadow-green-900/20">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{idx + 1}. {step.title}</h3>
                  <p className="text-sm text-gray-400">{step.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Deep Dive Features */}
      <section className="py-20 bg-gray-900/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl font-bold mb-16 text-center text-green-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Core Capabilities Deep Dive
          </motion.h2>

          {/* Feature 1: The Studio */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-green-500/10 rounded-lg text-green-400"><FiCpu size={24} /></div>
                <h3 className="text-2xl font-bold text-white">Agent Studio & Dataset Creator</h3>
              </div>
              <p className="text-gray-300 mb-4 text-lg">
                The heart of Dteams is the Studio. We built a custom **Audio Dataset Creator** that runs entirely in the browser. Users follow on-screen prompts to record voice samples, which are analyzed for clarity and length in real-time before being packaged for training.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">→</span>
                  <span className="text-gray-400"><strong>Browser-based Audio Processing:</strong> Uses Web Audio API for noise reduction and normalization.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-400 mr-3 mt-1">→</span>
                  <span className="text-gray-400"><strong>Real-time State Management:</strong> Track training jobs across AWS regions with optimistic UI updates.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
              <img
                src="/brain1.png"
                alt="Agent Studio Interface"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                style={{ maxHeight: '350px' }}
              />
            </div>
          </motion.div>

          {/* Feature 2: Voice Engine */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="md:order-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400"><FiMic size={24} /></div>
                <h3 className="text-2xl font-bold text-white">Neural Voice Cloning (XTTS v2)</h3>
              </div>
              <p className="text-gray-300 mb-4 text-lg">
                We integrated Coqui's state-of-the-art **XTTS v2** model directly into the inference pipeline. Unlike standard APIs, this allows for "Zero-Shot" cloning where the voice style is conditioned on the 60-second sample recorded in the Studio.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">→</span>
                  <span className="text-gray-400"><strong>Streaming Architecture:</strong> Audio chunks are streamed via WebSockets to the frontend, reducing perceived latency to &lt;500ms.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-3 mt-1">→</span>
                  <span className="text-gray-400"><strong>Cross-Lingual:</strong> Agents can speak Hindi or English fluently, maintaining the same voice identity.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl md:order-1">
              <img
                src="/brain2.png"
                alt="Voice Chat Interface"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                style={{ maxHeight: '350px' }}
              />
            </div>
          </motion.div>

          {/* Feature 3: Automation */}
          <motion.div
            className="grid md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400"><FiActivity size={24} /></div>
                <h3 className="text-2xl font-bold text-white">Autonomous Action Engine ("Zaps")</h3>
              </div>
              <p className="text-gray-300 mb-4 text-lg">
                Agents are useless if they are trapped in a chatbox. Dteams introduces **Zaps**—atomic units of work. An agent can detect intent (e.g., "Schedule a meeting") and trigger a connected Zap.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">→</span>
                  <span className="text-gray-400"><strong>Intent Recognition:</strong> Dedicated classification layer in the LLM pipeline determines if a user request requires an external tool.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">→</span>
                  <span className="text-gray-400"><strong>Safe Execution:</strong> Zaps run in a sandboxed environment, ensuring agents can only access permitted APIs.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl overflow-hidden border border-gray-700 shadow-2xl">
              <img
                src="/brain3.png"
                alt="Automation Dashboard"
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                style={{ maxHeight: '350px' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Development Challenges */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl font-bold mb-12 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Engineering Challenges
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:bg-gray-800/80 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 text-orange-400 font-mono">Challenge: Synchronization</h3>
              <p className="text-gray-400 mb-4 h-16">
                AWS SageMaker training jobs take 15-20 minutes. How do we keep the user informed without crashing the browser with polling?
              </p>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 text-sm text-gray-300">
                <strong>Solution:</strong> Implemented a "Smart Poller" in the FastAPI backend that checks AWS status independently and pushes updates to the frontend via Webhooks/WebSockets only when status changes.
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:bg-gray-800/80 transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold mb-4 text-teal-400 font-mono">Challenge: Context Window</h3>
              <p className="text-gray-400 mb-4 h-16">
                Maintaining conversational context while injecting large PDF knowledge bases (RAG) often overflows the LLM's token limit.
              </p>
              <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 text-sm text-gray-300">
                <strong>Solution:</strong> Used <strong>ChromaDB</strong> with Maximum Marginal Relevance (MMR) search to fetch only the top-k most relevant chunks, dynamically assembling the prompt context.
              </div>
            </motion.div>
          </div>
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
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4 text-green-400">Results</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Dteams successfully demonstrated that high-fidelity custom AI agents can be created without writing a single line of training code.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-green-500/30 transition-all duration-300 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.value}
                </div>
                <h3 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">{stat.label}</h3>
                <p className="text-gray-500 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-white">Explore the Codebase</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-10">
              The entire platform is open-source. Dive into the React frontend, the FastAPI orchestrator, or the SageMaker training scripts.
            </p>
            <div className="flex justify-center gap-4">
              <motion.a
                href="https://github.com/ZenMasterrr/Dteams-X-Ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 border border-green-500/30 text-base font-medium rounded-full text-white bg-green-500/10 hover:bg-green-500/20 transition-all duration-300 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub className="mr-2" />
                <span>View on GitHub</span>
              </motion.a>
            </div>

          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DteamsCaseStudy;
