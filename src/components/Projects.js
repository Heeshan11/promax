import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { projects } from '../data/constants';
import ImageEmblaCarousel from './carousel/ImageEmblaCarousel';
function Projects() {
    return (_jsxs("div", { className: 'max-w-[2000px] mx-auto', children: [_jsxs("div", { className: "w-2/3 xs-min:w-3/4 xs:w-[90%] mx-auto pb-5 ", children: [_jsx("h3", { className: "text-2xl font-semibold mb-4 text-gray-800 text-center my-5", children: "Projects" }), _jsx("p", { className: "mx-auto text-center text-sm text-gray-800", children: "We deliver innovative office solutions, transforming traditional workspaces into modern, stylish, and comfortable environments that enhance efficiency, health, and well-being.                " })] }), _jsx("div", { className: 'my-5', children: _jsx(ImageEmblaCarousel, { data: projects, IsBtn: true }) })] }));
}
export default Projects;
