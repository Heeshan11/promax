import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "@pages/HomePage";
import About from "@pages/about/About";
import Navigation from "@components/Navigation";
import Contact from "@pages/contact/Contact";
import Products from "@pages/products/Products";
import ProductDetails from "@pages/ProductDetails/ProductDetails";
import Solution from "@pages/solutions/Solutions";
import { MainProvider } from "./context/MainProvider";
import ConditionalFooter from "./constants/ConditionalFooter";
const App = () => {
    return (_jsx(Router, { children: _jsx("div", { children: _jsxs(MainProvider, { children: [_jsx(Navigation, {}), _jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(HomePage, {}) }), _jsx(Route, { path: "/about", element: _jsx(About, {}) }), _jsx(Route, { path: "/contact", element: _jsx(Contact, {}) }), _jsx(Route, { path: "/solutions", element: _jsx(Solution, {}) }), _jsx(Route, { path: "/products", element: _jsx(Products, {}) }), _jsx(Route, { path: "/product/:id", element: _jsx(ProductDetails, {}) })] }), _jsx(ConditionalFooter, {})] }) }) }));
};
export default App;
