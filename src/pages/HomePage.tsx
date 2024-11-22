import React, { useEffect, useState } from 'react';
import EmblaCarousel from '@components/carousel/EmblaCarousel';
import Collection from '@components/Collection';
import Divider from '@components/Divider';
import ProductsSection from '@components/ProductsSection';
import Projects from '@components/Projects';
import { banners } from '@data/constants';


const HomePage = () => {
  
  return (
    <>
      <EmblaCarousel data={banners} />
      <div>
        <div className="m-4 mb-4">
          <p className="heading_text m-5 text-center text-2xl text-gray-800">Our Solutions</p>
          <p className="w-2/3 xs:w-5/6 mx-auto text-center text-sm text-gray-800">
            We offer a range of thoughtfully designed, high-quality furniture solutions to transform your space into a stylish and comfortable environment.
          </p>
        </div>
        <Collection />
        <Divider />
      </div>
      <div className="m-4 mb-4 w-11/12 mx-auto">
        <ProductsSection />
      </div>
      <Divider />
      <Projects />
    </>
  );
};

export default HomePage;
