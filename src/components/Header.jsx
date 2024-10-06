import React from 'react';

function Header() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 text-white">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="logo-container">
                    <a href="/" className="text-2xl font-bold">TSALCO</a>
                </div>
                <nav>
                    <ul className="flex space-x-6">
                        <li><a href="#categories" className="hover:text-yellow-500 transition duration-300">Categories</a></li>
                        <li><a href="#custom-quote" className="hover:text-yellow-500 transition duration-300">Custom Quote</a></li>
                        <li><a href="#about" className="hover:text-yellow-500 transition duration-300">About</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;