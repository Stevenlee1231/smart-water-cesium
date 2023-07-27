import { Tabs, Radio,Button } from "antd";
import { useState } from "react";
import { Cartesian3, Color, defaultValue } from "cesium";
import Model from "../Model/Model";
import {
  mountains,
} from "../../assets/datas/mountain_tif";
import model_area_data from "../../assets/datas/model_area4.json";
import Loadtif from "../Loadtif/Loadtif";
import Polygon from "../Polygon/Polygon";
import "./MountainCard.scss";
import React from "react";
import { CameraFlyTo,Camera } from "resium"
const { TabPane } = Tabs;
const mountain_visible_init = {
  model_area: false,
  //Simulatewaterlevel 模拟水位swl简写
  //丰水期
  g1: false,
  //枯水期
  g2: false,
  //丰水期裸洞开挖
  g3: false,
  //枯水期裸洞开挖
  g4: false,
  g5:false,
  //water balance  水均衡wb简写
  //丰水期
  WBF: false,
  //枯水期
  WBK: false,
  //丰水期裸洞开挖
  WBLF: false,
  //枯水期裸洞开挖
  WBLK: false,
};
const SWL_options = [
  { label: "工况一", value: "g1" },
  { label: "工况二", value: "g2" },
  { label: "工况三", value: "g3" },
  { label: "工况四", value: "g4" },
  { label: "工况五", value: "g5" },
];
const WB_options = [
  { label: "枯水期", value: "WBK" },
  { label: "丰水期", value: "WBF" },
  { label: "枯水期裸洞开挖", value: "WBLK" },
  { label: "丰水期裸洞开挖", value: "WBLF" },
];
const Mycontext = React.createContext(defaultValue);
interface mountainCard {
  mode: string;
}
const returnSrc = (index:number) =>{
  return `http://43.142.17.108:9200/static/xianglushan/4/`+index+`.png`
}
let index:any;
const MountainCard4 = (props: mountainCard) => {
  const [modelVis, setModelVis] = useState({
    model: false,
  });
  const [mountainVisible, setMountainVisible] = useState({
    ...mountain_visible_init,
    model_area: true,
  });
  console.log(model_area_data)
const click1 = (e:any) => {
  index = 1;
  setModelVis((pre) => {
    return { ...pre, model: true };
  });
}
const click2 = (e:any) => {
  index = 2;
  setModelVis((pre) => {
    return { ...pre, model: true };
  });
}
const click3 = (e:any) => {
  index = 3;
  setModelVis((pre) => {
    return { ...pre, model: true };
  });
}
const click4 = (e:any) => {
  index = 4;
  setModelVis((pre) => {
    return { ...pre, model: true };
  });
}
const click5 = (e:any) => {
  index = 5;
  setModelVis((pre) => {
    return { ...pre, model: true };
  });
}
const click6 = (e:any) => {
    index = 6;
    setModelVis((pre) => {
      return { ...pre, model: true };
    });
  }
  // const handleRadio = (e: any) => {
  //   key = e.target.value;
  //   setMountainVisible((prev) => {
  //     return { ...mountain_visible_init, [key]: true };
  //   });
  // };
  const BASE_URL =
    process.env.NODE_ENV === "development"
      ? "/api"
      : "http://103.118.40.123:9999";
  return (
    <>
      <div className="mountain-card-wrap">
      <CameraFlyTo
            destination={
                Cartesian3.fromDegrees(100.053408,26.685801,100000)
            }
          ></CameraFlyTo>
        <Tabs
          style={{bottom:50}}
          defaultActiveKey="model_area"
          // onChange={(e) => {
          //   setMountainVisible(mountain_visible_init)
          //   if (e == "model_area") {
          //     model_area =  true;
          //   } else {
          //     setMountainVisible((prev) => {
          //       return { ...prev, model_area: true };
          //     });
          //   }
          // }}
        >
          <TabPane tab="模型范围" key="model_area">
            模型范围
          </TabPane>
          <TabPane tab="模拟水位" key="2">
            <Button style={{height:30}} 
            onClick={click1}
            >工况一</Button>
            <Button style={{height:30}} onClick={click2}>工况二</Button>
            <Button style={{height:30}} onClick={click3}>工况三</Button>
            <Button style={{height:30}} onClick={click4}>工况四</Button>
            <Button style={{height:30}} onClick={click5}>工况五</Button>
            <Button style={{height:30}} onClick={click6}>工况六</Button>
            {/* <Radio.Group
              options={SWL_options}
              optionType="button"
              buttonStyle="solid"
              onChange={handleRadio}
              onClick={() => {
                index = key
                setModelVis((pre) => {
                  return { ...pre, model: true };
                });
              }}
            /> */}
          </TabPane>
          {/* <TabPane tab="水均衡" key="3">
            <Radio.Group
              options={WB_options}
              optionType="button"
              buttonStyle="solid"
              onChange={handleRadio}
            />
          </TabPane> */}
        </Tabs>
      </div>
      {
        <>
          {/* 模型范围 */}
          {mountainVisible.model_area && (
            <Polygon
              data={model_area_data}
              material={Color.RED}
              stroke={Color.RED}
              strokeWidth={5}
            ></Polygon>
          )}
          {modelVis.model ? <Model
            src={returnSrc(index)}
            visible={modelVis.model}
            onClose={(e) => {
              e.stopPropagation();
              setModelVis((pre) => {
                return { ...pre, model: false };
              });
            }}
          ></Model> : undefined}
        </>
      }
    </>
  );
};
export default MountainCard4;
