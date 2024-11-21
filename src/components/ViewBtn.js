import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
const ViewBtn = ({ to, text = "View More" }) => {
    return (_jsx(Link, { to: `/${to}`, className: "animation_button bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full", children: _jsxs("span", { className: "cursor-pointer inline-block relative transition duration-500 ", children: [" ", text, " "] }) }));
};
export default ViewBtn;
