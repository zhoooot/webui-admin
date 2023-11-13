import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    TimeScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  } from "chart.js";
  import { Line } from "react-chartjs-2";
  import "chartjs-adapter-luxon";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    TimeScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
  );
  
  // const test = (a) => {
  //   console.log(a);
  // };
  
  export const options = {
    responsive: true,
    maintainAspectRatio: false,
    // onResize: test,
    // parsing: false,
    interaction: {
      intersect: false
    },
  };
  
  interface ChartDataPoint {
    data: {
      label: string;
      color: string;
      values: {
        x: string;
        y: number;
      }[];
    }[];
  }
  
  export const ChartXAxisTime = ({ data }: ChartDataPoint) => {
    const datasets = data.map((set) => {
      return {
        label: set.label,
        data: set.values,
        pointRadius: 0,
        borderColor: set.color,
        backgroundColor: set.color
      };
    });
  
    return <Line options={options} data={{ datasets }} />;
  };
  