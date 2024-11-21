// components/ConditionalFooter.js
"use client";

import Footer from "../components/Footer";
import { useLocation } from 'react-router-dom';


const ConditionalFooter = () => {
  const location = useLocation(); // Returns the current location object
  console.log(location.pathname);

  // Only render the Footer if the pathname is NOT "/contact"
  return location.pathname !== "/contact" ? <Footer /> : null;
};

export default ConditionalFooter;
