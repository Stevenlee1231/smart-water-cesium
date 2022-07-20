import { Card, Switch } from "antd";
import { Cartesian3, Color, Material } from "cesium";
import { LabelCollection } from "resium";
import Line from "../Line/Line";
import Text from "../Text/Text";
import branchHole from "../../assets/datas/zhidong.json";
import suidongData from "../../assets/datas/suidong.json";
import suidaoData from "../../assets/datas/suidao.json";
import { useState } from "react";
export interface CardProps {
  visible: boolean;
}
type textState = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
const lineData = suidongData.geometries[0].coordinates.map((value) => {
  return Cartesian3.fromDegrees(value[0], value[1], 0);
});
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
];
const branchHoles = branchHole.geometries.map((obj) => {
  return obj.coordinates.map((value) => {
    return Cartesian3.fromDegrees(value[0], value[1], 0);
  });
});
let branchLabelPositions: Array<any> = [];
branchHole.geometries.map((value) => {
  let temp: Array<any> = [];
  value.coordinates.slice(-1)[0].map((value) => {
    return temp.push(value + 0.0000000000005);
  });
  branchLabelPositions.push(temp);
});
 const Tunnel = ({ visible }: CardProps) => {
  // const [tunnelVisible, setTunnelVisible] = useState(false);
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
    setTextVisible((prev) => {
      return { ...prev, [target.id]: true };
    });
  };
  const handleMouseLeave = (e: any, target: any) => {
    setTextVisible((prev) => {
      return { ...prev, [target.id]: false };
    });
  };
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "180px",
          right: "25px",
          visibility: visible ? "visible" : "hidden",
        }}
      >
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
        {visible && (
          <>
            {branchHoles &&
              branchHoles.map((value: any[], index: any) => {
                return (
                  <Line
                    key={index}
                    id={index}
                    material={Material.fromType("Color", {
                      color: new Color(0, 255, 0, 1),
                    })}
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
                      position={value}
                      text={branchLabel[index]}
                      color={Color.BLUE}
                      show={textVisible[index as textState]}
                    ></Text>
                  );
                })}
            </LabelCollection>

            <Line
              material={Material.fromType("Color", {
                color: new Color(255, 0, 0, 1),
              })}
              positions={lineData}
              width={10}
            ></Line>
            <Line
              material={Material.fromType("Color", {
                color: new Color(128, 0, 128, 1),
              })}
              positions={line2Data}
              width={10}
            ></Line>
          </>
        )}
      </div>
    </>
  );
};
export default Tunnel