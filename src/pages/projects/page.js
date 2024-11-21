import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import EmblaThumbCarousel from "@components/carousel/EmblaThumbCarousel";
const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio tempore voluptatum est perspiciatis, voluptas harum non amet, odio ipsam cum id aperiam aliquid, vel ullam et necessitatibus nihil quisquam.',
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGD_B-CODWUGSWWJTddaZ3LMZ_soIdA5i_NQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGD_B-CODWUGSWWJTddaZ3LMZ_soIdA5i_NQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGD_B-CODWUGSWWJTddaZ3LMZ_soIdA5i_NQ&s',
        ],
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio tempore voluptatum est perspiciatis, voluptas harum non amet, odio ipsam cum id aperiam aliquid, vel ullam et necessitatibus nihil quisquam.',
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGD_B-CODWUGSWWJTddaZ3LMZ_soIdA5i_NQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGD_B-CODWUGSWWJTddaZ3LMZ_soIdA5i_NQ&s',
        ],
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio tempore voluptatum est perspiciatis, voluptas harum non amet, odio ipsam cum id aperiam aliquid, vel ullam et necessitatibus nihil quisquam.',
        images: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGD_B-CODWUGSWWJTddaZ3LMZ_soIdA5i_NQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGD_B-CODWUGSWWJTddaZ3LMZ_soIdA5i_NQ&s',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGD_B-CODWUGSWWJTddaZ3LMZ_soIdA5i_NQ&s',
        ],
    },
];
function Page() {
    return (_jsx("div", { className: 'pt-12', children: projects.map((project, index) => {
            const isEven = index % 2 === 0; // Check if index is even
            return (_jsxs("div", { className: `flex pt-24 flex-col md:flex-row gap-4 p-6 ${isEven ? '' : 'md:flex-row-reverse'}`, children: [_jsxs("div", { className: "md:w-1/2", children: [_jsx("h2", { className: "text-xl font-semibold", children: "Project Title" }), _jsx("p", { className: "mt-2 text-gray-700", children: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio tempore voluptatum est perspiciatis, voluptas harum non amet, odio ipsam cum id aperiam aliquid, vel ullam et necessitatibus nihil quisquam." })] }), _jsx("div", { className: "md:w-1/2", children: _jsx(EmblaThumbCarousel, { slides: project.images }) })] }, index));
        }) }));
}
export default Page;
