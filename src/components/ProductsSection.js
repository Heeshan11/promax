import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import SmallEmblaCarousel from './carousel/SmallEmblaCarousel';
import { newArrivals } from '@data/constants';
const ProductsSection = () => {
    const SMALLOPTIONS = { align: 'center' };
    const SLIDE_COUNT = 6;
    return (_jsxs("div", { className: 'max-w-[2000px] mx-auto', children: [_jsx("p", { className: "heading_text m-5 text-2xl pl-6   text-gray-800", children: "New Arrivals " }), _jsx(SmallEmblaCarousel, { data: newArrivals })] }));
};
export default ProductsSection;
