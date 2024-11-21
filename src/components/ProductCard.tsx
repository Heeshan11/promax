import { FaWhatsapp } from 'react-icons/fa';
import { bio } from '../data/constants';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import { useState, useEffect } from 'react';

const ProductCard = ({ products }) => {
    const phoneNumber = bio.phone; // WhatsApp number for sharing
    const itemVariants = {
        hidden: { opacity: 0, y: 50 }, // Initial state (hidden)
        visible: { opacity: 1, y: 0 },   // Final state (visible)
    };

    // Handle "See More" button click
    return (
        <div>
            {/* Render Product Cards */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container mx-auto py-6 px-6">
                {products.map((product: any, index: number) => {
                    const { image, title, desc, category, id } = product;
                    const whatsappMessage = `Check out this product: ${title}\nCategory: ${category}\nImage: ${window.location.origin}${image}`;
                    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                    return (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                delay: (index % 10) * 0.2,
                            }}
                        >
                            <div>
                                <div className="bg-white rounded-lg shadow-lg text-center">
                                    <img
                                        src={image}
                                        alt={title}
                                        width={300}
                                        height={200}
                                        className="rounded-t-lg object-cover h-40"
                                    />
                                    <div className="p-4">
                                        <h1 className="text-2xl font-semibold">{title}</h1>
                                        <p className="text-sm text-gray-500">{desc}</p>
                                        <div className="mt-4">
                                            <a
                                                href={whatsappLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex justify-center items-center space-x-2 p-2"
                                            >
                                                <FaWhatsapp color="#25D366" size={24} />
                                                <span className="text-sm">Share on WhatsApp</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>

            {/* See More Button */}

        </div>
    );
};

export default ProductCard;
