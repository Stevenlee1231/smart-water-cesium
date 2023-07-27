import { Tabs, Radio, Checkbox } from "antd";
import { useEffect, useState } from "react";
import { Cartesian3, Color } from "cesium";
import { stratum } from "../../assets/datas/mountain_tif";
import dali_area from "../../assets/datas/dali_area.json";
import honghe_area from "../../assets/datas/honghe_area.json";
import yuxi_area from "../../assets/datas/yuxi_area.json";
import model_area_data from "../../assets/datas/model_area.json";
import Loadtif from "../Loadtif/Loadtif";
import Image from "rc-image";
import Model from "../Model/Model";
import Polygon from "../Polygon/Polygon";
import Dali from "../Stratum/Dali";
import Dali2_2 from "./Dali2_2";
import Dali2 from "./Dali2";
import Dali2_m from "./Dali2_m";
import Dali2_n from "./Dali2_n";
import Dali2_l from "./Dali2_l";
import Chuxiong_1 from "./Chuxiong_1";
import Chuxiong_2 from "./Chuxiong_2";
import Chuxiong_3 from "./Chuxiong_3";
import Honghe from "../Stratum/Honghe";
import Yuxi from "../Stratum/Yuxi";
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
          {/* <Dali></Dali>
          <Yuxi></Yuxi>
          <Honghe></Honghe> */}
          {/* <Dali2_2></Dali2_2>
          {/* <Dali2_m></Dali2_m> */}
          <Dali2></Dali2>
          <Dali2_n></Dali2_n> {/* 大理一段*/}
          <Dali2_l></Dali2_l> 
          <Chuxiong_1></Chuxiong_1>
          <Chuxiong_2></Chuxiong_2>
          {/* <Chuxiong_3></Chuxiong_3>        */}
          {/* <Polygon
            data={dali_area}
            material={dali ? Color.DEEPPINK : Color.ROYALBLUE}
            stroke={dali ? Color.DEEPPINK : Color.ROYALBLUE}
            strokeWidth={5}
            onClick={() => {
              setModelVis((pre) => {
                return { ...pre, dali: true };
              });
            }}
            mouseEnter={() => {
              if (mouseIn.dali) return;
              document.body.style.cursor = "pointer";
              setMouseIn((pre) => {
                return { ...pre, dali: true };
              });
            }}
            mouseLeave={() => {
              document.body.style.cursor = "auto";
              setMouseIn((pre) => {
                return { ...pre, dali: false };
              });
            }}
          ></Polygon>
          <Polygon
            data={yuxi_area}
            material={yuxi ? Color.DEEPPINK : Color.ROYALBLUE}
            stroke={yuxi ? Color.DEEPPINK : Color.ROYALBLUE}
            strokeWidth={5}
            onClick={() => {
              setModelVis((pre) => {
                return { ...pre, yuxi: true };
              });
            }}
            mouseEnter={() => {
              if (mouseIn.yuxi) return;
              document.body.style.cursor = "pointer";
              setMouseIn((pre) => {
                return { ...pre, yuxi: true };
              });
            }}
            mouseLeave={() => {
              document.body.style.cursor = "auto";
              setMouseIn((pre) => {
                return { ...pre, yuxi: false };
              });
            }}
          ></Polygon>
          <Polygon
            data={honghe_area}
            material={honghe ? Color.DEEPPINK : Color.ROYALBLUE}
            stroke={honghe ? Color.DEEPPINK : Color.ROYALBLUE}
            strokeWidth={5}
            onClick={() => {
              setModelVis((pre) => {
                return { ...pre, honghe: true };
              });
            }}
            mouseEnter={() => {
              if (mouseIn.honghe) return;
              document.body.style.cursor = "pointer";
              setMouseIn((pre) => {
                return { ...pre, honghe: true };
              });
            }}
            mouseLeave={() => {
              document.body.style.cursor = "auto";
              setMouseIn((pre) => {
                return { ...pre, honghe: false };
              });
            }}
          ></Polygon>
          <Model
            src={"https://mld-1305939785.cos.ap-nanjing.myqcloud.com/dali.jpg"}
            visible={modelVis.dali}
            onClose={(e) => {
              e.stopPropagation();
              setModelVis((pre) => {
                return { ...pre, dali: false };
              });
            }}
          ></Model>
          <Model
            src={"https://mld-1305939785.cos.ap-nanjing.myqcloud.com/yuxi.jpg"}
            visible={modelVis.yuxi}
            onClose={(e) => {
              e.stopPropagation();
              setModelVis((pre) => {
                return { ...pre, yuxi: false };
              });
            }}
          ></Model>
          <Model
            src={
              "https://mld-1305939785.cos.ap-nanjing.myqcloud.com/honghe.jpg"
            }
            visible={modelVis.honghe}
            onClose={(e) => {
              e.stopPropagation();
              setModelVis((pre) => {
                return { ...pre, honghe: false };
              });
            }}
          ></Model> */}
        </>
      }
    </>
  );
};
export default Engineeing;
