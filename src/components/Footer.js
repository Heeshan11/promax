var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { IoLocationOutline, IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import { bio, contacts, quickLinks } from "../data/constants";
import { Link } from "react-router-dom";
// components/Footer.js
export default function Footer() {
    const iconMap = {
        call: IoCallOutline,
        location: IoLocationOutline,
        mail: IoMailOpenOutline
        // add more icons here as needed
    };
    const Icon = (_a) => {
        var { name } = _a, props = __rest(_a, ["name"]);
        const IconComponent = iconMap[name];
        return IconComponent ? _jsx(IconComponent, Object.assign({ size: 20 }, props)) : null;
    };
    return (_jsxs("footer", { className: " pt-10 bg-gradient-to-tl from-gray-900 to-[#040406] px-6  md:px-8 md:pt-8  text-white", children: [_jsxs("div", { className: "max-w-screen-lg mx-auto  md:px-12 flex flex-wrap py-5 ", children: [_jsxs("div", { className: "w-full sm:w-1/3 mb-8 sm:mb-0", children: [_jsx("img", { src: "/logo.png", width: 60, height: 60, alt: "logo" }), _jsx("p", { className: "text-[12px] text-gray-300 mt-4 w-11/12", children: bio.footerText })] }), _jsxs("div", { className: "w-full flex-col flex-1 mb-8 sm:mb-0", children: [_jsx("h3", { className: "text-lg font-medium mb-2 italic text-white", children: "Contact" }), _jsx("p", { className: "h-[5px] bg-yellow-600 w-2/3 skew-x-[-20deg] animate-grow" }), _jsx("ul", { className: "text-sm text-gray-300 pt-2 w-11/12", children: contacts.map((contact) => {
                                    return (_jsxs("li", { className: "flex row items-center gap-2 text-[14px] font-normal pb-2", children: [_jsx(Icon, { name: contact.icon }), _jsxs("p", { className: `flex-1 ${contact.id === 1 ? 'text-[11px]' : "text-[14px]"}`, children: [" ", contact.title] })] }, contact.id));
                                }) })] }), _jsxs("div", { className: "w-full sm:w-[30%]", children: [_jsx("h3", { className: "text-lg font-medium mb-2 text-white  italic", children: "Quick Links" }), _jsx("p", { className: "h-[5px] bg-yellow-600 w-2/3 skew-x-[-20deg] animate-grow" }), _jsx("ul", { className: "text-sm text-gray-300 pt-2 w-11/12", children: quickLinks.map((product) => {
                                    return (_jsx("li", { className: "flex row items-center gap-2 text-[14px] font-normal pb-2", children: _jsx(Link, { to: '/products', state: { title: product.title, category: product.category }, children: product.title }) }, product.id));
                                }) })] })] }), _jsx("div", { className: "text-center text-[#d5b954] py-3 text-[13px]", children: bio.copyRights })] }));
}
