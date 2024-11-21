// components/ProductSlider.tsx
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import EmblaCarousel from './carousel/EmblaCarousel';

interface ProductSliderProps {
  images: string[];
}

const ProductSlider: React.FC<ProductSliderProps> = ({ images }) => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Transition speed
    slidesToShow: 1, // Only show one image at a time
    slidesToScroll: 1, // Scroll one image at a time
    responsive: [
      {
        breakpoint: 768, // For small devices like mobile
        settings: {
          arrows: false, // Disable arrows on mobile
        },
      },
    ],
  };

  return (
    <div className="product-slider">
      <EmblaCarousel/>
    </div>
  );
};

export default ProductSlider;
