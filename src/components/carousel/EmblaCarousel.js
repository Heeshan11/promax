import { jsx as _jsx } from "react/jsx-runtime";
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
const EmblaCarousel = ({ data }) => {
    const OPTIONS = { loop: true };
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [Autoplay()]);
    return (_jsx("section", { className: "embla bg-white", children: _jsx("div", { className: "embla__viewport", ref: emblaRef, children: _jsx("div", { className: "embla__container", children: data.map((banner, index) => (_jsx("div", { className: "embla__slide", children: _jsx("img", { className: "embla__slide__img ", src: banner.image, alt: "Your alt text" }) }, index))) }) }) }));
};
export default EmblaCarousel;
