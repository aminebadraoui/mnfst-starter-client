import React from 'react';

function StatsBanner() {
    return (
        <section className="bg-gray-900 text-white py-6">
            <div className="container mx-auto px-4">
                <div className="flex justify-around items-center">
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-1">1520</h2>
                        <p className="text-xs uppercase tracking-wider">Projects Completed</p>
                    </div>
                    <div className="text-center">
                        <h2 className="text-4xl font-bold mb-1">0</h2>
                        <p className="text-xs uppercase tracking-wider">Fingers Cut Off</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StatsBanner;