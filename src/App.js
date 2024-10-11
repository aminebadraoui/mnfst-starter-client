import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechLoader from './components/TechLoader';
import { Timeline } from './components/Timeline';

import './App.css';

import { FaLock, FaRocket, FaMoneyBillWave, FaHandshake, FaSearch, FaTools, FaPaintBrush } from 'react-icons/fa';


function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [showTechLoader, setShowTechLoader] = useState(true);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        setIsHeaderVisible(!entry.isIntersecting);
        if (!entry.isIntersecting) {
          // When we've scrolled past the TechLoader, set showTechLoader to false
          setShowTechLoader(false);
        }

      });
    }, options);

    const techLoaderElement = document.querySelector('.tech-loader-container');
    if (techLoaderElement) {
      observer.observe(techLoaderElement);
    }

    return () => {
      if (techLoaderElement) {
        observer.unobserve(techLoaderElement);
      }
    };
  }, []);

  const timelineData = [
    {
      title: "Who We Are",
      content: (

        <motion.div className="snap-start min-h-screen bg-gray-900/50 text-white flex flex-col items-center justify-center p-8">
          <motion.h2
            className="text-5xl font-bold text-center relative z-10 mb-16"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            MNFST
          </motion.h2>
          <motion.div className='flex flex-col items-center space-y-12'>
            <motion.div className='w-full max-w-6xl flex flex-row space-x-12 items-center text-center justify-center mb-6'>
              {["MANIFESTORS", "INNOVATORS", "CREATORS",].map((item, index) => (
                <div key={index}
                  className={`w-1/4 text-gradient-to-r from-purple-500 to-indigo-500  p-4  rounded-lg shadow-lg shadow-purple-500/50`}
                  style={{
                    boxShadow: '0 0 0 2px rgba(147, 51, 234, 0.5)',
                    background: 'linear-gradient(to right, rgba(147, 51, 234, 0.1), rgba(79, 70, 229, 0.1))'
                  }}>
                  <h3 className="text-sm text-center">{item}</h3>
                </div>

              ))}
            </motion.div>

            <div className="w-full max-w-6xl space-y-8 mb-6">
              {[
                { title: "MANIFEST", color: "from-purple-500 to-indigo-500" },
                { title: "INNOVATE", color: "from-purple-500 to-indigo-500" },
                { title: "CREATE", color: "from-purple-500 to-indigo-500" },

              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="w-full bg-gray-800/50 p-6 rounded-lg relative overflow-hidden group backdrop-blur-sm"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
                >
                  <div className="flex items-center justify-center space-x-8">

                    <p className="w-2/3 text-center">
                      {item.title === "INNOVATE"
                        ? "We push the boundaries of digital experiences, crafting solutions that stand out in the crowded digital landscape."
                        : item.title === "CREATE"
                          ? "Our team of skilled developers and designers bring your vision to life with precision and creativity."
                          : "We transform ideas into reality, helping you manifest your digital presence and achieve your goals."}
                    </p>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
                </motion.div>
              ))}
            </div>



          </motion.div>



        </motion.div>
      ),
    },
    {
      title: "What We Do",
      content: (
        <motion.div className="snap-start min-h-screen bg-gray-900/50 text-white flex flex-col items-center p-8">
          <div className="flex-1 flex items-center justify-center w-full">
            <motion.h2
              className="text-5xl font-bold text-center relative z-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Crafting Digital Experiences
            </motion.h2>
          </div>
          <div className="flex-1 w-full max-w-6xl">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.2 }}
            >
              {[
                { title: "Custom Solutions", icon: FaTools, description: "Tailored websites that fit your unique needs." },
                { title: "Optimized PageSpeed", icon: FaRocket, description: "Lightning-fast websites that keep your visitors engaged and improve SEO." },
                { title: "Clear Design", icon: FaPaintBrush, description: "Intuitive and visually appealing interfaces that enhance user experience." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 p-8 rounded-lg relative overflow-hidden group backdrop-blur-sm"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
                >
                  <div className="relative z-10">
                    <item.icon className="text-4xl mb-4 text-white" />
                    <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "What We Offer",
      content: (
        <motion.div className="snap-start min-h-screen bg-gray-900/50 text-white flex flex-col items-center p-8">
          <div className="flex-1 flex items-center justify-center w-full">
            <motion.h2
              className="text-5xl font-bold text-center relative z-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Our Promises
            </motion.h2>
          </div>
          <div className="flex-1 w-full max-w-6xl">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.2 }}
            >
              {[
                { title: "100% Secure Websites", icon: FaLock, description: "We ensure your website is protected against threats." },
                { title: "Unmatched Support", icon: FaHandshake, description: "We provide unmatched support to ensure your website runs smoothly." },
                { title: "Money Back Guarantee", icon: FaMoneyBillWave, description: "We offer a money back guarantee if you're not satisfied." },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-800/50 p-8 rounded-lg relative overflow-hidden group backdrop-blur-sm"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
                >
                  <div className="relative z-10">
                    <item.icon className="text-4xl mb-4 text-white" />
                    <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Our Process",
      content: (
        <motion.div
          className="snap-start min-h-screen bg-gray-900/50 opacity-80 text-white flex flex-col space-y-12 justify-center items-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <div className="flex-1 flex items-center justify-center w-full">
            <motion.h2
              className="text-5xl font-bold text-center relative z-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              The MNFST Journey
            </motion.h2>
          </div>



          <motion.div
            className="mnfst-journey"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.2 }}
          >
            {["Envision", "Align", "Create", "Optimize", "Launch"].map((step, index) => (
              <motion.div key={step}
                className='w-full flex flex-col items-center'
                initial={{ opacity: 0, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ amount: 0.3 }}
                transition={{ duration: 2, delay: index * 0.3 }}>

                <React.Fragment key={step}>
                  <motion.div
                    className="journey-step"
                  >
                    <div className="step-content">
                      <h3 className="text-2xl font-semibold">{step}</h3>
                      <p>{getStepDescription(step)}</p>
                    </div>
                  </motion.div>
                  {index < 4 && <div className="journey-arrow"></div>}
                </React.Fragment>

              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "Pricing",
      content: (
        <motion.div className="snap-start min-h-screen bg-gray-900/50 text-white flex flex-col items-center p-8">
          <div className="flex-1 flex items-center justify-center w-full">
            <motion.h2
              className="text-5xl font-bold text-center relative z-10"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Invest in Your Digital Future
            </motion.h2>
          </div>
          <div className="flex-1 w-full max-w-6xl">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.2 }}
            >
              {["One-Time Payment", "Monthly Plan"].map((plan, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-900 p-8 rounded-lg shadow-lg relative overflow-hidden group"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-indigo-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <h3 className="text-3xl font-semibold mb-4">{plan}</h3>
                    <ul className="list-disc list-inside space-y-2 mb-6">
                      {plan === "Monthly Plan" ? (
                        <>
                          <li>$0 Down</li>
                          <li>$200 per month</li>
                          <li>Ongoing support and updates</li>
                        </>
                      ) : (
                        <>
                          <li>Custom quote based on project scope</li>
                          <li>Full ownership upon completion</li>
                          <li>30 days of post-launch support</li>
                        </>
                      )}
                    </ul>
                    <button className="bg-white text-gray-900 font-bold py-2 px-4 rounded w-full">
                      Get Started
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Get in Touch",
      content: (
        <motion.div
          data-section="Get in Touch"
          className="snap-start min-h-screen bg-gray-900/50 opacity-80 text-white flex flex-col items-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="flex-1 flex items-center justify-center w-full">
            <h2 className="text-4xl font-bold text-center">Let's Manifest Your Vision</h2>
          </div>
          <div className="flex-1 w-full max-w-lg">
            <motion.form
              className="w-full max-w-lg"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <motion.input
                    className="appearance-none block w-full bg-gray-900 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
                    type="text"
                    placeholder="Name"
                    whileFocus={{ scale: 1.0 }}
                  />
                </div>
                <div className="w-full md:w-1/2 px-3">
                  <motion.input
                    className="appearance-none block w-full bg-gray-900 text-white border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
                    type="email"
                    placeholder="Email"
                    whileFocus={{ scale: 1.0 }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <motion.input
                    className="appearance-none block w-full bg-gray-900 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
                    type="tel"
                    placeholder="Phone"
                    whileFocus={{ scale: 1.05 }}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <motion.textarea
                    className="appearance-none block w-full bg-gray-900 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600 h-48 resize-none"
                    placeholder="Your Message"
                    whileFocus={{ scale: 1.0 }}
                  ></motion.textarea>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <motion.button
                    className="bg-white text-gray-900 font-bold py-2 px-4 rounded w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                  >
                    Send Message
                  </motion.button>
                </div>
              </div>
            </motion.form>
          </div>
        </motion.div>
      ),
    },
  ];

  // Helper function for step descriptions
  function getStepDescription(step) {
    const descriptions = {
      Envision: "We deeply understand your vision and intentions.",
      Align: "Your goals are aligned with the latest web technologies.",
      Create: "We craft your digital solution with precision and care.",
      Optimize: "Your project is fine-tuned for peak performance and user experience.",
      Launch: "Your vision manifests into the digital realm."
    };
    return descriptions[step];
  }

  const containerRef = useRef(null);
  const [isContainerReady, setIsContainerReady] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      setIsContainerReady(true);
    }
  }, []);

  return (
    <div ref={containerRef} className="app h-screen w-full bg-gray-950 snap-y overflow-y-scroll">
      <div className="snap-start">
        <TechLoader />
      </div>

      <div className='h-[2px] w-screen bg-gray-500'> </div>

      <div className='w-full h-full bg-gray-950 '>
        {isContainerReady && <Timeline data={timelineData} containerRef={containerRef} />}
      </div>
    </div>
  );
}
export default App;