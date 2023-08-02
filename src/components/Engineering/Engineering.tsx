import { Tabs, Radio, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { Cartesian3, Color } from "cesium";
import Dali from './dali'
import Dali2 from "./dali2";
import Yuxi from "./yuxi";
import Kunming from "./kunming";
import Chuxiong from "./chuxiong";
import Honghe from './honghe'

import "./Stratum.scss";
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

const Engineeing = () => {
  const [modelVis, setModelVis] = useState({
    honghe: false,
    yuxi: false,
    dali: false,
  });
  const [mouseIn, setMouseIn] = useState({
    honghe: false,
    yuxi: false,
    dali: false,
  });
  useEffect(() => {
    const resBoolean = Object.values(modelVis).filter((value) => {
      return value === true;
    });
    if (resBoolean.length >= 1 && document.body.style.cursor != "pointer") {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "auto";
    }
  }, [modelVis]);
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
  const { dali, yuxi, honghe } = mouseIn;
  return (
    <>
      {
        // <>
        //   <CameraFlyTo
        //     duration={0}
        //     destination={Cartesian3.fromDegrees(101.075, 26.752, 1500000.0)}
        //   ></CameraFlyTo>
        //   <Loadtif
        //     url={`${BASE_URL}${stratum.dali}`}
        //     visible={true}
        //   ></Loadtif>
        //   <Loadtif
        //     url={`${BASE_URL}${stratum.yuxi}`}
        //     visible={true}
        //   ></Loadtif>
        // </>
        <>
          <CameraFlyTo
            duration={0}
            destination={
              {
                x: -1235477.0099878273,
                y: 6112028.233173981,
                z: 2888111.1876860037,
              } as Cartesian3
            }
          ></CameraFlyTo>
          <Dali></Dali>
          <Dali2></Dali2>
          <Yuxi></Yuxi>
          <Kunming></Kunming>
          <Chuxiong></Chuxiong>
          <Honghe></Honghe>
        </>
      }
    </>
  );
};
export default Engineeing;
