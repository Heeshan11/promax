import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDotButton } from './EmblaCarouselDotButton';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import { Link } from 'react-router-dom';
const SmallEmblaCarousel = (props) => {
    const OPTIONS = { loop: true };
    const { data } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS);
    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);
    const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } = usePrevNextButtons(emblaApi);
    return (_jsxs("section", { className: "small__embla", children: [_jsx("div", { className: "small__embla__viewport", ref: emblaRef, children: _jsx("div", { className: "small__embla__container", children: data.map((item, index) => (_jsx(Link, { to: `products/${item.id}`, className: "small__embla__slide select-none gap-2", children: _jsx("img", { className: "small__embla__slide__img ", src: item === null || item === void 0 ? void 0 : item.image, alt: "Your alt text" }) }, index))) }) }), _jsx("div", { className: "small__embla__controls", children: _jsxs("div", { className: "embla__buttons", children: [_jsx(NextButton, { onClick: onNextButtonClick, disabled: nextBtnDisabled }), _jsx(PrevButton, { onClick: onPrevButtonClick, disabled: prevBtnDisabled })] }) })] }));
};
export default SmallEmblaCarousel;
