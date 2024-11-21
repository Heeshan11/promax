import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { bio } from '../data/constants';
// import styles from './Marquee.module.css';
const Marquee = ({ isScrolled }) => {
    return (_jsx("div", { className: 'marqueeContainer z-50', children: _jsx("div", { className: `marquee text-xs font-bold  `, children: _jsxs("p", { className: 'glow text-yellow-500', children: ["Promax-Exceeding your\u00A0Expectation,\u00A0\u00A0\u00A0 Please Contact : ", bio.email] }) }) }));
};
export default Marquee;
