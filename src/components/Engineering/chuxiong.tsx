import { useEffect, useState } from "react";
import { Color,Cartesian3 } from "cesium";
import chuxiongData from "../../assets/datas/engineering/chuxiong.json";
import Model from "../Model/Model";
import Polygon from "../Polygon/Polygon";
let data :any[];
data = []
chuxiongData.features.map(item => {
    data.push(item.geometry)
})
let modalIndex = 0;
const returnSrc = (index:number) =>{
  return `http://43.142.99.61:9200/static/chuxiong/1-${index}楚雄段5000平面图.jpg`
}

const Chuxiong = () => {
  const [modelVis, setModelVis] = useState({
    chuxiong: false,
  });
  const [mouseIn, setMouseIn] = useState({
    chuxiong: false,
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

  const { chuxiong} = mouseIn;
  return (
    <>
        {data &&
        data.map((value: any, index: any) => {
          return (
          <Polygon
            data={value}
            material={chuxiong ? Color.YELLOW : Color.ROYALBLUE}
            stroke={chuxiong ? Color.YELLOW : Color.ROYALBLUE}
            strokeWidth={10}
            onClick={() => {
              modalIndex = index
              setMouseIn({chuxiong:false})
              setModelVis((pre) => {
                return { ...pre, chuxiong: true };
              });
            }}
            mouseEnter={() => {
              if (mouseIn.chuxiong) return;
              document.body.style.cursor = "pointer";
              setMouseIn((pre) => {
                return { ...pre, chuxiong: true };
              });
            }}
            mouseLeave={() => {
              if (!mouseIn.chuxiong) return;
              document.body.style.cursor = "auto";
              setMouseIn((pre) => {
                return { ...pre, chuxiong: false };
              });
            }}
          ></Polygon>
          )
        })}
          {modelVis.chuxiong ?<Model
            src={returnSrc(modalIndex + 1)}
            visible={modelVis.chuxiong}
            onClose={(e) => {
              e.stopPropagation();
              setModelVis((pre) => {
                return { ...pre, chuxiong: false };
              });
            }}
          ></Model> : undefined}
    </>
          )}

export default Chuxiong;