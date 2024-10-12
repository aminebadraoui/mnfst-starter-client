import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import TechLoader from './components/TechLoader';
import { Timeline } from './components/Timeline';
import emailjs from '@emailjs/browser';

import './App.css';

import { FaLock, FaRocket, FaMoneyBillWave, FaHandshake, FaSearch, FaTools, FaPaintBrush } from 'react-icons/fa';


function App() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [showTechLoader, setShowTechLoader] = useState(true);
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const form = useRef();

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


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    setSubmissionStatus('submitting');

    emailjs.sendForm('service_s2hc0vi', 'template_ajbzxee', form.current, {
      publicKey: 'mBk6w-CEod73FbERq',
    })
      .then((result) => {
        console.log('EmailJS success:', result.text);
        setSubmissionStatus('success');
        e.target.reset();
      }, (error) => {
        console.error('EmailJS error:', error.text);
        setSubmissionStatus('error');
      });
  };

  const timelineData = [
    {
      title: " Who We Are",
      content: (
        <motion.div
          className="snap-section min-h-screen bg-gray-900/50 text-white flex flex-col items-center justify-between p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div className='flex-1 flex items-center justify-center w-full'>
            <motion.h2
              className="text-3xl font-bold text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              MNFST
            </motion.h2>
          </motion.div>

          <motion.div className='flex flex-col  w-full items-center space-y-12 flex-1'>
            <motion.div className='flex flex-wrap items-center text-center justify-center'>
              {["MANIFESTORS", "INNOVATORS", "CREATORS"].map((item, index) => (
                <motion.div key={index}
                  whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
                  className={`flex-1 p-4 m-4 rounded-md border-b border-purple-500 shadow-sm`}
                >
                  <h3 className="text-xl font-semibold">{item}</h3>
                </motion.div>
              ))}
            </motion.div>

            <div className="w-full max-w-lg space-y-8 mb-6">
              {[
                { title: "MANIFEST" },
                { title: "INNOVATE" },
                { title: "CREATE" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="w-full bg-gray-800/50 p-6 rounded-lg relative overflow-hidden group"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-center justify-center space-x-8">
                    <p className="w-full text-center">
                      {item.title === "INNOVATE"
                        ? "We push the boundaries of digital experiences, crafting solutions that stand out in the crowded digital landscape."
                        : item.title === "CREATE"
                          ? "Our team of skilled developers and designers bring your vision to life with precision and creativity."
                          : "We transform ideas into reality, helping you manifest your digital presence and achieve your goals."}
                    </p>
                  </div>
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
        <motion.div
          className="snap-section min-h-screen bg-gray-900/50 text-white flex flex-col items-center justify-between p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div className='flex-1 flex items-center justify-center w-full'>
            <motion.h2
              className="text-3xl font-bold text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Crafting Your Digital Vision
            </motion.h2>
          </motion.div>

          <motion.div className='flex flex-col w-full items-center space-y-12 flex-1'>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
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
                  className="bg-gray-800/50 p-6 rounded-lg backdrop-blur-sm flex flex-col items-left justify-start space-4 text-left h-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
                >
                  <item.icon className="text-4xl text-white mb-4" />
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-lg">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    // {
    //   title: "What We Offer",
    //   content: (
    //     <motion.div className="snap-section min-h-screen bg-gray-900/50 text-white flex flex-col items-center space-y-12 p-8">
    //       <motion.div className='snap-section-content flex flex-col items-center space-y-12'>
    //         <motion.h2
    //           className="text-3xl  font-bold text-center relative z-10"
    //           initial={{ opacity: 0, y: -50 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.8 }}
    //         >
    //           Our Promises
    //         </motion.h2>

    //         <div className="w-full max-w-lg">
    //           <motion.div
    //             className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10"
    //             initial={{ opacity: 0 }}
    //             animate={{ opacity: 1 }}
    //             transition={{ delay: 0.5, staggerChildren: 0.2 }}
    //           >
    //             {[
    //               { title: "100% Secure Websites", icon: FaLock, description: "We ensure your website is protected against threats." },
    //               { title: "Unmatched Support", icon: FaHandshake, description: "We provide unmatched support to ensure your website runs smoothly." },
    //               { title: "Money Back Guarantee", icon: FaMoneyBillWave, description: "We offer a money back guarantee if you're not satisfied." },
    //             ].map((item, index) => (
    //               <motion.div
    //                 key={index}
    //                 className="bg-gray-800/50 p-8 rounded-lg relative overflow-hidden group backdrop-blur-sm"
    //                 initial={{ opacity: 0, y: 50 }}
    //                 animate={{ opacity: 1, y: 0 }}
    //                 transition={{ delay: index * 0.2 }}
    //                 whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
    //               >
    //                 <div className="relative z-10">
    //                   <item.icon className="text-3xl mb-4 text-white" />
    //                   <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
    //                   <p>{item.description}</p>
    //                 </div>
    //               </motion.div>
    //             ))}
    //           </motion.div>
    //         </div>
    //       </motion.div>
    //     </motion.div>
    //   ),
    // },
    {
      title: "Our Process",
      content: (
        <motion.div
          className="snap-section min-h-screen bg-gray-900/50 text-white flex flex-col items-center justify-between p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* <motion.div className='flex-1 flex items-center justify-center w-full'>
            <motion.h2
              className="text-3xl font-bold text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              The MNFST Journey
            </motion.h2>
          </motion.div> */}

          <motion.div className='flex flex-col w-full items-center space-y-12 flex-1'>
            <motion.div
              className="mnfst-journey"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, staggerChildren: 0.2 }}
            >
              {["Envision", "Align", "Create", "Optimize", "Launch"].map((step, index) => (
                <motion.div key={step}
                  className='w-full flex flex-col items-center'
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ amount: 0.3 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}>
                  <React.Fragment key={step}>
                    <motion.div className="journey-step">
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
        </motion.div>
      ),
    },
    // {
    //   title: "Pricing",
    //   content: (
    //     <motion.div className="snap-section min-h-screen bg-gray-900/50 text-white flex flex-col items-centers space-y-12 p-8">

    //       <motion.div className='snap-section-content flex flex-col items-center space-y-12'>
    //         <motion.h2
    //           className="text-3xl  font-bold text-center relative z-10"
    //           initial={{ opacity: 0, y: -50 }}
    //           animate={{ opacity: 1, y: 0 }}
    //           transition={{ duration: 0.8 }}
    //         >
    //           Invest in Your Digital Future
    //         </motion.h2>

    //         <div className="flex-1 w-full max-w-lg">
    //           <motion.div
    //             className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl"
    //             initial={{ y: 50, opacity: 0 }}
    //             animate={{ y: 0, opacity: 1 }}
    //             transition={{ delay: 0.5, staggerChildren: 0.2 }}
    //           >
    //             {["One-Time Payment", "Monthly Plan"].map((plan, index) => (
    //               <motion.div
    //                 key={index}
    //                 className="bg-gray-900 p-8 rounded-lg shadow-lg relative overflow-hidden group"
    //                 whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
    //               >
    //                 <div className="absolute inset-0 bg-gradient-to-br from-purple-500/50 to-indigo-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    //                 <div className="relative z-10">
    //                   <h3 className="text-3xl font-semibold mb-4">{plan}</h3>
    //                   <ul className="list-disc list-inside space-y-2 mb-6">
    //                     {plan === "Monthly Plan" ? (
    //                       <>
    //                         <li>$0 Down</li>
    //                         <li>$200 per month</li>
    //                         <li>Ongoing support and updates</li>
    //                       </>
    //                     ) : (
    //                       <>
    //                         <li>Custom quote based on project scope</li>
    //                         <li>Full ownership upon completion</li>
    //                         <li>30 days of post-launch support</li>
    //                       </>
    //                     )}
    //                   </ul>
    //                   <button className="bg-white text-gray-900 font-bold py-2 px-4 rounded w-full">
    //                     Get Started
    //                   </button>
    //                 </div>
    //               </motion.div>
    //             ))}
    //           </motion.div>
    //         </div>

    //       </motion.div>
    //     </motion.div>
    //   ),
    // },
    {
      title: "Get in Touch",
      content: (
        <motion.div
          className="snap-section min-h-screen bg-gray-900/50 text-white flex flex-col items-center justify-between p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div className='flex-1 flex items-center justify-center w-full'>
            <motion.h2
              className="text-3xl font-bold text-center"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Let's Manifest Your Vision
            </motion.h2>
          </motion.div>

          <motion.div className='flex flex-col w-full items-center space-y-12 flex-1'>
            <div className="flex-1 w-full max-w-lg">
              <motion.form
                ref={form}
                className="w-full max-w-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                onSubmit={handleSubmit}
              >
                {submissionStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-green-500 p-4 rounded-lg mb-6"
                  >
                    Message sent successfully! We'll get back to you soon.
                  </motion.div>
                ) : submissionStatus === 'error' ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-red-500 p-4 rounded-lg mb-6"
                  >
                    Failed to send message. Please try again later.
                  </motion.div>
                ) : null}

                {submissionStatus !== 'success' && (
                  <>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <motion.input
                          name="from_name"
                          className="appearance-none block w-full bg-gray-900 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
                          type="text"
                          placeholder="Name"
                          whileFocus={{ scale: 1.0 }}
                          required
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <motion.input
                          name="user_email"
                          className="appearance-none block w-full bg-gray-900 text-white border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-gray-600"
                          type="email"
                          placeholder="Email"
                          whileFocus={{ scale: 1.0 }}
                          required
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <motion.input
                          name="user_phone"
                          className="appearance-none block w-full bg-gray-900 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600"
                          type="tel"
                          placeholder="Phone (optional)"
                          whileFocus={{ scale: 1.05 }}
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <motion.textarea
                          name="message"
                          className="appearance-none block w-full bg-gray-900 text-white border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-600 h-48 resize-none"
                          placeholder="Your Message"
                          whileFocus={{ scale: 1.0 }}
                          required
                        ></motion.textarea>
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <motion.button
                          className="bg-white text-gray-900 font-bold py-2 px-4 rounded w-full"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          type="submit"
                          disabled={submissionStatus === 'submitting'}
                        >
                          {submissionStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                        </motion.button>
                      </div>
                    </div>
                  </>
                )}
              </motion.form>
            </div>
          </motion.div>
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
    <div ref={containerRef} className="app h-screen w-full bg-gray-950 snap-y overflow-y-scroll overflow-x-hidden">

      <div className="snap-section">
        <div className="snap-section-content">
          <TechLoader />
        </div>
      </div>

      <div className='h-[2px] w-screen bg-gray-900'> </div>

      <div className='main-content w-full h-full bg-gray-950 '>
        {isContainerReady && <Timeline data={timelineData} containerRef={containerRef} />}
      </div>
    </div>
  );
}
export default App;