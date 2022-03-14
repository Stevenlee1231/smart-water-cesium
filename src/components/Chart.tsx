import * as echarts from "echarts/core";
import "./Chart.scss";
interface chart {
  width: number;
  height: number;
  dom: any;
  theme: string;
  xData: [];
  yData: [];
}
const Chart = (props: chart) => {
  const { width, height, dom, theme, xData, yData } = props;
};
export default Chart;
