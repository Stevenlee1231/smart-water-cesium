import { useEffect, useState } from "react";
import { Cartesian3, Color } from "cesium";
import yuxi_area from "../../assets/datas/yuxi_area.json";
import Model from "../Model/Model";
import Polygon from "../Polygon/Polygon";
const Yuxi = () => {
  const [modelVis, setModelVis] = useState({
    yuxi: false,
  });
  const [mouseIn, setMouseIn] = useState({
    yuxi: false,
  });
  useEffect(() => {
    const modelRes = Object.values(modelVis).filter((value) => {
      return value === true;
    });
    const mouseRes= Object.values(mouseIn).filter((value) => {
      return value === true;
    });
    if (modelRes.length >= 1 || mouseRes.length>=1 && document.body.style.cursor != "pointer") {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "auto";
    }
  }, [modelVis,mouseIn]);

  const { yuxi} = mouseIn;
  return (
    <>
      {
        <>
          <Polygon
            data={yuxi_area}
            material={yuxi ? Color.DEEPPINK : Color.ROYALBLUE}
            stroke={yuxi ? Color.DEEPPINK : Color.ROYALBLUE}
            strokeWidth={5}
            onClick={() => {
              setMouseIn({yuxi:false})
              setModelVis((pre) => {
                return { ...pre, yuxi: true };
              });
            }}
            mouseEnter={() => {
              if (mouseIn.yuxi) return;
              // document.body.style.cursor = "pointer";
              setMouseIn((pre) => {
                return { ...pre, yuxi: true };
              });
            }}
            mouseLeave={() => {
              if (!mouseIn.yuxi) return;
              // document.body.style.cursor = "auto";
              setMouseIn((pre) => {
                return { ...pre, yuxi: false };
              });
            }}
          ></Polygon>
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
        </>
      }
    </>
  );
};
export default Yuxi;
