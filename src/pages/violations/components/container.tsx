import ViolationReport, { ViolationReportProps } from "./reports";

interface ViolationReportContainerProp{
    ViolationsList: ViolationReportProps[]
}

const ViolationReportContainer: React.FC<ViolationReportContainerProp> = (ViolationsList) => {
    return (
        <div className="flex flex-col h-full overflow-auto bg-white gap-2 w-full p-4">
            {ViolationsList.ViolationsList.map((violation) => (
                <ViolationReport title={violation.title} details={violation.details} author={violation.author}/>
            ))}
        </div>
    )
}

export default ViolationReportContainer;