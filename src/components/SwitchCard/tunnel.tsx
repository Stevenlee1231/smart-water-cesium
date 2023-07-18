<<<<<<< HEAD
import { Cartesian2, Cartesian3, Color, Material, Math as CMath } from "cesium";
=======
import { Card, Switch } from "antd";
import {
  Cartesian2,
  Cartesian3,
  Color,
  CornerType,
  Material,
  Math as CMath,
} from "cesium";
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
import { LabelCollection } from "resium";
import Line from "../Line/Line";
import Text from "../Text/Text";
import branchHole from "../../assets/datas/zhidong.json";
import suidongData from "../../assets/datas/suidong.json";
<<<<<<< HEAD
import zhuxian from "../../assets/datas/zhuxian.json";
=======
import suidaoData from "../../assets/datas/suidao.json";
// import suidongArr  from "../../assets/datas/handleData";
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
import { useEffect, useState } from "react";
export interface CardProps {
  earthInstance?: any;
  visible?: boolean;
}
type textState = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
<<<<<<< HEAD
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
=======
const lineData = suidongData.geometries[0].coordinates.map((value) => {
  return Cartesian3.fromDegrees(value[0], value[1], 0);
});
const lineArr = suidongData.geometries[0].coordinates.reduce((pre, cur) => {
  return pre.concat(cur);
}, []);
const line2Data = suidaoData.geometries[0].coordinates.map((value) => {
  return Cartesian3.fromDegrees(value[0], value[1], 0);
});
const branchLabel = [
  "1#施工支洞",
  "2#施工支洞",
  "1-1施工支洞",
  "3-1施工支洞",
  "4#施工支洞",
  "5#施工支洞",
  "6#施工支洞",
  "7#施工支洞",
  "8#施工支洞",
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
];
const branchHoles = branchHole.geometries.map((obj) => {
  return obj.coordinates.map((value) => {
    return Cartesian3.fromDegrees(value[0], value[1], 0);
  });
});
<<<<<<< HEAD
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
=======
function computeCircle(radius: number) {
  const positions = [];
  for (let i = 0; i < 360; i++) {
    const radians = CMath.toRadians(i);
    positions.push(
      new Cartesian2(radius * Math.cos(radians), radius * Math.sin(radians))
    );
  }
  return positions;
}
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
let branchLabelPositions: Array<any> = [];
branchHole.geometries.map((value) => {
  let temp: Array<any> = [];
  value.coordinates.slice(-1)[0].map((value) => {
    return temp.push(value + 0.000000001);
  });
  branchLabelPositions.push(temp);
<<<<<<< HEAD
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
=======
});
const Tunnel = ({ visible, earthInstance }: CardProps) => {
  // const [tunnelVisible, setTunnelVisible] = useState(false);
  useEffect(() => {
    if (earthInstance.current && earthInstance.current.cesiumElement) {
      // ref.current.cesiumElement is Cesium's Viewer
      // DO SOMETHING
      earthInstance.current.cesiumElement.entities.add({
        id: "volume",
        // name: "Blue star with mitered corners and outline",
        polylineVolume: {
          positions: Cartesian3.fromDegreesArray(lineArr),
          // position: lineData,
          // shape: computeCircle(10.0),
          shape: computeCircle(20.0),
          material: Color.PALETURQUOISE,
        },
      });
      // earthInstance.current.cesiumElement.zoomTo(earthInstance.current.cesiumElement.entities);
      return () => {
        //模拟代码
        earthInstance.current.cesiumElement.entities.remove(
          earthInstance.current.cesiumElement.entities.getById("volume")
        );
      };
    }
    // return () => {
    //   earthInstance.current.cesiumElement.entities.remove("volume")
    // };
  }, [visible]);
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
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
<<<<<<< HEAD
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
=======
  // useEffect(()=>{
  //   const body = document.querySelector("body")
  //   body&&body.style.cursor= "move"
  // },[])
  return (
    <>
      {/* <Card title={"隧道及支洞"} bordered={false}>
          开关：
          {visible && (
            <Switch
              style={{
                visibility: visible ? "visible" : "hidden",
              }}
              onChange={(checked) => {
                setTunnelVisible(checked);
              }}
              checked={tunnelVisible}
            />
          )}
        </Card> */}

      <>
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
                        color: Color.LIGHTSTEELBLUE,
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

        {/* <Line
              material={Material.fromType("Color", {
                color: new Color(255, 0, 0, 1),
              })}
              positions={lineData}
              width={10}
            ></Line> */}
        {/* <Line
          material={Material.fromType("Color", {
            color: new Color(0, 223, 252, 1),
          })}
          positions={line2Data}
          width={10}
        ></Line> */}
      </>
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
    </>
  );
};
export default Tunnel;
