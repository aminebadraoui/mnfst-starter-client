import React from 'react';
import { motion } from 'framer-motion';

function CodeTemplates() {
    const templates = [
        { name: 'User Authentication', image: 'https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
        { name: 'Payment Integration', image: 'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
        { name: 'API Development', image: 'https://images.unsplash.com/photo-1623282033815-40b05d96c903?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
        { name: 'Dashboard UI', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    ];

    return (
        <section id="code-templates" className="bg-gray-100 flex flex-col items-center justify-center py-20 px-20 border">
            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Code Templates</h2>
            <p className="text-xl mb-12 text-center text-gray-600">Jump-start your SaaS development with our ready-to-use solutions</p>
            <div className="w-full m-6 flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
                    {templates.map((template, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="h-48 overflow-hidden">
                                <img src={template.image} alt={template.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{template.name}</h3>
                                <a href="#" className="bg-yellow-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 inline-block hover:bg-yellow-700 text-center mt-2">
                                    View Template
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default CodeTemplates;