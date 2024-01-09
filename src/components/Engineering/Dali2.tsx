import { useEffect, useState } from "react";
import { Color,Cartesian3 } from "cesium";
import dali_area from "../../assets/datas/engineering/dali2.json";
import Model from "../Model/Model";
import Polygon from "../Polygon/Polygon";
let modalIndex = 0;
const returnSrc = (index:number) =>{
  return `http://43.142.99.61:9200/static/dali2/%E6%BB%87%E4%B8%AD%E5%88%9D%E6%AD%A5%E8%AE%BE%E8%AE%A1%E5%B9%B3%E9%9D%A2%E5%9B%BE%E7%AC%AC`+index+`%E5%B9%85.jpg`
}
const Dali2 = () => {
  const [modelVis, setModelVis] = useState({
    dali: false,
  });
  const [mouseIn, setMouseIn] = useState({
    dali: false,
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

  const { dali} = mouseIn;
  return (
    <>
        {dali_area &&
        dali_area.map((value: any, index: any) => {
          return (
          <Polygon
            data={value}
            material={dali ? Color.YELLOW : Color.ROYALBLUE}
            stroke={dali ? Color.YELLOW : Color.ROYALBLUE}
            strokeWidth={10}
            onClick={() => {
              modalIndex = index
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
          )
        })}
          {modelVis.dali ?<Model
            src={returnSrc(modalIndex + 1)}
            visible={modelVis.dali}
            onClose={(e) => {
              e.stopPropagation();
              setModelVis((pre) => {
                return { ...pre, dali: false };
              });
            }}
          ></Model> : undefined}
    </>
          )}

export default Dali2;
