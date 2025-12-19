import React, { useEffect, useState, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

// Fire text effect component
const FireText = ({ text }) => {
  return (
    <span className="relative inline-block">
      <span className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-red-700 bg-clip-text text-transparent animate-gradient-x">
        {text}
      </span>
      <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-300">
        {text}
      </span>
    </span>
  );
};

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const controls = useAnimation();
  const heroRef = useRef(null);

  const texts = [
    'I Architect Scalable SaaS Platforms',
    'I Engineer Intelligent AI Agents',
    'I Design Immersive User Experiences'
  ];

  const handleTyping = () => {
    const currentText = texts[loopNum % texts.length];

    setText(isDeleting
      ? currentText.substring(0, text.length - 1)
      : currentText.substring(0, text.length + 1)
    );

    setTypingSpeed(isDeleting ? 30 : 100);

    if (!isDeleting && text === currentText) {
      setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    }
  };

  useEffect(() => {
    let timer;
    const currentText = texts[loopNum % texts.length];

    if (!isDeleting && text === currentText) {
      // Pause at end of typing
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      // Move to next text after deleting
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    } else {
      timer = setTimeout(handleTyping, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, texts]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!heroRef.current) return;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      controls.start({
        x: x * 20,
        y: y * 20,
        rotateX: y * 10,
        rotateY: x * 10,
        transition: { type: 'spring', stiffness: 100, damping: 10 }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [controls]);

  const socialLinks = [
    {
      name: 'GitHub',
      icon: (
        <FaGithub className="w-6 h-6" />
      ),
      url: 'https://github.com/abhishek'
    },
    {
      name: 'LinkedIn',
      icon: (
        <FaLinkedin className="w-6 h-6" />
      ),
      url: '#'
    },
    {
      name: 'Twitter',
      icon: (
        <FaTwitter className="w-6 h-6" />
      ),
      url: '#'
    },
    {
      name: 'Email',
      icon: (
        <FaEnvelope className="w-6 h-6" />
      ),
      url: 'mailto:abhishek@example.com'
    }
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative bg-gray-900 text-white overflow-hidden pt-20 md:pt-24 pb-0"
      ref={heroRef}
      style={{ marginBottom: 0 }}
    >
      {/* Enhanced Background with Gradient Overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.03),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkgc2NhbGUoMC41KSI+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIiBvcGFjaXR5PSIwLjMiLz48L3N2Zz4=')] opacity-30"></div>

        {/* Black Hole Core */}
        <motion.div
          className="absolute top-1/2 left-1/2 w-0 h-0 rounded-full"
          style={{
            boxShadow: '0 0 200px 100px rgba(16, 185, 129, 0.1)',
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            boxShadow: [
              '0 0 200px 100px rgba(16, 185, 129, 0.1)',
              '0 0 250px 125px rgba(16, 185, 129, 0.05)',
              '0 0 200px 100px rgba(16, 185, 129, 0.1)',
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'reverse'
          }}
        />

        {/* Particle Effects */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-green-400"
            style={{
              width: Math.random() * 6 + 2 + 'px',
              height: Math.random() * 6 + 2 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              opacity: Math.random() * 0.5 + 0.1,
            }}
            animate={{
              x: [0, (Math.random() - 0.5) * 100],
              y: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.6, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-6xl w-[90%] mx-auto text-left">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Left Column - Text Content */}
            <div className="md:w-1/2">
              {/* Greeting */}
              <motion.div
                className="text-xl md:text-2xl text-green-400 mb-4 font-mono"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                &lt;Hello World!&gt; I'm
              </motion.div>

              {/* Name */}
              <motion.h1
                className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-yellow-100 to-yellow-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <FireText text="HARSHIT PANDEY" />
              </motion.h1>

              {/* Typewriter Effect */}
              <motion.div
                className="text-xl md:text-3xl font-bold mb-8 h-12 md:h-16 flex items-start w-full"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-full">
                  <span className="text-red-500 border-r-2 border-red-400 animate-pulse">
                    {text}
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Right Column - Glass Card */}
            <motion.div
              className="w-full md:w-1/2 mt-8 md:mt-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div
                className="relative p-8 rounded-2xl overflow-hidden h-full"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                {/* Off-White Glass Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-xl"
                  style={{
                    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
                    backdropFilter: 'blur(16px)',
                    WebkitBackdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.5)'
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-30 animate-shimmer" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <p className="text-gray-700 mb-4 leading-relaxed text-lg font-medium">
                    I architect <span className="text-green-600 font-semibold">intelligent, cloud-native ecosystems</span> that scale.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    Moving beyond rigid tech stacks, I leverage the best tools for the job—whether that’s orchestrating microservices in Python, optimizing high-performance frontends, or integrating <span className="text-green-600 font-semibold">Generative AI pipelines</span>. I don't just write code; I engineer resilient digital solutions.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a
              href="#contact"
              className="glass-button px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 transform"
            >
              Get In Touch
            </a>
            <a
              href="#about"
              className="glass-button px-8 py-4 bg-white/80 text-black-800 font-medium rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 transform border-2 border-green-300"
            >
              Learn More
            </a>
          </motion.div>


        </div>

        {/* Avatar section removed */}
      </div>

      {/* Back to top link - Same as other sections */}
      <div className="fixed right-10 top-1/2 transform -translate-y-1/2 rotate-90 origin-right text-sm text-gray-500 hover:text-gray-800 transition-colors z-50">
        <a href="#" className="flex items-center">
          BACK TO TOP
        </a>
      </div>
    </section>
  );
};

export default Hero;
