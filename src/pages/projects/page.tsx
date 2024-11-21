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

    return (
        <div className='pt-12'>
            {projects.map((project, index) => {
                const isEven = index % 2 === 0; // Check if index is even
                return (
                    <div className={`flex pt-24 flex-col md:flex-row gap-4 p-6 ${isEven ? '' : 'md:flex-row-reverse'
                        }`} key={index}>
                        {/* Left Side - Details */}
                        <div className="md:w-1/2">
                            <h2 className="text-xl font-semibold">Project Title</h2>
                            <p className="mt-2 text-gray-700">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque distinctio tempore voluptatum est perspiciatis, voluptas harum non amet, odio ipsam cum id aperiam aliquid, vel ullam et necessitatibus nihil quisquam.
                            </p>
                        </div>

                        {/* Right Side - Carousel */}
                        <div className="md:w-1/2">
                            <EmblaThumbCarousel slides={project.images} />
                        </div>
                    </div>
                )
            })}
        </div>
    );
}

export default Page;
