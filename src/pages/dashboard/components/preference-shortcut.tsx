import { IoExtensionPuzzle } from "react-icons/io5";

const PrefShortcut = () : JSX.Element => {
    return (
        <div className="bg-white rounded-lg p-4 flex flex-col flex-grow">
            <text className="text-black self-center text-2xl">System Preference</text>
            <IoExtensionPuzzle size = {150} className = "fill-indigo-500 self-center"></IoExtensionPuzzle>
            <button className="btn btn-primary w-7/12 self-center text-white">Modify</button>
        </div>
    )
}

export default PrefShortcut;