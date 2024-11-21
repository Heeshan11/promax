// components/ConditionalFooter.js
"use client";

import { usePathname } from "next/navigation";
import Footer from "../components/Footer";


const ConditionalFooter = () => {
  const pathname = usePathname();
  console.log(pathname);

  // Only render the Footer if the pathname is NOT "/contact"
  return pathname !== "/contact" ? <Footer /> : null;
};

export default ConditionalFooter;
