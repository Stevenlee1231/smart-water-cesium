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
  LegendComponent,
  DataZoomComponent
} from "echarts/components";
import { LabelLayout, UniversalTransition } from "echarts/features";
import { CanvasRenderer } from "echarts/renderers";
import { useEffect } from "react";
import datas from "../../assets/chartData/weather/datas"
import { LegendComponentOption } from "echarts";
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

const time = datas.time
const evaporation1 = datas.xaxis[0]
const rainfull1 = datas.xaxis[1]
const evaporation2 = datas.xaxis[2]
const rainfull2 = datas.xaxis[3]
const evaporation3 = datas.xaxis[4]
const rainfull3 = datas.xaxis[5]
const evaporation4 = datas.xaxis[6]
const rainfull4 = datas.xaxis[7]
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
  LegendComponent,
  DataZoomComponent
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
      boxShadow:'rgb(128, 128, 128)',
      orient: 'vertical',
      left: 100,
      top: 30,
      bottom: 20,
      textStyle:{fontSize : 10},
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
    series: [{
      name: "蔡家村隧洞降雨与蒸发自动监测站日蒸发",
      type: "bar",
      data: evaporation1,
    },
      {
        name: "昆呈隧洞标石柱气象自动监测点日蒸发",
        type: "bar",
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
        textStyle:{fontSize : 10},
        show:true,
        data:["蔡家村隧洞降雨与蒸发自动监测站日降雨","昆呈隧洞标石柱气象自动监测点日降雨"]
    },
    grid: {
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
        type: "bar",
        data: rainfull1,
      },
      {
        name: "昆呈隧洞标石柱气象自动监测点日降雨",
        type: "bar",
        data: rainfull2,
      },
    ]
  };
  const option3: ECOption = {
    // ...
    title: {
      text: "香炉山隧洞/柳家村隧洞自动监测站日蒸发图",
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
      textStyle:{fontSize : 10},
      show:true,
        data:["香炉山隧洞降雨与蒸发自动监测站日蒸发","柳家村隧洞标石柱气象自动监测站日蒸发"]
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
    series: [{
      name: "香炉山隧洞降雨与蒸发自动监测站日蒸发",
      type: "bar",
      data: evaporation3,
    },
      {
        name: "柳家村隧洞标石柱气象自动监测站日蒸发",
        type: "bar",
        data: evaporation4,
      },
    ]
  };
  const option4: ECOption = {
    // ...
    title: {
      text: "香炉山隧洞/柳家村隧洞自动监测站日降雨图",
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
        textStyle:{fontSize : 10},
        show:true,
        data:["香炉山隧洞降雨与蒸发自动监测站日降雨","柳家村隧洞标石柱气象自动监测站日降雨"]
    },
    grid: {
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
    xAxis: {
        data: time,
    },
    yAxis: {
    },
    toolbox: {
    },
    series: [
    {
        name: "香炉山隧洞降雨与蒸发自动监测站日降雨",
        type: "bar",
        data: rainfull3,
      },
      {
        name: "柳家村隧洞标石柱气象自动监测站日降雨",
        type: "bar",
        data: rainfull4,
      },
    ]
  };
  useEffect(() => {
    let chart1:any;
    let chart2:any;
    let chart3:any;
    let chart4:any;
    // chart = echarts.getInstanceByDom(document.getElementById("chart-container") as HTMLElement);
    // if (chart === undefined)
    //   chart = echarts.init(document.getElementById("chart-container") as HTMLElement)
    // else
    //   chart.clear();
    chart1 = echarts.init(document.getElementById("chart-container1") as HTMLElement)
    chart2 = echarts.init(document.getElementById("chart-container2") as HTMLElement)
    chart3 = echarts.init(document.getElementById("chart-container3") as HTMLElement)
    chart4 = echarts.init(document.getElementById("chart-container4") as HTMLElement)
    chart1.setOption(option1);
    chart2.setOption(option2);
    chart3.setOption(option3);
    chart4.setOption(option4);
    // return () => {
    //   chart.clear();
    //   chart.dispose();
    // };
  },);// eslint-disable-line
  return (
    <div>
      <div style={{ right:20, width: 600 , height: 300 }} id="chart-container1"></div>
      <div style={{ right:20, width: 600 , height: 300 }} id="chart-container2"></div>
      <div style={{ right:20, width: 600 , height: 300 }} id="chart-container3"></div>
      <div style={{ right:20, width: 600 , height: 300 }} id="chart-container4"></div>
    </div>
    
  );
};
export default Weather;