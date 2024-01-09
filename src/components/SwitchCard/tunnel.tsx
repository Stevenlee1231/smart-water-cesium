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
type branchTextState = number;
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
const branchLabel = [
  "香炉山隧洞1#支洞",
  "香炉山隧洞1-1#支洞",
  "香炉山隧洞2#支洞",
  "香炉山隧洞3#支洞",
  "香炉山隧洞3-1#支洞",
  "香炉山隧洞4#支洞",
  "香炉山隧洞5#支洞",
  "香炉山隧洞7#支洞",
  "香炉山隧洞8#支洞",
  "板凳山隧洞1#支洞",
  "海东隧洞0#支洞",
  "海东隧洞1#支洞",
  "海东隧洞2#支洞",
  "海东隧洞3#支洞",
  "海东隧洞4#支洞",
  "海东隧洞5#支洞",
  "狮子山隧洞1#支洞",
  "狮子山隧洞2#支洞",
  "狮子山隧洞3#支洞",
  "狮子山隧洞4#支洞",
  "狮子山隧洞5#支洞",
  "磨盘山隧洞1#支洞",
  "磨盘山隧洞2#支洞",
  "老青山隧洞1#支洞",
  "老青山隧洞2#支洞",
  "昆呈隧洞1#支洞",
  "昆呈隧洞2#支洞",
  "昆呈隧洞3#支洞",
  "昆呈隧洞4#支洞",
  "昆呈隧洞5#支洞",
  "昆呈隧洞6#支洞",
  "昆呈隧洞7#支洞",
  "昆呈隧洞8#支洞",
  "昆呈隧洞9#支洞",
  "昆呈隧洞10#支洞",
  "昆呈隧洞11#支洞",
  "昆呈隧洞12#支洞",
  "昆呈隧洞13#支洞",
  "昆呈隧洞14#支洞",
  "昆呈隧洞15#支洞",
  "昆呈隧洞16#支洞",
  "松林隧洞1#支洞",
  "松林隧洞2#支洞",
  "蔡家村隧洞1#支洞",
  "蔡家村隧洞2#支洞",
  "蔡家村隧洞3#支洞",
  "蔡家村隧洞4#支洞",
  "蔡家村隧洞5#支洞",
  "蔡家村隧洞6#支洞",
  "龙庆隧洞1#支洞",
  "龙庆隧洞2#支洞",
  "龙泉隧洞1#支洞",
  "龙泉隧洞2#支洞",
  "万家隧洞1#支洞",
  "万家隧洞2#支洞",
  "万家隧洞3#支洞",
  "万家隧洞4#支洞",
  "万家隧洞5#支洞",
  "九道河隧洞1#支洞",
  "九道河隧洞2#支洞",
  "伍庄村隧洞1#支洞",
  "伍庄村隧洞2#支洞",
  "伍庄村隧洞3#支洞",
  "凤凰山隧洞1#支洞",
  "凤凰山隧洞2#支洞",
  "凤凰山隧洞3#支洞",
  "凤凰山隧洞4#支洞",
  "凤凰山隧洞5#支洞",
  "凤凰山隧洞6#支洞",
  "凤凰山隧洞7#支洞",
  "凤屯隧洞1#支洞",
  "凤屯隧洞2#支洞",
  "大转弯隧洞1#支洞",
  "大转弯隧洞2#支洞",
  "大转弯隧洞3#支洞",
  "大转弯隧洞5#支洞",
  "大转弯隧洞6#支洞",
  "大转弯隧洞7#支洞",
  "柳家村隧洞1#支洞",
  "柳家村隧洞2#支洞",
  "柳家村隧洞3#支洞",
  "龙潭隧洞1#支洞",
  "龙潭隧洞2#支洞",
  "龙潭隧洞3#支洞",
  "小扑隧洞1#支洞",
  "小扑隧洞2#支洞",
  "小扑隧洞3#支洞",
  "小扑隧洞4#支洞",
  "小扑隧洞5#支洞",
  "小扑隧洞6#支洞",
  "小扑隧洞7#支洞",
  "小扑隧洞8#支洞",
  "扯那苴隧洞1#支洞",
  "螺峰山隧洞1#支洞",
  "螺峰山隧洞2#支洞",
  "螺峰山隧洞3#支洞",
  "螺峰山隧洞4#支洞",
  "DPT1#支洞",
  "DPZ1#支洞",
  "DPZ2#支洞",
  "DPZ3#支洞",
  "DPZ4#支洞",
  "JMC1#支洞",
  "JMC2#支洞",
  "LS1#支洞",
  "LS2#支洞",
  "LS3#支洞",
  "LW1#支洞",
  "XLN1#支洞",
  "XLN2#支洞",
  "XLN3#支洞",
  "XLN4#支洞",
];
const tunnelLabel =[
  "香炉山隧洞",
  "积福村隧洞",
  "衍庆村隧洞",
  "芹河隧洞",
  "北衙隧洞",
  "上果园隧洞",
  "下河坝隧洞",
  "玉石厂隧洞",
  "老马槽隧洞",
  "长育村隧洞",
  "海东隧洞",
  "狮子山隧洞",
  "洗窝帚山隧洞",
  "品甸海隧洞",
  "磨盘山隧洞",
  "老青山隧洞",
  "板凳山隧洞",
  "万家隧洞",
  "柳家村隧洞",
  "凤屯隧洞",
  "伍家村隧洞",
  "大转弯隧洞",
  "九道河隧洞",
  "鲁支河隧洞",
  "龙潭隧洞",
  "蔡家村隧洞",
  "松林隧洞",
  "盛家塘隧洞",
  "龙庆隧洞",
  "龙泉隧洞",
  "昆呈隧洞",
  "小扑隧洞",
  "阿斗村隧洞",
  "白马山隧洞",
  "黄草坝隧洞",
  "扯那苴隧洞",
  "大塘子隧洞",
  "老尖山隧洞",
  "螺峰山隧洞",
  "鸡米冲隧洞",
  "乌兄隧洞",
  "小路南隧洞",
  "龙尾隧洞",
  "羊街隧洞",
  "龙树隧洞",
  "柴里冲1号隧洞",
  "柴里冲2号隧洞",
  "龙树山隧洞",
  "阿子冲1号隧洞",
  "阿子冲2号隧洞",
  "坝埂脚隧洞",
  "大路能山隧洞",
  "地田坡隧洞",
  "大坡子隧洞",
  "大山隧洞",
  "乍甸隧洞",
  "小燕塘隧洞"
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
  function generateObject(n:number) {
    let obj = {};
    for (let i = 0; i <= n; i++) {
      obj[i] = false;
    }
    return obj;
  }
  const [textVisible1, setTextVisible1] = useState(generateObject(58));
  const [textVisible2, setTextVisible2] = useState(generateObject(112));
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
                      alpha:0.5
                    })
                  : Material.fromType("Color", {
                      color: Color.RED,
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
              width={5}
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
