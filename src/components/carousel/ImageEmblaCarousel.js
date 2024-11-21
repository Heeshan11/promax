import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import useEmblaCarousel from 'embla-carousel-react';
import ViewBtn from '../ViewBtn';
const OPTIONS = { loop: true };
const ImageEmblaCarousel = (props) => {
    const { data, IsBtn } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
    return (_jsx("section", { className: "image__embla", children: _jsx("div", { className: "image__embla__viewport", ref: emblaRef, children: _jsx("div", { className: "image__embla__container", children: data.map((item, index) => (_jsx("div", { className: "image__embla__slide select-none", children: _jsxs("div", { className: "w-full h-60 overflow-hidden relative group rounded-xl", children: [_jsx("img", { src: item.image, alt: item.title, className: "w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110 " }), _jsx("div", { className: "absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300 ease-in-out" }), _jsxs("div", { className: "absolute top-full left-1/2 transform -translate-x-1/2 group-hover:top-1/2  transition-all duration-500 ease-in-out text-center \r\n                ", children: [_jsx("h1", { className: "text-white text-lg font-semibold tracking-wide mb-2 md:text-base md:mb-4 xs:text-[18px]", children: item.title }), IsBtn && _jsx(ViewBtn, { to: '#', text: "Read more" })] })] }) }, index))) }) }) }));
};
export default ImageEmblaCarousel;
