import { Cartesian2, Cartesian3, Color, Material, Math as CMath } from "cesium";
import { LabelCollection } from "resium";
import Line from "../Line/Line";
import Text from "../Text/Text";
import branchHole from "../../assets/datas/zhidong.json";
import suidongData from "../../assets/datas/suidong.json";
import zhuxian from "../../assets/datas/zhuxian.json";
import { useEffect, useState } from "react";
export interface CardProps {
  earthInstance?: any;
  visible?: boolean;
}
type textState = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
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
// });
const lineArr = suidongData.geometries[0].coordinates.reduce((pre, cur) => {
  return pre.concat(cur);
}, []);
// console.log(zhuxianData);
const branchLabel = [
  "红河段-DPZ4#支洞",
  "红河段-DPZ3#支洞",
  "红河段-DPZ2#支洞",
  "红河段-DPZ1#支洞",
  "红河段-DPT1#支洞",
  "红河段-LS3#支洞",
  "红河段-LS2#支洞",
  "红河段-LS1#支洞",
  "红河段-LW1#支洞",
];
const branchHoles = branchHole.geometries.map((obj) => {
  return obj.coordinates.map((value) => {
    return Cartesian3.fromDegrees(value[0], value[1], 0);
  });
});
const zhuxianData = zhuxian.geometries.map((obj) => {
  return obj.coordinates.map((value) => {
    return Cartesian3.fromDegrees(value[0], value[1], 0);
  });
});
// function computeCircle(radius: number) {
//   const positions = [];
//   for (let i = 0; i < 360; i++) {
//     const radians = CMath.toRadians(i);
//     positions.push(
//       new Cartesian2(radius * Math.cos(radians), radius * Math.sin(radians))
//     );
//   }
//   return positions;
// }
let branchLabelPositions: Array<any> = [];
branchHole.geometries.map((value) => {
  let temp: Array<any> = [];
  value.coordinates.slice(-1)[0].map((value) => {
    return temp.push(value + 0.000000001);
  });
  branchLabelPositions.push(temp);
  console.log(branchLabelPositions)
});
const Tunnel = ({ visible, earthInstance }: CardProps) => {
  // useEffect(() => {
  //   if (earthInstance.current && earthInstance.current.cesiumElement) {
  //     earthInstance.current.cesiumElement.entities.add({
  //       id: "volume",
  //       polylineVolume: {
  //         positions: Cartesian3.fromDegreesArray(zhuxianData),
  //         shape: computeCircle(20.0),
  //         material: Color.PALETURQUOISE,
  //       },
  //     });
  //     return () => {
  //       //模拟代码
  //       earthInstance.current.cesiumElement.entities.remove(
  //         earthInstance.current.cesiumElement.entities.getById("volume")
  //       );
  //     };
  //   }
  // }, [visible]);
  const [textVisible, setTextVisible] = useState({
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
  const handleMouseEnter = (e: any, target: any) => {
    if (textVisible[target.id as textState]) return;
    let body = document.querySelector("body");
    //@ts-ignore
    body.style.cursor = "pointer";
    setTextVisible((prev) => {
      return { ...prev, [target.id]: true };
    });
  };
  const handleMouseLeave = (e: any, target: any) => {
    setTextVisible((prev) => {
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
                textVisible[index as textState]
                  ? Material.fromType("Color", {
                      color: Color.LIGHTGREEN,
                    })
                  : Material.fromType("Color", {
                      color: Color.LIGHTGREEN,
                    })
              }
              positions={value}
              width={6}
              // mouseEnter={handleZhuMouseEnter}
              // mouseLeave={handleZhuMouseLeave}
            ></Line>
          );
        })}
      {branchHoles &&
        branchHoles.map((value: any[], index: any) => {
          return (
            <Line
              key={index}
              id={index}
              material={
                textVisible[index as textState]
                  ? Material.fromType("Color", {
                      color: Color.LIGHTPINK,
                    })
                  : Material.fromType("Color", {
                      color: Color.STEELBLUE,
                    })
              }
              positions={value}
              width={6}
              mouseEnter={handleMouseEnter}
              mouseLeave={handleMouseLeave}
            ></Line>
          );
        })}
      <LabelCollection>
        {branchLabelPositions &&
          branchLabelPositions.map((value, index) => {
            return (
              <Text
                key={index}
                position={value}
                text={branchLabel[index]}
                color={Color.LIGHTSKYBLUE}
                show={textVisible[index as textState]}
              ></Text>
            );
          })}
      </LabelCollection>
    </>
  );
};
export default Tunnel;
