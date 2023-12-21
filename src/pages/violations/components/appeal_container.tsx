import ViolationReport, { ViolationReportProps } from "./reports";

interface AppealReportContainerProp{
    List: ViolationReportProps[]
}

const AppealReportContainer: React.FC<AppealReportContainerProp> = (ViolationsList) => {
    return (
        <div className="flex flex-col h-screen overflow-y-scroll bg-white gap-2 w-full p-4">
            {ViolationsList.List.map((violation) => (
                violation.appeal? null : <ViolationReport title={violation.title} details={violation.details} author={violation.author}/>
            ))}
        </div>
    )
}

export default AppealReportContainer;