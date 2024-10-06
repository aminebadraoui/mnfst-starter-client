import React from 'react';

function Categories() {
    const categories = [
        { name: 'Dining Tables', image: 'https://images.unsplash.com/photo-1530018607912-eff2daa1bac4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80' },
        { name: 'Chairs', image: 'https://images.unsplash.com/photo-1549497538-303791108f95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80' },
        { name: 'Cabinets', image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80' },
        { name: 'Custom Projects', image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    ];

    return (
        <section id="categories" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 text-center">Our Categories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {categories.map((category, index) => (
                        <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md">
                            <img src={category.image} alt={category.name} className="w-full h-48 object-cover" />
                            <h3 className="text-xl font-semibold p-4">{category.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Categories;