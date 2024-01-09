import { Cartesian2, Cartesian3, Color, Material, Math as CMath } from "cesium";
import { LabelCollection } from "resium";
import Line from "../Line/Line";
import Text from "../Text/Text";
import branchHole from "../../assets/datas/zhidong.json";
import suidongData from "../../assets/datas/route.json";
import zhuxian from "../../assets/datas/route.json";
import { useEffect, useState } from "react";
export interface CardProps {
  earthInstance?: any;
  visible?: boolean;
}
type branchTextState = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type tunnelTextState = 0 | 1;
const tunnelLabel =[
  "楚雄段",
  "大理一段",
  "大理二段",
  "红河段",
  "昆明段",
  "玉溪段",
]
const zhuxianData = zhuxian.geometries.map((obj) => {
  return obj.coordinates.map((value) => {
    return Cartesian3.fromDegrees(value[0], value[1], 0);
  });
});
let tunnelLabelPositions: Array<any> = [];
zhuxian.geometries.map((value) => {
  let temp: Array<any> = [];
  value.coordinates[0].map((value) => {
    return temp.push(value + 0.000000001);
  });
  tunnelLabelPositions.push(temp);
});
const Route = ({ visible, earthInstance }: CardProps) => {
  const [textVisible1, setTextVisible1] = useState({
    0: false,
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
    8: false,
  });
  const handleMouseEnter1 = (e: any, target: any) => { 
    if (textVisible1[target.id as tunnelTextState]) return;
    let body = document.querySelector("body");
    //@ts-ignore
    body.style.cursor = "pointer";
    setTextVisible1((prev) => {
      return { ...prev, [target.id]: true };
    });
  };
  const handleMouseLeave1 = (e: any, target: any) => {
    setTextVisible1((prev) => {
      return { ...prev, [target.id]: false };
    });
    let body = document.querySelector("body");
    //@ts-ignore
    body.style.cursor = "auto";
  };
  return (
    <>
      {zhuxianData &&
        zhuxianData.map((value: any[], index: any) => {
          return (
            <Line
              key={index}
              id={index}
              material={
                textVisible1[index as tunnelTextState]
                  ? Material.fromType("Color", {
                      color: Color.YELLOW,
                    })
                  : Material.fromType("Color", {
                      color: Color.WHITE.withAlpha(0.5),
                    })
              }
              positions={value}
              width={5}
              // mouseEnter={handleZhuMouseEnter}
              // mouseLeave={handleZhuMouseLeave}
              mouseEnter={handleMouseEnter1}
              mouseLeave={handleMouseLeave1}
            ></Line>
          );
        })}
      <LabelCollection>
          {tunnelLabelPositions &&
          tunnelLabelPositions.map((value, index) => {
            return (
              <Text
                key={index}
                position={value}
                text={tunnelLabel[index]}
                color={Color.BLACK}
                show={textVisible1[index as branchTextState]}
              ></Text>
            );
          })}
      </LabelCollection>
    </>
  );
};
export default Route;