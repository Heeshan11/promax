import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { ourSolutions } from '@data/constants';
import { textSlice } from '@app/constants/ReusableFn';
const Collection = () => {
    return (_jsx("div", { className: "flex flex-wrap justify-center gap-5 max-w-[2000px] mx-auto", children: ourSolutions.map((card, index) => (_jsxs(Link, { to: { pathname: '/products' }, state: { title: card.title, category: card.category }, className: `flex flex-col 
           bg-white shadow-lg rounded-lg overflow-hidden cursor-pointer 
           w-full xs-range:w-5/12 xs:w-4/5 md:w-1/4 lg:w-1/4 xl:w-1/6`, children: [_jsx("div", { className: "w-full h-40 overflow-hidden relative group", children: _jsx("img", { src: card.image, alt: card.title, className: "w-full h-full object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110" }) }), _jsx("div", { className: "p-3", children: _jsx("h3", { className: "font-bold text-lg text-gray-900 text-center", children: textSlice(card.title, 0, 50) }) })] }, index))) }));
};
export default Collection;
