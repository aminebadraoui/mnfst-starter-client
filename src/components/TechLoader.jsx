import React, { useState, useEffect } from 'react';
import './TechLoader.css';

import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const scrollToNextSection = () => {
    const nextSection = document.querySelector('.snap-start:nth-child(2)');
    if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    }
};

const corners = [
    { top: '40px', left: '10%' },
    { bottom: '40px', right: '20%' },
    { top: '50%', left: '20%' },
    { top: '40px', right: '140px' },
    { top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }
];

const TechLoader = () => {
    const messages = [
        "CHANNELING", "POSITIVE", "ENERGY",
        "VISUALIZING", "YOUR INTENTIONS",
        "MATERIALIZING", "YOUR THOUGHTS",
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {

            setCurrentMessageIndex(prevIndex => (prevIndex + 1) % messages.length);

        }, 2500);

        return () => clearTimeout(timer);
    }, [currentMessageIndex, messages.length]);

    return (
        <div className="tech-loader">
            <div className="tesseract-container">
                <div className="tesseract">
                    <div className="cube outer-cube">
                        <div className="face front"></div>
                        <div className="face back"></div>
                        <div className="face right"></div>
                        <div className="face left"></div>
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                    </div>
                    <div className="cube inner-cube">
                        <div className="face front"></div>
                        <div className="face back"></div>
                        <div className="face right"></div>
                        <div className="face left"></div>
                        <div className="face top"></div>
                        <div className="face bottom"></div>
                    </div>
                    <div className="connectors">
                        <div className="connector c1"></div>
                        <div className="connector c2"></div>
                        <div className="connector c3"></div>
                        <div className="connector c4"></div>
                        <div className="connector c5"></div>
                        <div className="connector c6"></div>
                        <div className="connector c7"></div>
                        <div className="connector c8"></div>
                    </div>
                </div>
            </div>
            <div
                key={currentMessageIndex} // Add this line
                className="message-container"
                style={corners[currentMessageIndex % corners.length]}
            >
                <p className="message-text typing-animation">
                    {messages[currentMessageIndex]}
                </p>
            </div>

            <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-50 text-4xl cursor-pointer z-20"
                onClick={scrollToNextSection}
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <FaChevronDown />
            </motion.div>
        </div>
    );
};

export default TechLoader;