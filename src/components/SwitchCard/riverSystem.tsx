import { Cartesian2, Cartesian3, Color, Material, Math as CMath } from "cesium";
import * as Cesium from "cesium"
import { LabelCollection, Viewer } from "resium";
import Line from "../Line/Line";
import Text from "../Text/Text";
import branchHole from "../../assets/datas/zhidong.json";
import suidongData from "../../assets/datas/suidong.json";
import zhuxian from "../../assets/datas/zhuxian.json";
import riverSystems from  "../../assets/datas/riverSystem.json"
import { useEffect, useState } from "react";
export interface CardProps {
  earthInstance?: any;
  visible?: boolean;
}
let riverArray : any[];
riverArray = []
const json = riverSystems.features;
for (let i = 0; i < json.length; i++) {
  let array = json[i].geometry.coordinates;
  let temp = []
  for (let j = 0; j < array.length; j++){
    for (let k = 0; k < array[j].length; k++){
      temp.push(Cartesian3.fromDegrees(array[j][0][0], array[j][0][1], 0))
    }
  }
  riverArray.push(temp)
}
console.log(riverArray)
// const preZhuxianData = zhuxian.geometries.map((v) => {
//   return v.coordinates.reduce((pre, cur) => {
//     return pre.concat(cur);
//   }, []);
// });
// const zhuxianData: any[] = [];
// preZhuxianData.map((v) => {
//   v.map((v) => {
//     zhuxianData.push(v);
//   });
// });s
// for (let i = 0; i < riverSystems["features"].length; i++) {
//     let array = riverSystems["features"][i].geometry.coordinates;
//     for (let j = 0; j < array.length; j++) {
//         console.log(array[0])
//         console.log(111)
//         // Cartesian3.fromDegrees(Number(array[0]), Number(array[1]), 0)
//     }
// }
// const rivers = riverSystems.features.map((obj) =>{
//         return obj.geometry.coordinates.map((value) => {
//             console.log(value)
//             return Cartesian3.fromDegrees(Number(value[0]), Number(value[1]), 0);
//     })
// })
// const viewer = new Cesium.Viewer('cesiumContainer')
// console.log(Cesium.GeoJsonDataSource.load(riverSystems))
// viewer.dataSources.add(Cesium.GeoJsonDataSource.load(riverSystems));
// const arr = []
// const objArr = riverSystems["features"];
// console.log(objArr[1]["name"])
// for (let i = 0; i < objArr.length; i++) {
//   let objArr2 = objArr[i].geometry.coordinates[0];
//   for (let i = 0; i < 1; i++){
//     arr.push(objArr2[0])
//   }
// }
// console.log(arr)
const rivers = zhuxian.geometries.map((obj) => {
  return obj.coordinates.map((value) => {
    return Cartesian3.fromDegrees(value[0], value[1], 0);
  });
});
console.log(rivers)
// let riverPositions : Array<any> = [];
// riverSystems.features.map((value: { coordinates: any[][]; }) => {
//     let temp: Array<any> = [];
//     value.coordinates.slice(-1)[0].map((value) => {
//       return temp.push(value + 0.000000001);
//     });
//     riverPositions.push(temp);
//   });
// zhuxian.geometries.map((value: { coordinates: any[][]; }) => {
//     let temp: Array<any> = [];
//     value.coordinates.slice(-1)[0].map((value) => {
//       return temp.push(value + 0.000000001);
//     });
//     riverPositions.push(temp);
//   });

const RiverSystem = ({ visible, earthInstance }: CardProps) => {
  return (
    <>
      {riverArray.map((value: any[], index: any) => {
          return (
            <Line
              material={Material.fromType("Color", {
                      color: Color.AQUA,
                    })
              }
              positions={value}
              width={2}
              // mouseEnter={handleZhuMouseEnter}
              // mouseLeave={handleZhuMouseLeave}
            ></Line>
          );
        })}
    </>
  );
};
export default RiverSystem;
