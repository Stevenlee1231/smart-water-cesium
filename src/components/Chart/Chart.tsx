import * as echarts from "echarts/core";
import "./Chart.scss";
import {
  BarChart,
  // 系列类型的定义后缀都为 SeriesOption
  BarSeriesOption,
  LineChart,
  LineSeriesOption,
} from "echarts/charts";
import {
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  TitleComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  // 数据集组件
  DatasetComponent,
  DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent,
  ToolboxComponent,
  VisualMapComponent,
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useEffect } from "react";
interface chart {
  title: string;
  // width: number;
  // height: number;
  theme: string;
  // data: {} | [];
  //声明X轴，
  xAxis: string[];
  //声明提示框数据series
  series: string[];
  //声明Y轴
  // yAxis: {} | [];
}

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
type ECOption = echarts.ComposeOption<
  | BarSeriesOption
  | LineSeriesOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>;

// 注册必须的组件
echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  LineChart,
  ToolboxComponent,
  VisualMapComponent,
]);

const Chart = (props: chart) => {
  const { theme, xAxis, title, series } = props;
  const option: ECOption = {
    // ...
    title: {
      text: title,
      left: "1%",
    },
    tooltip: {
      trigger: "axis",
    },
    grid: {
      left: "5%",
      right: "15%",
      bottom: "10%",
    },
    xAxis: {
      data: xAxis,
    },
    yAxis: {
      scale: true,
    },
    toolbox: {
      right: 10,
      feature: {
        restore: {},
        saveAsImage: {},
      },
    },
    visualMap: {
      top: 50,
      right: 10,
      pieces: [
        {
          gt: 0,
          lte: 50,
          color: "#93CE07",
        },
        {
          gt: 50,
          lte: 100,
          color: "#FBDB0F",
        },
        {
          gt: 100,
          lte: 150,
          color: "#FC7D02",
        },
        {
          gt: 150,
          lte: 200,
          color: "#FD0100",
        },
        {
          gt: 200,
          lte: 300,
          color: "#AA069F",
        },
        {
          gt: 300,
          color: "#AC3B2A",
        },
      ],
      outOfRange: {
        color: "#999",
      },
    },
    series: {
      name: title,
      type: "line",
      data: series,
      markLine: {
        silent: true,
        lineStyle: {
          color: "#333",
        },
        data: [
          {
            yAxis: 50,
          },
          {
            yAxis: 100,
          },
          {
            yAxis: 150,
          },
          {
            yAxis: 200,
          },
          {
            yAxis: 300,
          },
        ],
      },
    },
  };
  useEffect(() => {
    let chart: echarts.ECharts;
    chart = echarts.init(
      document.getElementById("chart-container") as HTMLElement,
      theme,
      {
        width: undefined,
        height: undefined,
      }
    );
    chart.setOption(option);
    window.addEventListener("resize", (e: any) => {
      chart.resize();
    });
    return () => {
      chart.clear();
      chart.dispose();
      window.removeEventListener("resize", () => {});
    };
  }, [props]);
  return (
    <div style={{ width: "100%", height: "100%" }} id="chart-container"></div>
  );
};
export default Chart;
