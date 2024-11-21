import { projects } from '../data/constants'
import ImageEmblaCarousel from './carousel/ImageEmblaCarousel'

function Projects() {
    return (
        <div className='max-w-[2000px] mx-auto'>
            <div className="w-2/3 xs-min:w-3/4 xs:w-[90%] mx-auto pb-5 ">
                <h3 className="text-2xl font-semibold mb-4 text-gray-800 text-center my-5">Projects</h3>
                <p className="mx-auto text-center text-sm text-gray-800">
                We deliver innovative office solutions, transforming traditional workspaces into modern, stylish, and comfortable environments that enhance efficiency, health, and well-being.                </p>
            </div>
            <div className='my-5'>
                <ImageEmblaCarousel data={projects} IsBtn={true} />
            </div>
        </div>
    )
}

export default Projects
