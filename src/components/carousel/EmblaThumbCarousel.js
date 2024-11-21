import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { Thumb } from './EmblaCarouselThumbsButton';
const images = [
    '/banners/banner1.jpg',
    '/banners/banner2.jpg',
    '/banners/banner3.jpg',
];
const EmblaThumbCarousel = (props) => {
    const { slides } = props;
    const [selectedIndex, setSelectedIndex] = useState(0);
    const OPTIONS = {};
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(OPTIONS);
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    });
    const onThumbClick = useCallback((index) => {
        if (!emblaMainApi || !emblaThumbsApi)
            return;
        emblaMainApi.scrollTo(index);
    }, [emblaMainApi, emblaThumbsApi]);
    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi)
            return;
        setSelectedIndex(emblaMainApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);
    useEffect(() => {
        if (!emblaMainApi)
            return;
        onSelect();
        emblaMainApi.on('select', onSelect).on('reInit', onSelect);
    }, [emblaMainApi, onSelect]);
    return (_jsxs("div", { className: "thumb_embla", children: [_jsx("div", { className: "thumb_embla__viewport", ref: emblaMainRef, children: _jsx("div", { className: "thumb_embla__container", children: slides.map((item, index) => (_jsx("div", { className: "thumb_embla__slide", children: _jsx("img", { src: item, alt: item, className: "w-full h-80 object-cover \r\n                transform transition-transform \r\n                duration-300 ease-in-out\r\n                 group-hover:scale-110 rounded-sm" }) }, index))) }) }), _jsx("div", { className: "bg thumb_embla-thumbs", children: _jsx("div", { className: "thumb_embla-thumbs__viewport", ref: emblaThumbsRef, children: _jsx("div", { className: "thumb_embla-thumbs__container pl-5", children: slides.map((item, index) => (_jsx(Thumb, { onClick: () => onThumbClick(index), selected: index === selectedIndex, index: index, thumbImg: item }, index))) }) }) })] }));
};
export default EmblaThumbCarousel;
