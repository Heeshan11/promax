import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import EmblaCarousel from '@components/carousel/EmblaCarousel';
import Collection from '@components/Collection';
import Divider from '@components/Divider';
import ProductsSection from '@components/ProductsSection';
import Projects from '@components/Projects';
import { banners } from '@data/constants';
const HomePage = () => {
    return (_jsxs(_Fragment, { children: [_jsx(EmblaCarousel, { data: banners }), _jsxs("div", { children: [_jsxs("div", { className: "m-4 mb-4", children: [_jsx("p", { className: "heading_text m-5 text-center text-2xl  text-gray-800", children: "Our Soulutions " }), _jsx("p", { className: "w-2/3 xs:w-5/6 mx-auto text-center text-sm text-gray-800", children: "We offer a range of thoughtfully designed, high-quality furniture solutions to transform your space into a stylish and comfortable environment." })] }), _jsx(Collection, {}), _jsx(Divider, {})] }), _jsx("div", { className: "m-4 mb-4 w-11/12 mx-auto", children: _jsx(ProductsSection, {}) }), _jsx(Divider, {}), _jsx(Projects, {})] }));
};
export default HomePage;
