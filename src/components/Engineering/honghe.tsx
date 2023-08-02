import { useEffect, useState } from "react";
import { Color,Cartesian3 } from "cesium";
import hongheData from "../../assets/datas/engineering/honghe.json";
import Model from "../Model/Model";
import Polygon from "../Polygon/Polygon";
let data :any[];
data = []
hongheData.features.map(item => {
    data.push(item.geometry)
})
let modalIndex = 0;
const returnSrc = (index:number) =>{
  return `http://43.142.17.108:9200/static/honghe/04-${index}红河段带平面图.jpg`
}

const Honghe = () => {
  const [modelVis, setModelVis] = useState({
    honghe: false,
  });
  const [mouseIn, setMouseIn] = useState({
    honghe: false,
  });
  const [index,setIndex] = useState({
    index:-1
  })
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

  const { honghe} = mouseIn;
  return (
    <>
        {data &&
        data.map((value: any, index: any) => {
          return (
          <Polygon
            data={value}
            material={honghe ? Color.YELLOW : Color.ROYALBLUE}
            stroke={honghe ? Color.YELLOW : Color.ROYALBLUE}
            strokeWidth={10}
            onClick={() => {
              modalIndex = index
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
          )
        })}
          {modelVis.honghe ?<Model
            src={returnSrc(modalIndex + 1)}
            visible={modelVis.honghe}
            onClose={(e) => {
              e.stopPropagation();
              setModelVis((pre) => {
                return { ...pre, honghe: false };
              });
            }}
          ></Model> : undefined}
    </>
          )}

export default Honghe;