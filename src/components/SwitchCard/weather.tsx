import * as echarts from "echarts/core";
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

const time = ['2021.09.29', '2021.09.30', '2021.10.01', '2021.10.02', '2021.10.03', '2021.10.04', '2021.10.05', '2021.10.06', '2021.10.07', '2021.10.08']
const evaporation1 = [
    "2.2",
    "2.0",
    "2",
    "1.7",
    "2.4",
    "2.3",
    "2.5",
    "1.7",
    "1.8",
    "1.8"
  ]
const rainfull1 = [
    "2.69",
    "0.46",
    "0",
    "0",
    "0.09",
    "0",
    "0",
    "0",
    "0.07",
    "1.64"
  ]
const evaporation2 = [
    "2.2",
    "1.9",
    "2.8",
    "3.1",
    "2.3",
    "5.7",
    "4.9",
    "2.1",
    "2.6",
    "2.0"
  ]
const rainfull2 = [
    "2.69",
    "0.46",
    "0.2",
    "0",
    "0",
    "0",
    "0",
    "0",
    "0.8",
    "0"
  ]
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

const Weather = () => {
  const option1: ECOption = {
    // ...
    title: {
      text: "蔡家村隧洞/昆呈隧洞自动监测站日蒸发图",
      textAlign:'left',
    },
    tooltip: {
    },
    legend:{
        show:true,
        data:["蔡家村隧洞降雨与蒸发自动监测站日蒸发","昆呈隧洞标石柱气象自动监测点日蒸发"]
    },
    grid: {
    },
    xAxis: {
        data: time,
    },
    yAxis: {
    },
    toolbox: {
    },
    series: [{
      name: "蔡家村隧洞降雨与蒸发自动监测站日蒸发",
      type: "line",
      data: evaporation1,
    },
      {
        name: "昆呈隧洞标石柱气象自动监测点日蒸发",
        type: "line",
        data: evaporation2,
      },
    ]
  };
  const option2: ECOption = {
    // ...
    title: {
      text: "蔡家村隧洞/昆呈隧洞自动监测站日降雨图",
      textAlign:'left',
    },
    tooltip: {
    },
    legend:{
        boxShadow:'rgb(128, 128, 128)',
        orient: 'vertical',
        left: 100,
        top: 30,
        bottom: 20,
        textStyle:{fontSize : 5},
        show:true,
        data:["蔡家村隧洞降雨与蒸发自动监测站日蒸发","蔡家村隧洞降雨与蒸发自动监测站日降雨","昆呈隧洞标石柱气象自动监测点日蒸发","昆呈隧洞标石柱气象自动监测点日降雨"]
    },
    grid: {
    },
    xAxis: {
        data: time,
    },
    yAxis: {
    },
    toolbox: {
    },
    series: [
    {
        name: "蔡家村隧洞降雨与蒸发自动监测站日降雨",
        type: "line",
        data: rainfull1,
      },
      {
        name: "昆呈隧洞标石柱气象自动监测点日降雨",
        type: "line",
        data: rainfull2,
      },
    ]
  };
  useEffect(() => {
    let chart1:any;
    let chart2:any;
    // chart = echarts.getInstanceByDom(document.getElementById("chart-container") as HTMLElement);
    // if (chart === undefined)
    //   chart = echarts.init(document.getElementById("chart-container") as HTMLElement)
    // else
    //   chart.clear();
    chart1 = echarts.init(document.getElementById("chart-container1") as HTMLElement)
    chart2 = echarts.init(document.getElementById("chart-container2") as HTMLElement)
    chart1.setOption(option1);
    chart2.setOption(option2);
    // return () => {
    //   chart.clear();
    //   chart.dispose();
    // };
  },);// eslint-disable-line
  return (
    <div>
      <div style={{ right:20, width: 600 , height: 300 }} id="chart-container1"></div>
      <div style={{ right:20, width: 600 , height: 300 }} id="chart-container2"></div>
    </div>
    
  );
};
export default Weather;