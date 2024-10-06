import React from 'react';
import Header from './components/Header';
import FullScreenSection from './components/FullScreenSection';
import Hero from './components/Hero';
import { FaChevronDown } from 'react-icons/fa';
import CustomQuote from './components/CustomQuote';
import EcomCategories from './components/EcomCategories';
import Testimonial from './components/Testimonial';
import StatsBanner from './components/StatsBanner';

const categories = [
  {
    title: 'Custom Furniture',
    subtitle: 'Bespoke pieces tailored to your style',
    image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
    imageOnLeft: true
  },
  {
    title: 'Kitchen Cabinetry',
    subtitle: 'Functional and stylish storage solutions',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imageOnLeft: false
  },
  {
    title: 'Wooden Flooring',
    subtitle: 'Durable and elegant flooring options',
    image: 'https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imageOnLeft: true
  },
  {
    title: 'Outdoor Woodwork',
    subtitle: 'Enhance your outdoor living spaces',
    image: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    imageOnLeft: false
  },
  {
    title: 'Wooden Accessories',
    subtitle: 'Small touches for a big impact',
    image: 'https://images.unsplash.com/photo-1601579112934-17ac2aa86292?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80',
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

        {categories.map((category, index) => (
          <div key={index} className="snap-start min-h-screen bg-blue-500">
            <FullScreenSection {...category} imageOnLeft={index % 2 === 0} />
          </div>
        ))}

        {/* <div className="snap-start min-h-screen">
          <EcomCategories />
        </div> */}



        <div className="snap-start min-h-screen">
          <CustomQuote />

        </div>
        <div className="snap-start">
          <Testimonial />
          <StatsBanner />
        </div>
      </div>
    </div>
  );
}

export default App;