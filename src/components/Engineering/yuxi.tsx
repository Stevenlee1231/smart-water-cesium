import { useEffect, useState } from "react";
import { Color,Cartesian3 } from "cesium";
import yuxiData from "../../assets/datas/engineering/yuxi.json";
import Model from "../Model/Model";
import Polygon from "../Polygon/Polygon";
let data :any[];
data = []
yuxiData.features.map(item => {
    data.push(item.geometry)
})
let modalIndex = 0;
const returnSrc = (index:number) =>{
  return `http://43.142.99.61:9200/static/yuxi/`+index+`.jpg`
}

const Yuxi = () => {
  const [modelVis, setModelVis] = useState({
    yuxi: false,
  });
  const [mouseIn, setMouseIn] = useState({
    yuxi: false,
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

  const { yuxi} = mouseIn;
  return (
    <>
        {data &&
        data.map((value: any, index: any) => {
          return (
          <Polygon
            data={value}
            material={yuxi ? Color.YELLOW : Color.ROYALBLUE}
            stroke={yuxi ? Color.YELLOW : Color.ROYALBLUE}
            strokeWidth={10}
            onClick={() => {
              modalIndex = index
              setMouseIn({yuxi:false})
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
              if (!mouseIn.yuxi) return;
              document.body.style.cursor = "auto";
              setMouseIn((pre) => {
                return { ...pre, yuxi: false };
              });
            }}
          ></Polygon>
          )
        })}
          {modelVis.yuxi ?<Model
            src={returnSrc(modalIndex + 1)}
            visible={modelVis.yuxi}
            onClose={(e) => {
              e.stopPropagation();
              setModelVis((pre) => {
                return { ...pre, yuxi: false };
              });
            }}
          ></Model> : undefined}
    </>
          )}

export default Yuxi;