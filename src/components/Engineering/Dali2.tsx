import { useEffect, useState } from "react";
import { Color,Cartesian3 } from "cesium";
import dali_area from "../../assets/datas/engineering/dali2New.json";
import Model from "../Model/Model";
import Polygon from "../Polygon/Polygon";

// let dali2Data: any[] = [];
// const obj = dali_area.geometries;
// for (let i = 0; i < obj.length; i++) {
//   let coo = obj[i].coordinates;
//   for (let j = 0; j < coo.length; j++) {
//     let data = coo[j]
//     let temp = []
//     for (let k = 0; k < data.length; k++){
//       temp.push(Cartesian3.fromDegrees(data[k][0], data[k][1], 0));
//     }
//     dali2Data.push(temp);
//   }
// }
let modalIndex = 0;
const returnSrc = (index:number) =>{
  console.log(index)
  return `http://43.142.17.108:9200/static/dali2/%E6%BB%87%E4%B8%AD%E5%88%9D%E6%AD%A5%E8%AE%BE%E8%AE%A1%E5%B9%B3%E9%9D%A2%E5%9B%BE%E7%AC%AC`+index+`%E5%B9%85.jpg`
}
// const dali2Data = dali_area.geometries.map((obj) => {
//   return obj.coordinates.map((value) => {
//     return Cartesian3.fromDegrees(value[0], value[1], 0);
//   });
// });
// let dali2Positions: Array<any> = [];
// dali_area.geometries.map((value) => {
//   let temp: Array<any> = [];
//   value.coordinates.slice(-1)[0].map((value) => {
//     return temp.push(value);
//   });
//   dali2Positions.push(temp);
// });
const Dali2_3 = () => {
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

export default Dali2_3;
