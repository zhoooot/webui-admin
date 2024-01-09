import React, { useEffect, useState } from "react";
import ViolationReport, { ViolationReportProps } from "./reports";
import axios from "axios";
import { VIO_URL } from "@/config";

interface ViolationReportContainerProp {
  List: ViolationReportProps[];
}

const ViolationReportContainer: React.FC<ViolationReportContainerProp> = ({
  List,
}) => {
  const [violations, setViolations] = useState<typeof List>(List);

//   const handleAppealClick = async (index: number, vio_id: string) => {
//     // Create a new array to avoid mutating the state directly
//     await axios.put(VIO_URL, { vio_id: vio_id });
//     const updatedViolations = [...violations];
//     updatedViolations[index].appeal = true;
//     setViolations(updatedViolations);
//   };

  const onClick = async (index: number, quiz_id: string, action: string) => {
    await axios.patch(VIO_URL + `/${action}/${quiz_id}`);
    const updatedViolations = violations.filter((x, i) => {i !== index || (action == "reject" && x.title == quiz_id)});
    setViolations(updatedViolations);
  }

  useEffect(() => {
    setViolations(List);
    console.log("Violation report container is: ", List);
  }, [List]);

  return (
    <div className="flex flex-col h-full bg-white gap-2 w-full p-4 overflow-auto">
      {violations.map((violation, index) => (
          <ViolationReport
            vio_id={violation.vio_id}
            title={violation.title}
            details={violation.details}
            author={violation.author}
            appeal={violation.appeal}
            key={index}
            onBanClick={async () =>
              await onClick(index, violation.title, "reject")
            }
            onPermitClick={async () =>
              await onClick(index, violation.title, "solved")
            }
          />
        ))}
      {violations.length === 0 && <></>}
    </div>
  );
};

export default ViolationReportContainer;
