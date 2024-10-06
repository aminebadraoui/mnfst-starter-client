import React from 'react';
import Header from './components/Header';
import FullScreenSection from './components/FullScreenSection';
import Hero from './components/Hero';
import { FaChevronDown } from 'react-icons/fa';
import CustomQuote from './components/CustomQuote';
import EcomCategories from './components/EcomCategories';
import Testimonial from './components/Testimonial';
import StatsBanner from './components/StatsBanner';
import Footer from './components/Footer';

const categories = [
  {
    title: 'Custom Furniture',
    subtitle: 'Bespoke pieces tailored to your style',
    image: 'https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageOnLeft: true
  },
  {
    title: 'Kitchen Cabinetry',
    subtitle: 'Functional and stylish storage solutions',
    image: 'https://images.pexels.com/photos/3214064/pexels-photo-3214064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageOnLeft: false
  },
  {
    title: 'Wooden Flooring',
    subtitle: 'Durable and elegant flooring options',
    image: 'https://images.pexels.com/photos/5089153/pexels-photo-5089153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageOnLeft: true
  },
  {
    title: 'Outdoor Woodwork',
    subtitle: 'Enhance your outdoor living spaces',
    image: 'https://images.pexels.com/photos/5997993/pexels-photo-5997993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    imageOnLeft: false
  },
  {
    title: 'Wooden Accessories',
    subtitle: 'Small touches for a big impact',
    image: 'https://images.pexels.com/photos/4846455/pexels-photo-4846455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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

        <div className="snap-start">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;