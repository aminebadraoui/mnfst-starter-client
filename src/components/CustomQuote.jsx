import React from 'react';

function CustomQuote() {
    return (
        <section id="custom-quote" className="bg-gray-100 flex items-center justify-center py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Request a Custom Quote</h2>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-1/2">
                        <div className="relative pb-[56.25%] rounded-lg shadow-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                                alt="Custom woodworking"
                                className="absolute top-0 left-0 w-full h-full object-cover"
                            />
                        </div>
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
                                <textarea placeholder="Describe your project" required
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 h-32"></textarea>
                            </div>
                            <button type="submit"
                                className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                                Send Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CustomQuote;