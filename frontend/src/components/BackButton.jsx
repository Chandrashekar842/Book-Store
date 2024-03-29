import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

export const BackButton = ({ destination = '/' }) => {
    return (
        <div className="flex">
            <Link to={destination} className="bg-sky-800 w-fit px-4 py-1 rounded-lg text-white">
                <BsArrowLeft className="text-2xl" />
            </Link>
        </div>
    )
}