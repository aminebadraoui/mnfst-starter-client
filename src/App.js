import React from 'react';
import Header from './components/Header';
import FullScreenSection from './components/FullScreenSection';
import Hero from './components/Hero';
import CustomQuote from './components/CustomQuote';
import EcomCategories from './components/EcomCategories';
import Testimonial from './components/Testimonial';
import StatsBanner from './components/StatsBanner';
import Footer from './components/Footer';

const services = [
  {
    title: 'Custom SaaS Solutions',
    subtitle: 'Turning your ideas into powerful, scalable software',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80',
    imageOnLeft: true
  },
  {
    title: 'Code Templates',
    subtitle: 'Ready-to-use solutions for quick deployment',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imageOnLeft: false
  },
  {
    title: 'Consultation Services',
    subtitle: 'Expert advice to guide your SaaS journey',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imageOnLeft: true
  }
];

function App() {
  return (
    <div className="App">
      <Header />
      <div className="snap-y snap-mandatory h-screen overflow-y-scroll">
        <div className="snap-start h-screen">
          <Hero />
        </div>

        {services.map((service, index) => (
          <div key={index} className="snap-start min-h-screen">
            <FullScreenSection {...service} imageOnLeft={service.imageOnLeft} />
          </div>
        ))}

        <div className="snap-start">
          <EcomCategories />
        </div>

        <div className="snap-start min-h-screen">
          <CustomQuote />
          <StatsBanner />
        </div>

        <div className="snap-start">
          <Testimonial />
        </div>

        <div className="snap-start">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;