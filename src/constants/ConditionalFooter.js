// components/ConditionalFooter.js
"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';
const ConditionalFooter = () => {
    const location = useLocation(); // Returns the current location object
    // Only render the Footer if the pathname is NOT "/contact"
    return location.pathname !== "/contact" ? _jsx(Footer, {}) : null;
};
export default ConditionalFooter;
