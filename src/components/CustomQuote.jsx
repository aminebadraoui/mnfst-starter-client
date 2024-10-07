import React from 'react';
import { motion } from 'framer-motion';

function ConsultationForm() {
    return (
        <section id="consultation" className="bg-gray-100 flex items-center justify-center py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Request a Consultation</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2">
                        <motion.div
                            className="relative pb-[56.25%] rounded-lg shadow-lg overflow-hidden"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                                alt="Consultation"
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </motion.div>
                    </div>
                    <div className="w-full md:w-1/2">
                        <form className="bg-white rounded-lg shadow-lg p-8">
                            <div className="mb-4">
                                <input type="text" placeholder="Your Name" required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                            </div>
                            <div className="mb-4">
                                <input type="email" placeholder="Your Email" required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500" />
                            </div>
                            <div className="mb-4">
                                <textarea placeholder="Tell us about your SaaS idea" required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md transition duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Request Consultation
                            </motion.button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ConsultationForm;