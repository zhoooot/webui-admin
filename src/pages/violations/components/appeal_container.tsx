import React, { useEffect } from "react";
import ViolationReport, { ViolationReportProps } from "./reports";

interface AppealReportContainerProp {
  List: ViolationReportProps[];
}

const AppealReportContainer: React.FC<AppealReportContainerProp> = ({
  List,
}) => {
  useEffect(() => {
    console.log("Appeal report container is: ", List);
  }, [List]);
  return (
    <div className="flex flex-col h-full bg-white gap-2 w-full p-4 overflow-auto">
      {List.length !== 0 &&
        List.map((violation, index) => (
          <ViolationReport
            vio_id={violation.vio_id}
            title={violation.title}
            details={violation.details}
            author={violation.author}
            appeal={true}
            key={index}
          />
        ))}
      {List.length === 0 && <></>}
    </div>
  );
};

export default AppealReportContainer;
