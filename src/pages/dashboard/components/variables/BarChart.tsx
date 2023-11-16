import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import "chartjs-adapter-luxon";

ChartJS.register(
  CategoryScale,
  LinearScale,
  TimeScale,
  PointElement,
  BarElement,
  Tooltip,
  Legend
);

// const test = (a) => {
//   console.log(a);
// };

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      label: "Sales",
      data: [120, 200, 150, 300, 250, 180],
      backgroundColor: [
        "rgba(129, 212, 250, 0.8)",
        "rgba(129, 212, 250, 0.8)",
        "rgba(129, 212, 250, 0.8)",
        "rgba(129, 212, 250, 0.8)",
        "rgba(129, 212, 250, 0.8)",
        "rgba(129, 212, 250, 0.8)",
      ],
      borderColor: [
        "rgba(59, 130, 246, 1)",
        "rgba(59, 130, 246, 1)",
        "rgba(59, 130, 246, 1)",
        "rgba(59, 130, 246, 1)",
        "rgba(59, 130, 246, 1)",
        "rgba(59, 130, 246, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const options = {
  scales: {
    x: {
      display: false,
    },
    y: {
      display: false,
    },
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

export const BarChart = ({ data }: ChartDataPoint) => {
  const datasets = data.map((set) => {
    return {
      label: set.label,
      data: set.values,
      borderColor: set.color,
      backgroundColor: set.color,
      lineTension: 0.3,
      borderRadius: 13,
    };
  });

  return <Bar options={options} data={{ datasets }} />;
};
