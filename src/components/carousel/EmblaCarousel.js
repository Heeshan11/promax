import { jsx as _jsx } from "react/jsx-runtime";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import WatermarkedImage from '@components/WatermarkedImage';
const EmblaCarousel = ({ data }) => {
    const OPTIONS = { loop: true };
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);
    return (_jsx("section", { className: "embla bg-white", children: _jsx("div", { className: "embla__viewport", ref: emblaRef, children: _jsx("div", { className: "embla__container", children: data.map((banner, index) => (_jsx("div", { className: "embla__slide", children: _jsx(WatermarkedImage, { imageUrl: banner.image, imgStyle: "embla__slide__img", targetHeight: 500 }) }, index))) }) }) }));
};
export default EmblaCarousel;
