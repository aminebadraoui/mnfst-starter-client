import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

function Hero() {
    const scrollToNextSection = () => {
        const nextSection = document.querySelector('.snap-start:nth-child(2)');
        if (nextSection) {
            nextSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative h-screen bg-gray-900 text-white flex items-center justify-center">
            <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('/hero_image.jpg')` }}></div>
            <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
            <div className="relative z-20 text-center">
                <h1 className="text-6xl font-bold mb-4">TSALCO Woodworks</h1>
                <p className="text-2xl mb-8">Crafting Excellence Since 1985</p>
                <a href="#categories" className="bg-yellow-600 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 inline-block hover:bg-yellow-700">
                    Explore Our Work
                </a>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-50 text-4xl animate-bounce cursor-pointer z-20" onClick={scrollToNextSection}>
                <FaChevronDown />
            </div>
        </section>
    );
}

export default Hero;