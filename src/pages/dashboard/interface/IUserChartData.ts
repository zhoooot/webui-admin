import colors from "tailwindcss/colors";

class IChartData {
  data: {
    label: string;
    color: string;
    values: {
      x: string;
      y: number;
    }[];
  }[];

  constructor(values: {x: string, y: number}[]) {
    this.data = [{
      label: 'Users',
      color: colors.orange[500],
      values: values
    }];
  }
}

export default IChartData;