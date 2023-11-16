import { GiBellShield } from "react-icons/gi";

const NewReportStatistics = () : JSX.Element => {
    return (
        <div className="flex flex-row">
            <div className="bg-green-200 p-4 m-2 rounded-full">
                <GiBellShield size={30} className="fill-indigo-500"/>
            </div>
            <div className="flex flex-col justify-center">
                <text className="text-black">4</text>
                <text className="text-black">New Reports</text>
            </div>
        </div>
    )
}

const NewReportPanel = () : JSX.Element => {
    return (
        <div className="bg-white rounded-lg pl-32 pr-32">
            <NewReportStatistics></NewReportStatistics>
            <button className="btn btn-primary text-white hover:text-white"><text className="active:text-white">See all</text></button>
        </div>
    )    
}

export default NewReportPanel