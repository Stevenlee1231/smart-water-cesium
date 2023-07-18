import { useEffect, useState } from "react";
import {  Color } from "cesium";
import honghe_area from "../../assets/datas/honghe_area.json";
import Model from "../Model/Model";
import Polygon from "../Polygon/Polygon";
const  Honghe= () => {
  const [modelVis, setModelVis] = useState({
    honghe: false,
  });
  const [mouseIn, setMouseIn] = useState({
    honghe: false,
  });
  useEffect(() => {
    const modelRes = Object.values(modelVis).filter((value) => {
      return value === true;
    });
    const mouseRes= Object.values(mouseIn).filter((value) => {
      return value === true;
    });
    if (modelRes.length >= 1 || mouseRes.length>=1  && document.body.style.cursor != "pointer") {
      document.body.style.cursor = "pointer";
    } else {
      document.body.style.cursor = "auto";
    }
  }, [modelVis]);

  const { honghe} = mouseIn;
  return (
    <>
      {
        <>
          <Polygon
            data={honghe_area}
            material={honghe ? Color.DEEPPINK : Color.ROYALBLUE}
            stroke={honghe ? Color.DEEPPINK : Color.ROYALBLUE}
            strokeWidth={5}
            onClick={() => {
              setMouseIn({honghe:false})
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
              if (!mouseIn.honghe) return;
              document.body.style.cursor = "auto";
              setMouseIn((pre) => {
                return { ...pre, honghe: false };
              });
            }}
          ></Polygon>
          <Model
            src={"https://mld-1305939785.cos.ap-nanjing.myqcloud.com/honghe.jpg"}
            visible={modelVis.honghe}
            onClose={(e) => {
              e.stopPropagation();
              setModelVis((pre) => {
                return { ...pre, honghe: false };
              });
            }}
          ></Model>
        </>
      }
    </>
  );
};
export default Honghe;
