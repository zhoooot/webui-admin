import colors from "tailwindcss/colors";
import { ChartXAxisTime } from "../variables/ChartXAxisTime";

const DATA = [
  {
    label: "data1",
    color: colors.orange[500],
    values: [
      { x: "2022-10-17T10:00Z", y: 17.1 },
      { x: "2022-10-17T11:00Z", y: 17.2 },
      { x: "2022-10-17T12:00Z", y: 16 },
      { x: "2022-10-17T13:00Z", y: 16.5 },
      { x: "2022-10-17T14:00Z", y: 19 },
      { x: "2022-10-17T15:00Z", y: 20 }
    ]
  },
  {
    label: "data2",
    color: colors.sky[400],
    values: [
      { x: "2022-10-17T10:00Z", y: 19.1 },
      { x: "2022-10-17T11:00Z", y: 15.2 },
      { x: "2022-10-17T12:00Z", y: 16 },
      { x: "2022-10-17T13:00Z", y: 11.5 },
      { x: "2022-10-17T14:00Z", y: 12 },
      { x: "2022-10-17T15:00Z", y: 14.5 }
    ]
  }
];

export default function IndexPage() {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
      <div className="w-full max-w-4xl">
        <div className="p-4 my-6 h-96 rounded-lg bg-white shadow-lg md:shadow-xl relative">
          <ChartXAxisTime data={DATA} />
        </div>
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
