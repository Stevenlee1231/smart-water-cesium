import { Tabs, Radio } from "antd";
import { useState } from "react";
import { Color } from "cesium";
import { developmet_mountain } from "../../assets/datas/mountain_tif";
import model_area_data from "../../assets/datas/model_area.json";
import Loadtif from "../Loadtif/Loadtif";
import Polygon from "../Polygon/Polygon";
import "./MountainCard.scss";
const { TabPane } = Tabs;
const mountain_visible_init = {
  model_area: false,
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
  const [mountainVisible, setMountainVisible] = useState({
    ...mountain_visible_init,
    model_area: true,
  });
  const handleRadio = (e: any) => {
    const key = e.target.value;
    setMountainVisible((prev) => {
      return { ...mountain_visible_init, [key]: true };
    });
  };
  return (
    <>
      <div className="mountain-card-wrap">
        <Tabs
          defaultActiveKey="model_area"
          onChange={(e) => {
            if (e == "model_area") {
              setMountainVisible(mountain_visible_init);
            } else {
              setMountainVisible((prev) => {
                return { ...prev, model_area: false };
              });
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
      {
        <>
          {mountainVisible.model_area && (
            <Polygon
              data={model_area_data}
              material={Color.RED}
              stroke={Color.RED}
              strokeWidth={5}
            ></Polygon>
          )}

          <Loadtif
            url={developmet_mountain.SWLF}
            visible={mountainVisible.SWLF}
          ></Loadtif>
          <Loadtif
            url={developmet_mountain.SWLK}
            visible={mountainVisible.SWLK}
          ></Loadtif>
          <Loadtif
            url={developmet_mountain.SWLLF}
            visible={mountainVisible.SWLLF}
          ></Loadtif>
          <Loadtif
            url={developmet_mountain.SWLLK}
            visible={mountainVisible.SWLLK}
          ></Loadtif>
        </>
      }
    </>
  );
};
export default MountainCard;
