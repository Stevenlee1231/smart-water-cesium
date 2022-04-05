import { Card, Switch } from "antd";
import { Color } from "cesium";
import Polygon from "../Polygon/Polygon";
import { CardProps } from "./tunnel";
import waterLevel from "../../assets/datas/water_level0706.json";
import waterLevelColor from "../../assets/datas/water_level_color";
let templateGeoJson = {
  type: "GeometryCollection",
  geometries: [
    {
      type: "Polygon",
      coordinates: null as any,
    },
  ],
};
export const RegionalWater = ({
  setearthContentVisibel,
  mode,
  earthContentVisibel,
}: CardProps) => {
  return (
    <>
      <div style={{ position: "absolute", top: "180px", right: "25px" }}>
        <Card title={"监测井"} bordered={false}>
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
        {earthContentVisibel[mode] &&
          waterLevel.geometries.map((value, index) => {
            let tempGeoJson = JSON.parse(JSON.stringify(templateGeoJson));
            tempGeoJson.geometries[0].coordinates = value.coordinates;

            return (
              <Polygon
                data={tempGeoJson}
                material={Color.fromCssColorString(waterLevelColor[index])}
                stroke={Color.fromCssColorString(waterLevelColor[index])}
                strokeWidth={5}
              ></Polygon>
            );
          })}
      </div>
    </>
  );
};
