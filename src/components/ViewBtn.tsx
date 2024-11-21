import { Link } from 'react-router-dom'

const ViewBtn = ({to,text="View More"}:{to:string,text?:string}) => {
    return (
        <Link to={`/${to}`} className="animation_button bg-blue-500 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-full">
            <span className="cursor-pointer inline-block relative transition duration-500 "> {text} </span>
        </Link>
    )
}

export default ViewBtn
