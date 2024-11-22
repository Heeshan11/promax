import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaWhatsapp } from 'react-icons/fa';
import { bio } from '../data/constants';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
const ProductCard = ({ products }) => {
    const phoneNumber = bio.phone; // WhatsApp number for sharing
    const itemVariants = {
        hidden: { opacity: 0, y: 50 }, // Initial state (hidden)
        visible: { opacity: 1, y: 0 }, // Final state (visible)
    };
    return (_jsx("div", { children: _jsx("div", { className: "grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 container mx-auto py-6 px-6", children: products.map((product, index) => {
                const { image, id, uid, category } = product;
                const productUrl = `https://promax-oid0.onrender.com/product/${product.uid}`;
                // Generate the WhatsApp message
                const whatsappMessage = `Hey!,
I need this product, please share more details.
${productUrl}
                     `;
                // Generate the WhatsApp link
                const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
                return (_jsxs(motion.div, { variants: itemVariants, initial: "hidden", animate: "visible", transition: {
                        type: "spring",
                        stiffness: 100,
                        delay: (index % 10) * 0.2,
                    }, className: 'bg-white rounded-lg shadow-lg text-center', children: [_jsx(Link, { to: `/product/${id}`, state: { title: product.uid, category: product.category }, className: "block ", children: _jsx("div", { className: "", children: _jsx("img", { src: image, alt: "title", width: 300, height: 200, className: "rounded-t-lg object-cover h-40" }) }) }), _jsx("div", { className: "mt-4 text-center", children: _jsxs("a", { href: whatsappLink, target: "_blank", rel: "noopener noreferrer", className: "flex justify-center items-center space-x-2 p-2", children: [_jsx(FaWhatsapp, { color: "#25D366", size: 24 }), _jsx("span", { className: "text-sm", children: "Share on WhatsApp" })] }) })] }, index));
            }) }) }));
};
export default ProductCard;
