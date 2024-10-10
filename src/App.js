import React, { useState, useEffect, useRef } from 'react';

import { motion, AnimatePresence } from 'framer-motion';
import { Header, } from '@mnfst-kit/shared-components';
import { FullScreenSection } from '@mnfst-kit/shared-components'
import { HeroV2 } from '@mnfst-kit/shared-components'
import { ConsultationSection } from '@mnfst-kit/shared-components'
import { SimpleCategoryCard } from '@mnfst-kit/shared-components';
import { Testimonial } from '@mnfst-kit/shared-components';
import { StatsBanner } from '@mnfst-kit/shared-components';
import { Footer } from '@mnfst-kit/shared-components';
import HeroVanta from './components/HeroVanta';
import TechLoader from './components/TechLoader';


import { Button, Logo } from '@mnfst-kit/shared-components';
import { Timeline } from './components/Timeline';

import './App.css';

import { FaLock, FaRocket, FaMoneyBillWave, FaHandshake, FaSearch, FaTools } from 'react-icons/fa';

const headerContent = {
  logoElement: <Logo title="MNFST" className="h-8" />, // Assuming you have a Logo component
  navItems: [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Services', url: '/services' },
    { text: 'Contact', url: '/contact' },
  ],
  extraElement: (
    <Button
      title="Get Started"
      onClick={() => console.log('Get Started clicked')}
      className="bg-gray-900-500 hover:bg-gray-900-600 text-white"
    />
  ),
};


const footerContent = {
  logo: '/path/to/your/logo.png',
  description: 'MNFST is a leading provider of SaaS development solutions, helping businesses transform their ideas into powerful software applications.',
  links: [
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Services', url: '/services' },
    { text: 'Contact', url: '/contact' },
  ],
  socialLinks: [
    { platform: 'facebook', url: 'https://facebook.com/mnfst' },
    { platform: 'twitter', url: 'https://twitter.com/mnfst' },
    { platform: 'instagram', url: 'https://instagram.com/mnfst' },
    { platform: 'linkedin', url: 'https://linkedin.com/company/mnfst' },
  ],
  copyrightText: '© 2023 MNFST. All rights reserved.',
};

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
        <motion.div
          className="min-h-screen bg-gray-900/50 text-white flex flex-col justify-center items-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-bold mb-6">MNFST</h1>
          <p className="text-xl mb-8 max-w-2xl text-center">
            At MNFST, we believe that building software is the power of manifesting a digital vision. We transform your ideas into reality, blending cutting-edge technology with innovative design to create impactful digital solutions that resonate with your audience and drive your business forward.
          </p>
        </motion.div>
      ),
    },
    // {
    //   title: "Visionary Approach",
    //   content: (
    //     <motion.div
    //       className="min-h-screen bg-gray-900/50 text-white flex flex-col justify-center items-center p-8"
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 1 }}
    //     >
    //       <h2 className="text-4xl font-bold mb-6">Visionary Approach</h2>
    //       <p className="text-xl mb-8 max-w-2xl text-center">
    //         We see beyond code, crafting digital experiences that resonate with your audience. Our visionary approach combines foresight, creativity, and technical expertise to build solutions that not only meet your current needs but also anticipate future trends and opportunities.
    //       </p>
    //     </motion.div>
    //   ),
    // },
    // {
    //   title: "Spiritual Tech",
    //   content: (
    //     <motion.div
    //       className="min-h-screen bg-gray-900/50 text-white flex flex-col justify-center items-center p-8"
    //       initial={{ opacity: 0 }}
    //       animate={{ opacity: 1 }}
    //       transition={{ duration: 1 }}
    //     >
    //       <h2 className="text-4xl font-bold mb-6">Spiritual Tech</h2>
    //       <p className="text-xl mb-8 max-w-2xl text-center">
    //         Merging the digital realm with mindful intention, we create truly impactful solutions. Our spiritual tech approach infuses your digital presence with purpose, authenticity, and a deeper connection to your users, fostering meaningful engagement and lasting impact.
    //       </p>
    //     </motion.div>
    //   ),
    // },
    {
      title: "What We Do",
      content: (
        <motion.div className="min-h-screen bg-gray-900/50 opacity-80 text-white flex flex-col justify-center items-center p-8">
          <h2 className="text-4xl font-bold mb-12">Crafting Digital Excellence</h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl">
            <motion.div className="bg-gray-900 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
              <img src="https://images.unsplash.com/photo-1526925539332-aa3b66e35444?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1065&q=80" alt="Mobile First" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-semibold mb-2">Mobile First Websites</h3>
              <p>We prioritize mobile experiences, ensuring your site looks great on all devices.</p>
            </motion.div>
            <motion.div className="bg-gray-900 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
              <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80" alt="Custom Code" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-semibold mb-2">Custom Code</h3>
              <p>Tailored solutions built from the ground up to meet your unique needs.</p>
            </motion.div>
            <motion.div className="bg-gray-900 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" alt="Optimized PageSpeed" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-semibold mb-2">Optimized PageSpeed</h3>
              <p>Lightning-fast websites that keep your visitors engaged and improve SEO.</p>
            </motion.div>
            <motion.div className="bg-gray-900 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
              <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80" alt="Clear Design" className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-2xl font-semibold mb-2">Clear Design</h3>
              <p>Intuitive and visually appealing interfaces that enhance user experience.</p>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "What We Offer",
      content: (
        <motion.div className="min-h-screen bg-gray-900/50 opacity-80 text-white flex flex-col justify-center items-center p-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Commitment to Excellence</h2>
          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
            {[
              { title: "100% Secure Websites", icon: FaLock, description: "We ensure your website is protected against threats." },
              { title: "100 PageSpeed Scores", icon: FaRocket, description: "Lightning-fast websites that keep your visitors engaged." },
              { title: "Money Back Guarantee", icon: FaMoneyBillWave, description: "We're confident in our work - satisfaction guaranteed." },
              { title: "Unmatched Support", icon: FaHandshake, description: "We're here for you every step of the way." },
              { title: "We Know SEO", icon: FaSearch, description: "Boost your visibility and reach more customers." },
              { title: "Custom Solutions", icon: FaTools, description: "Tailored websites that fit your unique needs." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-lg overflow-hidden shadow-lg flex flex-col p-6 transition-all duration-300  hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-full mr-4">
                    <item.icon className="text-2xl text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                <p className="mb-4 text-left">{item.description}</p>
                <motion.div className="mt-auto relative">
                  <motion.a
                    href="#contact"
                    className="text-sm text-white hover:text-gray-900 transition-colors duration-300 font-bold underline relative inline-block py-1 px-2 z-50"
                    whileHover="hover"
                    onClick={(e) => {
                      e.preventDefault();
                      const contactSection = document.querySelector('[data-section="Get in Touch"]');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    <span className="relative z-10">Get Started</span>
                    <motion.span
                      className="absolute inset-0 bg-white rounded-sm"
                      initial={{ scaleY: 0, originY: 1 }}
                      variants={{
                        hover: {
                          scaleY: 1,
                          transition: { duration: 0.3, ease: "easeInOut" }
                        }
                      }}
                    />
                  </motion.a>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "Performance",
      content: (
        <motion.div className="min-h-screen bg-gray-900/50 opacity-80 text-white flex flex-col justify-center items-center p-8">
          <h2 className="text-4xl font-bold mb-8">We Build Better Websites That Perform</h2>
          <p className="text-xl mb-8 max-w-2xl text-center">
            When it comes to website load times, not very many can get the Google PageSpeed scores that we get with each and every site. Test your website load times with Google PageSpeed Insights and see what your current site is scoring right now.
          </p>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            <motion.div className="bg-gray-900 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80" alt="Better Load Times" className="w-full h-48 object-cover mb-4 rounded" />
              <p>Better load times means more traffic and more site conversions over time.</p>
            </motion.div>
            <motion.div className="bg-gray-900 p-6 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
              <img src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80" alt="SEO Improvement" className="w-full h-48 object-cover mb-4 rounded" />
              <p>Faster websites can help improve SEO and your Google ads performance.</p>
            </motion.div>
          </motion.div>
          <motion.div className="bg-gray-900 p-6 rounded-lg shadow-lg mt-8 max-w-4xl" whileHover={{ scale: 1.05 }}>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Instant Load" className="w-full h-48 object-cover mb-4 rounded" />
            <p>Our sites load instantly in under 1 second or less, which leads to a better user experience and conversions.</p>
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "Our Process",
      content: (
        <motion.div
          className="min-h-screen bg-gray-900/50 opacity-80 text-white flex flex-col justify-center items-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-8">The MNFST Journey</h2>
          <motion.div
            className="mnfst-journey"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.2 }}
          >
            {["Envision", "Align", "Create", "Optimize", "Launch"].map((step, index) => (
              <React.Fragment key={step}>
                <motion.div
                  className="journey-step"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <div className="step-content">
                    <h3 className="text-2xl font-semibold">{step}</h3>
                    <p>{getStepDescription(step)}</p>
                  </div>
                </motion.div>
                {index < 4 && <div className="journey-arrow"></div>}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "Pricing",
      content: (
        <motion.div
          data-section="Pricing"
          className="min-h-screen bg-gray-900/50 opacity-80 text-white flex flex-col justify-center items-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-8">Invest in Your Digital Manifestation</h2>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, staggerChildren: 0.2 }}
          >
            <motion.div className="bg-gray-900 p-8 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
              <h3 className="text-3xl font-semibold mb-4">Monthly Plan</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>$0 Down</li>
                <li>$200 per month</li>
                <li>Ongoing support and updates</li>
              </ul>
              <button className="bg-white text-gray-900 font-bold py-2 px-4 rounded w-full">
                Get Started
              </button>
            </motion.div>
            <motion.div className="bg-gray-900 p-8 rounded-lg shadow-lg" whileHover={{ scale: 1.05 }}>
              <h3 className="text-3xl font-semibold mb-4">One-Time Payment</h3>
              <ul className="list-disc list-inside space-y-2 mb-6">
                <li>Custom quote based on project scope</li>
                <li>Full ownership upon completion</li>
                <li>30 days of post-launch support</li>
              </ul>
              <button className="bg-white text-gray-900 font-bold py-2 px-4 rounded w-full">
                Get Started
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      ),
    },
    {
      title: "Get in Touch",
      content: (
        <motion.div
          data-section="Get in Touch"
          className="min-h-screen bg-gray-900/50 opacity-80 text-white flex flex-col justify-center items-center p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold mb-8">Let's Manifest Your Vision</h2>
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

  return (
    <div className="app h-screen w-full bg-gray-950">
      <TechLoader />

      <div className='h-[2px] w-screen bg-gray-500'> </div>

      <div className='snap-start w-full h-full bg-gray-950'>
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}

export default App;