import React from 'react';

function EcomCategories() {
    const ecomCategories = [
        { name: 'Ready-made Furniture', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80' },
        { name: 'Home Decor', image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
        { name: 'Kitchen Accessories', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
        { name: 'Outdoor Items', image: 'https://images.unsplash.com/photo-1600240644455-3edc55c375fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80' },
    ];

    return (
        <section id="ecom-categories" className="bg-gray-100 flex flex-col items-center justify-center pt-20 pb-4 px-20 border">
            <h2 className="text-3xl font-bold m-6 text-center text-gray-800">Shop Our Collection</h2>
            <div className="w-full  m-6 flex-grow">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 auto-rows-fr">
                    {ecomCategories.map((category, index) => (
                        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg flex flex-col">
                            <div className="h-48 overflow-hidden">
                                <img src={category.image} alt={category.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-4 flex flex-col justify-between flex-grow">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800">{category.name}</h3>
                                <a href="#" className="bg-yellow-600 text-white font-bold py-2 px-4 rounded-md transition duration-300 inline-block hover:bg-yellow-700 text-center mt-2">
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EcomCategories;