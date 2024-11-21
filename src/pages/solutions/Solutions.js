import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import ProductCard from '@components/ProductCard';
import { ourSolutions } from '@data/constants';
import { Link } from 'react-router-dom';
const Solutions = () => {
    return (_jsx("div", { className: 'min-h-screen bg-gray-100  p-4 pt-28 ', children: ourSolutions.map((solution) => {
            const sliceData = solution.data.slice(0, 5);
            return (_jsxs(_Fragment, { children: [_jsx("h1", { className: 'heading_text m-5 text-2xl sm:w-9/12 mx-auto text-gray-800', children: solution.title }), _jsx(ProductCard, { products: sliceData }), _jsx("div", { className: "text-right  text-zinc-500 font-bold ", children: solution.data.length > 5 &&
                            _jsx(Link, { to: '/products', state: { title: solution.title, category: solution.category }, children: "View More" }) })] }));
        }) }));
};
export default Solutions;
