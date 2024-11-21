import { jsx as _jsx } from "react/jsx-runtime";
export const Thumb = (props) => {
    const { selected, index, onClick, thumbImg } = props;
    return (_jsx("div", { className: '  embla-thumbs__slide'.concat(selected ? ' embla-thumbs__slide--selected' : ''), children: _jsx("button", { onClick: onClick, type: "button", className: "embla-thumbs__slide__number", children: _jsx("img", { src: thumbImg, alt: thumbImg, className: "w-14 rounded-md h-14 mr-2 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110 " }) }) }));
};
