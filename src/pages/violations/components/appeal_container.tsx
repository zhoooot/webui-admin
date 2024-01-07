import React from 'react';
import ViolationReport, { ViolationReportProps } from "./reports";

interface AppealReportContainerProp {
    List: ViolationReportProps[];
}

const AppealReportContainer: React.FC<AppealReportContainerProp> = ({ List }) => {
    return (
        <div className="flex flex-col h-full bg-white gap-2 w-full p-4 overflow-auto">
            {List.map((violation, index) => (
                violation.appeal ? (
                    <ViolationReport
                        title={violation.title}
                        details={violation.details}
                        author={violation.author}
                        appeal={true}
                        key={index}
                    />
                ) : null
            ))}
        </div>
    );
}

export default AppealReportContainer;
