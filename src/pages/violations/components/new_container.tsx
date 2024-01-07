import React, { useState } from 'react';
import ViolationReport, { ViolationReportProps } from "./reports";

interface ViolationReportContainerProp {
    List: ViolationReportProps[];
}

const ViolationReportContainer: React.FC<ViolationReportContainerProp> = ({ List }) => {
    const [violations, setViolations] = useState<typeof List>(List);

    const handleAppealClick = (index: number) => {
        // Create a new array to avoid mutating the state directly
        const updatedViolations = [...violations];
        updatedViolations[index].appeal = true;
        setViolations(updatedViolations);
    };

    return (
        <div className="flex flex-col h-full bg-white gap-2 w-full p-4 overflow-auto">
            {violations.map((violation, index) => (
                violation.appeal ? null : (
                    <ViolationReport
                        title={violation.title}
                        details={violation.details}
                        author={violation.author}
                        appeal={violation.appeal}
                        key={index}
                        onBanClick={() => handleAppealClick(index)}
                        onPermitClick={() => handleAppealClick(index)}
                    />
                )
            ))}
        </div>
    );
};

export default ViolationReportContainer;

