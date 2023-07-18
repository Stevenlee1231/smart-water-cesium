import { useEffect, useState } from "react";
import { Color } from "cesium";
import dali_area from "../../assets/datas/dali_area.json";
import Model from "../Model/Model";
import Polygon from "../Polygon/Polygon";
const Dali = () => {
  const [modelVis, setModelVis] = useState({
    dali: false,
  });
  const [mouseIn, setMouseIn] = useState({
    dali: false,
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
  }, [modelVis]);

  const { dali} = mouseIn;
  return (
    <>
      {
        <>
          <Polygon
            data={dali_area}
            material={dali ? Color.DEEPPINK : Color.ROYALBLUE}
            stroke={dali ? Color.DEEPPINK : Color.ROYALBLUE}
            strokeWidth={10}
            onClick={() => {
              setMouseIn({dali:false})
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
              if (!mouseIn.dali) return;
              document.body.style.cursor = "auto";
              setMouseIn((pre) => {
                return { ...pre, dali: false };
              });
            }}
          ></Polygon>
          <Model
            src={"http://103.118.40.123:9999/yun/swdz.jpg"}
            visible={modelVis.dali}
            onClose={(e) => {
              e.stopPropagation();
              setModelVis((pre) => {
                return { ...pre, dali: false };
              });
            }}
          ></Model>
        </>
      }
    </>
  );
};
export default Dali;
