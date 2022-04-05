import { Card, Switch } from "antd";
import { Cartesian3, Color, Material } from "cesium";
import { LabelCollection } from "resium";
import Line from "../Line/Line";
import Text from "../Text/Text";
import branchHole from "../../assets/datas/zhidong.json";
import suidongData from "../../assets/datas/suidong.json";
import styled from "@emotion/styled";
export interface CardProps {
  mode: string;
  setearthContentVisibel: any;
  earthContentVisibel: any;
}
const lineData = suidongData.geometries[0].coordinates.map((value) => {
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
export const TunnelCard = ({
  setearthContentVisibel,
  mode,
  earthContentVisibel,
}: CardProps) => {
  return (
    <>
      <Container>
        <Card title={"隧道及支洞"} bordered={false}>
          开关：
          <Switch
            onChange={(checked) => {
              setearthContentVisibel((prev: any) => {
                return { ...prev, [mode]: checked };
              });
            }}
            checked={earthContentVisibel[mode]}
          />
        </Card>
        {earthContentVisibel[mode] && (
          <>
            {branchHoles &&
              branchHoles.map((value: any[], index: any) => {
                return (
                  <Line
                    key={index}
                    material={Material.fromType("Color", {
                      color: new Color(0, 255, 0, 1),
                    })}
                    positions={value}
                    width={3}
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
                    ></Text>
                  );
                })}
            </LabelCollection>

            <Line
              material={Material.fromType("Color", {
                color: new Color(255, 0, 0, 1),
              })}
              positions={lineData}
              width={7}
            ></Line>
          </>
        )}
      </Container>
    </>
  );
};
export const Container = styled.div`
  position: "absolute";
  top: "180px";
  right: "25px";
`;
