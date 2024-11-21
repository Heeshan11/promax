import React from "react";
import { motion } from "framer-motion";
import { bio } from "../../../data/constants";

const HeroSection = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between bg-gradient-to-l from-gray-900 to-[#040406] p-6 md:p-8 py-20 md:py-28 text-white">
      <div className="flex flex-col md:flex-row justify-between w-full max-w-5xl mx-auto">

        {/* Left Side - Text with motion.div */}
        <motion.div
          className="max-w-lg space-y-4 flex flex-col justify-center text-center md:text-left mx-auto md:mx-0 md:w-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <h1 className="text-4xl md:text-3xl font-bold leading-tight">Welcome to Promax</h1>

          <h1 className="text-xl md:text-2xl font-bold leading-tight">
            We are Provide
          </h1>
          <ul className="space-y-2">
            {bio.services.map((service, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 1, duration: 2 }}
                className="text-lg text-gray-300"
              >
                {service}
              </motion.li>
            ))}
          </ul>
          <p className="text-gray-300 text-sm md:text-base">{bio.description}</p>
        </motion.div>

        {/* Right Side - Image */}
        <div className="relative mt-8 md:mt-0 flex justify-center md:w-1/2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-4/5 md:h-screen max-h-80 max-w-80">
            <img
              src="/banners/banner3.jpg"
              alt="Foreground Image"
              className="w-full h-full object-cover rounded-md"
            />
          </div>
          <div className="absolute top-20 left-16 sm:top-16 sm:right-20 md:top-20 md:left-0 w-52 h-52 sm:w-64 sm:h-64 md:w-4/5 md:h-screen max-h-80 max-w-80">
            <div className="absolute bottom-4 left-4 w-full h-full backdrop-blur-sm bg-white/30 rounded-md" />
            <img
              src="/banners/banner1.jpg"
              alt="Overlay Image"
              className="absolute inset-0 w-full h-full object-cover rounded-md z-40"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
