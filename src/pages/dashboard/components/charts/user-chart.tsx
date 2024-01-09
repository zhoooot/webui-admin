import colors from "tailwindcss/colors";
import { ChartXAxisTime } from "../variables/ChartXAxisTime";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import IChartData from "../../interface/IUserChartData";

export default function UserChart(props: IChartData) {

  const [data, setData] = useState([
    {
      label: "data1",
      color: colors.orange[500],
      values: [
        { x: "2022-10-17T10:00Z", y: 17.1 },
        { x: "2022-10-17T11:00Z", y: 17.2 },
        { x: "2022-10-17T12:00Z", y: 16 },
        { x: "2022-10-17T13:00Z", y: 16.5 },
        { x: "2022-10-17T14:00Z", y: 19 },
        { x: "2022-10-17T15:00Z", y: 20 },
      ],
    },
  ]);

  

  return (
    <div className="w-full flex items-center justify-center px-5 py-5">
      <div className="w-full h-96 max-w-4xl">
        <ChartXAxisTime data={props.data} />
      </div>
    </div>
  );
}

// export default function IndexPage() {
//   return (
//     <div className="w-screen min-h-screen bg-emerald-200">
//       <div className="grid col-auto">
//         <div className="bg-emerald-500">
//           a{/* <ChartXAxisTime data={DATA} /> */}
//         </div>

//         <div className="">a{/* <ChartXAxisTime data={DATA} /> */}</div>

//         <div className="">a{/* <ChartXAxisTime data={DATA} /> */}</div>

//         <div className=" ">a{/* <ChartXAxisTime data={DATA} /> */}</div>
//       </div>
//     </div>
//   );
// }
