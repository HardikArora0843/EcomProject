import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const [latestProducts, setLatestProducts] = useState([]);
    const { products } = useContext(ShopContext);
    const [colorIndex, setColorIndex] = useState(0);

    // Predefined color combinations for the neon effect
    const colorSchemes = [
        ['from-blue-500 to-purple-500', 'from-purple-500 to-pink-500'],
        ['from-green-500 to-teal-500', 'from-teal-500 to-cyan-500'],
        ['from-red-500 to-orange-500', 'from-orange-500 to-yellow-500'],
        ['from-indigo-500 to-violet-500', 'from-violet-500 to-fuchsia-500']
    ];

    useEffect(() => {
        if (products.length > 0) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]);

    // Color rotation effect
    useEffect(() => {
        const intervalId = setInterval(() => {
            setColorIndex((prevIndex) => (prevIndex + 1) % colorSchemes.length);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const currentColors = colorSchemes[colorIndex];

    return (
        <div className="my-10 bg-gradient-to-r from-slate-950 to-crimson-500">
            <div className="text-center py-8">
                <div className="relative flex flex-col items-center justify-center mb-6">
                    {/* Enhanced neon title with dynamic color changes */}
                    <h2 className="text-4xl font-bold relative">
                        <span className="relative z-10 transition-colors duration-500 ease-in-out">
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentColors[0]}`}>
                                LATEST
                            </span>
                            {" "}
                            <span className={`text-transparent bg-clip-text bg-gradient-to-r ${currentColors[1]}`}>
                                COLLECTIONS
                            </span>
                        </span>
                        
                        {/* Dynamic glow effects */}
                        <span className={`absolute inset-0 blur-md bg-gradient-to-r ${currentColors[0]} opacity-50 transition-colors duration-500 ease-in-out`} />
                        <span className={`absolute inset-0 blur-lg bg-gradient-to-r ${currentColors[1]} opacity-30 transition-colors duration-500 ease-in-out`} />
                        
                        {/* Additional floating glow orbs */}
                        <span className={`absolute -left-4 top-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${currentColors[0]} blur-sm animate-ping`} />
                        <span className={`absolute -right-4 top-1/2 w-2 h-2 rounded-full bg-gradient-to-r ${currentColors[1]} blur-sm animate-ping`} />
                    </h2>
                </div>

                <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-300 transition-all duration-300 hover:text-gray-100">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
            </div>

            {/* Products grid with enhanced hover effects */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 animate-fadeIn">
                {latestProducts.map((item, index) => (
                    <div 
                        key={index}
                        className={`transform transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${currentColors[0].split('-')[1]} rounded-lg`}
                    >
                        <ProductItem
                            id={item._id}
                            image={item.image}
                            name={item.name}
                            price={item.price}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LatestCollection;