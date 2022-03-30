import { Tabs, Radio } from "antd";
import { useEffect, useState } from "react";
import "./MountainCard.scss";
const { TabPane } = Tabs;
const mountain_visible_init = {
  model_area: true,
  //Simulatewaterlevel 模拟水位swl简写
  //丰水期
  SWLF: false,
  //枯水期
  SWLK: false,
  //丰水期裸洞开挖
  SWLLF: false,
  //枯水期裸洞开挖
  SWLLK: false,
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
  { label: "枯水期", value: "SWLK" },
  { label: "丰水期", value: "SWLF" },
  { label: "枯水期裸洞开挖", value: "SWLLK" },
  { label: "丰水期裸洞开挖", value: "SWLLF" },
];
const WB_options = [
  { label: "枯水期", value: "WBK" },
  { label: "丰水期", value: "WBF" },
  { label: "枯水期裸洞开挖", value: "WBLK" },
  { label: "丰水期裸洞开挖", value: "WBLF" },
];
interface mountainCard {
  mode: string;
}
const MountainCard = (props: mountainCard) => {
  const [mountainVisibleInit, setMountainVisibleInit] = useState(
    mountain_visible_init
  );
  const handleRadio=(e:any)=>{
    const key=e.target.value
    setMountainVisibleInit((prev)=>{
      return {...prev,[key]:true}
    })
  }
  useEffect(()=>{
    console.log(mountainVisibleInit)
  },[mountainVisibleInit])
  return (
    <div className="mountain-card-wrap">
      <Tabs
        defaultActiveKey="model_area"
        onChange={(e) => {
          if(e=="model_area"){
            setMountainVisibleInit(mountain_visible_init)
          }else{
            setMountainVisibleInit((prev)=>{
              return {...prev,model_area:false}
            })
          }
        }}
      >
        <TabPane tab="模型范围" key="model_area">
          显示模型范围
        </TabPane>
        <TabPane tab="模拟水位" key="2">
          <Radio.Group
            options={SWL_options}
            optionType="button"
            buttonStyle="solid"
            onChange={handleRadio}
          />
        </TabPane>
        <TabPane tab="水均衡" key="3">
          <Radio.Group
            options={WB_options}
            optionType="button"
            buttonStyle="solid"
            onChange={handleRadio}
          />
        </TabPane>
      </Tabs>
    </div>
  );
};
export default MountainCard;
