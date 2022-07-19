import { Tabs, Radio, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { Cartesian3, Color } from "cesium";
import { stratum } from "../../assets/datas/mountain_tif";
import model_area_data from "../../assets/datas/model_area.json";
import Loadtif from "../Loadtif/Loadtif";
import Polygon from "../Polygon/Polygon";
import "./StratumCard.scss";
import { CameraFlyTo } from "resium";
const { TabPane } = Tabs;
const stratum_visible_init = {
  dali: true,
  yuxi: true,
};
const stratum_options = [
  { label: "大理", value: "dali" },
  { label: "玉溪", value: "yuxi" },
];

const StratumCard = () => {
  // const [stratumVisible, setstratumVisible] = useState({
  //   ...stratum_visible_init,
  // });

  // setstratumVisible((prev) => {
  //   return { ...prev, [key]: true };
  // });

  const BASE_URL =
    process.env.NODE_ENV === "development"
      ? "/api"
      : "http://103.118.40.123:9999";
  return (
    <>
      {
        <>
          <CameraFlyTo
            duration={0}
            destination={Cartesian3.fromDegrees(101.075, 26.752, 1500000.0)}
          ></CameraFlyTo>
          <Loadtif
            url={`${BASE_URL}${stratum.dali}`}
            visible={true}
          ></Loadtif>
          <Loadtif
            url={`${BASE_URL}${stratum.yuxi}`}
            visible={true}
          ></Loadtif>
        </>
      }
    </>
  );
};
export default StratumCard;
