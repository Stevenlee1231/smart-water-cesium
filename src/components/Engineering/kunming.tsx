import { useEffect, useState } from "react";
import { Color,Cartesian3 } from "cesium";
import kunmingData from "../../assets/datas/engineering/kunming.json";
import Model from "../Model/Model";
import Polygon from "../Polygon/Polygon";
let data :any[];
data = []
kunmingData.features.map(item => {
    data.push(item.geometry)
})
let modalIndex = 0;
const returnSrc = (index:number) =>{
  return `http://43.142.17.108:9200/static/kunming/1-${index}%E6%98%86%E6%98%8E%E6%AE%B51%EF%BC%9A5000%E5%B7%A5%E7%A8%8B%E5%9C%B0%E8%B4%A8%E5%9B%BE.jpg`
}

const Kunming = () => {
  const [modelVis, setModelVis] = useState({
    kunming: false,
  });
  const [mouseIn, setMouseIn] = useState({
    kunming: false,
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

  const { kunming} = mouseIn;
  return (
    <>
        {data &&
        data.map((value: any, index: any) => {
          return (
          <Polygon
            data={value}
            material={kunming ? Color.YELLOW : Color.ROYALBLUE}
            stroke={kunming ? Color.YELLOW : Color.ROYALBLUE}
            strokeWidth={10}
            onClick={() => {
              modalIndex = index
              setMouseIn({kunming:false})
              setModelVis((pre) => {
                return { ...pre, kunming: true };
              });
            }}
            mouseEnter={() => {
              if (mouseIn.kunming) return;
              document.body.style.cursor = "pointer";
              setMouseIn((pre) => {
                return { ...pre, kunming: true };
              });
            }}
            mouseLeave={() => {
              if (!mouseIn.kunming) return;
              document.body.style.cursor = "auto";
              setMouseIn((pre) => {
                return { ...pre, kunming: false };
              });
            }}
          ></Polygon>
          )
        })}
          {modelVis.kunming ?<Model
            src={returnSrc(modalIndex + 1)}
            visible={modelVis.kunming}
            onClose={(e) => {
              e.stopPropagation();
              setModelVis((pre) => {
                return { ...pre, kunming: false };
              });
            }}
          ></Model> : undefined}
    </>
          )}

export default Kunming;