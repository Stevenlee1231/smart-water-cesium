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
type branchTextState = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
type tunnelTextState = 0 | 1;
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
const tunnelLabel =[
  "楚雄段",
  "大理一段",
  "大理二段",
  "红河段",
  "昆明段",
  "玉溪段",
]
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
console.log(zhuxianData)
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
});
let tunnelLabelPositions: Array<any> = [];
zhuxian.geometries.map((value) => {
  let temp: Array<any> = [];
  value.coordinates[0].map((value) => {
    return temp.push(value + 0.000000001);
  });
  tunnelLabelPositions.push(temp);
});
console.log(zhuxianData)
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
  const [textVisible2, setTextVisible2] = useState({
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
  const handleMouseEnter2 = (e: any, target: any) => { 
    if (textVisible2[target.id as branchTextState]) return;
    let body = document.querySelector("body");
    //@ts-ignore
    body.style.cursor = "pointer";
    setTextVisible2((prev) => {
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
  const handleMouseLeave2 = (e: any, target: any) => {
    setTextVisible2((prev) => {
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
                      color: Color.RED,
                    })
              }
              positions={value}
              width={6}
              // mouseEnter={handleZhuMouseEnter}
              // mouseLeave={handleZhuMouseLeave}
              mouseEnter={handleMouseEnter1}
              mouseLeave={handleMouseLeave1}
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
                textVisible2[index as branchTextState]
                  ? Material.fromType("Color", {
                      color: Color.LIGHTPINK,
                    })
                  : Material.fromType("Color", {
                      color: Color.STEELBLUE,
                    })
              }
              positions={value}
              width={6}
              mouseEnter={handleMouseEnter2}
              mouseLeave={handleMouseLeave2}
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
                color={Color.BLACK}
                show={textVisible2[index as branchTextState]}
              ></Text>
            );
          })}
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
export default Tunnel;
