import React, { useContext, useEffect, useState } from 'react';
import Title from './Title';
import { ShopContext } from '../context/ShopContext';
import ProductItem from './ProductItem';

const BestSeller = () => {
    const [bestSeller, setBestSeller] = useState([]);
    const { products } = useContext(ShopContext);

    useEffect(() => {
        const bestProduct = products.filter((item) => (item.bestseller));
        setBestSeller(bestProduct.slice(0, 5));
    }, [products]);

    return (
        <div className="relative my-10">
            <style jsx>{`
                @keyframes gradientChange {
                    0% {
                        background: linear-gradient(45deg, 
                            rgba(79, 70, 229, 5), 
                            rgba(59, 130, 246, 5)
                        );
                    }
                    25% {
                        background: linear-gradient(45deg, 
                            rgba(124, 58, 237, 5), 
                            rgba(219, 39, 119, 5)
                        );
                    }
                    50% {
                        background: linear-gradient(45deg, 
                            rgba(5, 150, 105, 5), 
                            rgba(14, 165, 233, 5)
                        );
                    }
                    75% {
                        background: linear-gradient(45deg, 
                            rgba(217, 70, 239, 5), 
                            rgba(245, 158, 11, 5)
                        );
                    }
                    100% {
                        background: linear-gradient(45deg, 
                            rgba(79, 70, 229, 5), 
                            rgba(59, 130, 246, 5)
                        );
                    }
                }

                .gradient-background {
                    position: absolute;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    animation: gradientChange 8s linear infinite;
                    transition: background 0.5s ease;
                }

                /* Optionally, to ensure a smooth transition when the gradient is being changed */
                .gradient-background:hover {
                    animation: gradientChange 8s linear infinite;
                }
            `}</style>

            {/* Animated gradient background */}
            <div className="gradient-background" aria-hidden="true" />

            <div className="relative z-10">
                <div className="text-center text-3xl py-8">
                    <Title text1={"BEST"} text2={"SELLERS"} />
                    <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the.
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
                    {bestSeller.map((item, index) => (
                        <ProductItem 
                            key={index} 
                            id={item._id} 
                            image={item.image} 
                            name={item.name} 
                            price={item.price} 
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BestSeller;
