import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { bio } from "@data/constants";
const HeroSection = () => {
    return (_jsx("section", { className: "flex flex-col md:flex-row justify-between bg-gradient-to-l from-gray-900 to-[#040406] p-6 md:p-8 py-20 md:py-28 text-white", children: _jsxs("div", { className: "flex flex-col md:flex-row justify-between w-full max-w-5xl mx-auto", children: [_jsxs(motion.div, { className: "max-w-lg space-y-4 flex flex-col justify-center text-center md:text-left mx-auto md:mx-0 md:w-1/2", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.4, ease: "easeOut" }, children: [_jsx("h1", { className: "text-4xl md:text-3xl font-bold leading-tight", children: "Welcome to Promax" }), _jsx("h1", { className: "text-xl md:text-2xl font-bold leading-tight", children: "We are Provide" }), _jsx("ul", { className: "space-y-2", children: bio.services.map((service, index) => (_jsx(motion.li, { initial: { opacity: 0, x: -10 }, animate: { opacity: 1, x: 0 }, transition: { delay: index * 1, duration: 2 }, className: "text-lg text-gray-300", children: service }, index))) }), _jsx("p", { className: "text-gray-300 text-sm md:text-base", children: bio.description })] }), _jsxs("div", { className: "relative mt-8 md:mt-0 flex justify-center md:w-1/2", children: [_jsx("div", { className: "relative w-64 h-64 sm:w-80 sm:h-80 md:w-4/5 md:h-screen max-h-80 max-w-80", children: _jsx("img", { src: "/banners/banner3.jpg", alt: "Foreground Image", className: "w-full h-full object-cover rounded-md" }) }), _jsxs("div", { className: "absolute top-20 left-16 sm:top-16 sm:right-20 md:top-20 md:left-0 w-52 h-52 sm:w-64 sm:h-64 md:w-4/5 md:h-screen max-h-80 max-w-80", children: [_jsx("div", { className: "absolute bottom-4 left-4 w-full h-full backdrop-blur-sm bg-white/30 rounded-md" }), _jsx("img", { src: "/banners/banner1.jpg", alt: "Overlay Image", className: "absolute inset-0 w-full h-full object-cover rounded-md z-40" })] })] })] }) }));
};
export default HeroSection;