import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart(props: {
  labels?: Array<any>;
  options?: Object;
  data: any;
}) {
  const { labels, options, data } = props;
  const composeData = labels
    ? {
        labels,
        ...data,
      }
    : data;
  return <Line options={options} data={composeData} />;
}

export default LineChart;
