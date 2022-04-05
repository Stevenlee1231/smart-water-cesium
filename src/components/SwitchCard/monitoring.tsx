import { Card, Switch } from "antd";
import { CardProps } from "./tunnel";
import Point from "../Point/Point";
import { Cartesian3 } from "cesium";
import tunnel from "../../assets/datas/obswell.json";
const tunnelLabel = [
  "XL2K7",
  "XL2K12",
  "XL2K25",
  "XL2K17",
  "XLP3-12K3",
  "XLP4-2K2",
];
const tunnels = tunnel.geometries.map((obj) => {
  return Cartesian3.fromDegrees(obj.coordinates[0], obj.coordinates[1], 0);
});
export const MonitoringCard = ({
  setearthContentVisibel,
  mode,
  earthContentVisibel,
}: CardProps) => {
  return (
    <>
      <div style={{ position: "absolute", top: "180px", right: "25px" }}>
        <Card title={"区域水位"} bordered={false}>
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
          <Point size={25} position={tunnels} location={tunnelLabel} />
        )}
      </div>
    </>
  );
};
