import ViolationReport, { ViolationReportProps } from "./reports";

interface ViolationReportContainerProp{
    List: ViolationReportProps[]
}

const ViolationReportContainer: React.FC<ViolationReportContainerProp> = (ViolationsList) => {
    return (
        <div className="flex flex-col h-screen overflow-y-scroll bg-white gap-2 w-full p-4">
            {ViolationsList.List.map((violation) => (
                violation.appeal? <ViolationReport title={violation.title} details={violation.details} author={violation.author}/> : null
            ))}
        </div>
    )
}

export default ViolationReportContainer;