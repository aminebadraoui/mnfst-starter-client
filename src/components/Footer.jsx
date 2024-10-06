import React from 'react';

function Footer() {
    return (
        <footer className="bg-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h2 className="text-xl font-bold mb-4">CONTACT</h2>
                        <button className="border border-black px-4 py-2 hover:bg-black hover:text-white transition duration-300">
                            CONTACT DARREN
                        </button>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">FACEBOOK</h2>
                        <button className="border border-black px-4 py-2 hover:bg-black hover:text-white transition duration-300">
                            FOLLOW AT FACEBOOK
                        </button>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">INSTAGRAM</h2>
                        <button className="border border-black px-4 py-2 hover:bg-black hover:text-white transition duration-300">
                            VISIT INSTAGRAM
                        </button>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold mb-4">SHOP</h2>
                        <p>12 Kondelin Road</p>
                        <p>Unit #1</p>
                        <p>Gloucester, MA 01930</p>
                        <p>(978) 879-8441</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;