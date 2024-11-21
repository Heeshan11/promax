import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { bio } from '@data/constants';
const Collaboration = () => {
    const productUrl = "https://www.uispairfurniture.com/office-furniture/soft-seating/office-modular-couch.html"; // Replace with the actual product URL
    const phoneNumber = bio.phone; // Replace with the recipient's WhatsApp number (in international format)
    const productName = "Awesome Product"; // Replace with the product name
    const message = `Hi, I would like to share this product with you: ${productName} - ${productUrl}`; // The message to send
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    return (_jsxs("section", { className: "flex w-4/5 mx-auto flex-col md:flex-row justify-between bg-gradient-to-tl from-gray-900 to-[#0404063b] p-6 py-12 md:py-20 text-white rounded-md", children: [_jsxs("div", { className: "w-full md:w-2/3 mx-auto text-center md:text-left", children: [_jsx("h1", { className: "mb-4 font-heading text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-dark dark:text-white sm:text-[38px]", children: "Looking for Collaboration?" }), _jsx("h1", { className: "mb-4 font-heading text-xl sm:text-2xl md:text-3xl font-semibold leading-tight text-dark dark:text-white sm:text-[38px]", children: "Get Ready Today!" })] }), _jsx("div", { className: "w-full md:w-1/3 flex justify-center md:justify-start items-center mt-4 md:mt-0", children: _jsx("a", { href: whatsappLink, target: "_blank", rel: "noopener noreferrer", className: "bg-blue-800 text-white font-semibold py-2 px-6 rounded hover:bg-blue-700", children: "Get Start Now" }) })] }));
};
export default Collaboration;
