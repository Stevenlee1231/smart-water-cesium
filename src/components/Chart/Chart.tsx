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
  // data: {} | [];
  //声明X轴，
  xAxis: string[];
  //声明提示框数据series
  series: string[];
  //声明Y轴
  //声明曲线类型
  lineType:"bar" | "line";
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
  const {xAxis, title, series, lineType} = props;
  const realXAxis:any[] = [];
  const realSeries:any[] = [];
  xAxis.forEach(function(item, index) {
    if (series[index] !== 'null'){
      realXAxis.push(item);
      realSeries.push(series[index]);
    }
  })
  const option: ECOption = {
    // ...
    title: {
      text: title,
      textAlign:'left',
    },
    legen:{

    },
    tooltip: {
    },
    grid: {
    },
    xAxis: {
      data: realXAxis,
    },
    yAxis: {
    },
    toolbox: {
    },
    dataZoom: [
      {
        show: true,
        realtime: true,
        start: 0,
        end: 100,
        xAxisIndex: [0, 1],
      },
      {
        type: "slider",
        height:10,
        bottom:35,
        realtime: true,
        start: 30,
        end: 70,
        xAxisIndex: [0, 1],
        handleSize:'60%'
      },
    ],
    series: {
      name: title,
      type: lineType,
      data: realSeries,
    },
  };

  useEffect(() => {
    let chart:any;
    chart = echarts.getInstanceByDom(document.getElementById("chart-container") as HTMLElement);
    if (chart === undefined)
      chart = echarts.init(document.getElementById("chart-container") as HTMLElement)
    else
      chart.clear();
    chart.setOption(option);
    // return () => {
    //   chart.clear();
    //   chart.dispose();
    // };
  }, [title]);// eslint-disable-line
  return (
    <div style={{left:20, width: 500 , height: 300 }} id="chart-container"></div>
  );
};
export default Chart;
