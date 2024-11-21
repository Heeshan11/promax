import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaWhatsapp } from 'react-icons/fa';
import { bio } from '../data/constants';
import { motion } from "framer-motion";
const ProductCard = ({ products }) => {
    const phoneNumber = bio.phone; // WhatsApp number for sharing
    const itemVariants = {
        hidden: { opacity: 0, y: 50 }, // Initial state (hidden)
        visible: { opacity: 1, y: 0 }, // Final state (visible)
    };
    // Handle "See More" button click
    return (_jsx("div", { children: _jsx("div", { className: "grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container mx-auto py-6 px-6", children: products.map((product, index) => {
                const { image, title, desc, category, id } = product;
                const whatsappMessage = `Check out this product: ${title}\nCategory: ${category}\nImage: ${window.location.origin}${image}`;
                const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                return (_jsx(motion.div, { variants: itemVariants, initial: "hidden", animate: "visible", transition: {
                        type: "spring",
                        stiffness: 100,
                        delay: (index % 10) * 0.2,
                    }, children: _jsx("div", { children: _jsxs("div", { className: "bg-white rounded-lg shadow-lg text-center", children: [_jsx("img", { src: image, alt: title, width: 300, height: 200, className: "rounded-t-lg object-cover h-40" }), _jsxs("div", { className: "p-4", children: [_jsx("h1", { className: "text-2xl font-semibold", children: title }), _jsx("p", { className: "text-sm text-gray-500", children: desc }), _jsx("div", { className: "mt-4", children: _jsxs("a", { href: whatsappLink, target: "_blank", rel: "noopener noreferrer", className: "flex justify-center items-center space-x-2 p-2", children: [_jsx(FaWhatsapp, { color: "#25D366", size: 24 }), _jsx("span", { className: "text-sm", children: "Share on WhatsApp" })] }) })] })] }) }) }, index));
            }) }) }));
};
export default ProductCard;
