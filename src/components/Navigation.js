'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import Marquee from './MarqueeText';
import { Link } from 'react-router-dom';
export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const navList = [
        { id: 1, title: 'home', to: '/', queryTitle: "" },
        { id: 3, title: 'products', to: '/products', queryTitle: 'All Products' },
        { id: 2, title: 'solutions', to: '/solutions', queryTitle: 'Solutions' },
        // { id: 4, title: 'projects', to: '/projects', queryTitle: 'Projects' },
        // { id: 5, title: 'Videos', to: '/videos', queryTitle: 'Videos' },
        { id: 6, title: 'about us', to: '/about', queryTitle: '' },
        { id: 7, title: 'Contact', to: '/contact', queryTitle: '' },
    ];
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    return (_jsxs("nav", { className: `fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-white py-1 shadow-md' : 'bg-[#00000042] pt-2'} ${isScrolled ? 'text-gray-900' : 'text-white'}`, children: [_jsxs("div", { className: "w-full flex justify-between items-center px-3 md:px-8", children: [_jsx("section", { className: "flex space-x-4", children: _jsx(Link, { to: "/", className: "hover:underline", children: _jsx("img", { src: "/logo.png", width: isScrolled ? 80 : 110, height: isScrolled ? 80 : 110, alt: "logo", className: "transition-all duration-300" }) }) }), _jsx("button", { className: `md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`, onClick: () => setIsOpen(!isOpen), children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "w-6 h-6", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" }) }) }), _jsxs("section", { className: `md:flex md:flex-row md:space-x-4 absolute md:static left-0 top-0 w-full md:w-auto bg-white md:bg-transparent transition-all duration-300 ${isOpen ? 'flex' : 'hidden'}`, children: [_jsx("button", { className: `${isOpen && 'text-black'} absolute top-6 right-4 md:hidden `, onClick: () => setIsOpen(false), children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: "1.5", stroke: "currentColor", className: "w-6 h-6", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18L18 6M6 6l12 12" }) }) }), _jsx("div", { className: "flex flex-col md:flex-row w-full h-full items-center justify-center md:space-y-0 space-y-4 md:space-x-4 md:py-0 py-8", children: navList.map((navItem) => (_jsx("div", { className: "group", children: _jsxs(Link, { to: {
                                            pathname: `${navItem.to}`,
                                        }, state: navItem.queryTitle.length > 0 ? { title: navItem === null || navItem === void 0 ? void 0 : navItem.queryTitle } : {}, onClick: () => setIsOpen(false), className: `relative uppercase 
                                text-sm transition-all duration-300 ${isScrolled || isOpen ? 'text-gray-900' : 'text-white'} cursor-pointer ${isOpen && 'text-gray-900'} hover:text-blue-800 `, children: [navItem.title, _jsx("span", { className: "absolute left-0 bottom-0 h-[2px] bg-blue-800 transition-all duration-300 w-0 group-hover:w-full" })] }) }, navItem.id))) })] })] }), _jsx(Marquee, { isScrolled: isScrolled })] }));
}
