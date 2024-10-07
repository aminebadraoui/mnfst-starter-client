import React from 'react';
import { motion } from 'framer-motion';

function StatsBanner() {
    const stats = [
        { value: 50, label: 'SaaS Launched' },
        { value: 98, label: 'Satisfied Clients' },
        { value: 5, label: 'Years of Experience' },
        { value: 24, label: 'Team Members' }
    ];

    return (
        <section className="bg-gray-900 text-white py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-around items-center">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={index}
                            className="text-center mb-8 w-1/2 sm:w-1/4"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <motion.h2
                                className="text-4xl font-bold mb-1"
                                initial={{ value: 0 }}
                                whileInView={{ value: stat.value }}
                                transition={{ duration: 2, delay: index * 0.1 }}
                            >
                                {Math.round(stat.value)}
                            </motion.h2>
                            <p className="text-xs uppercase tracking-wider">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default StatsBanner;