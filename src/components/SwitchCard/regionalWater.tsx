import { Card, Switch } from "antd";
import { Color } from "cesium";
import Polygon from "../Polygon/Polygon";
import { CardProps } from "./tunnel";
import waterLevel from "../../assets/datas/water_level0706.json";
import waterLevelColor from "../../assets/datas/water_level_color";
import { useState } from "react";
let templateGeoJson = {
  type: "GeometryCollection",
  geometries: [
    {
      type: "Polygon",
      coordinates: null as any,
    },
  ],
};
export const RegionalWaterCard = ({
 visible
}: CardProps) => {
  const [regionalWaterVisible,setRegionalWaterVisible]=useState(false)
  return (
    <>
      <div style={{ position: "absolute", top: "180px", right: "25px",visibility:visible?"visible":"hidden" }}>
        <Card title={"区域水位"} bordered={false}>
          开关：
          <Switch
            onChange={(checked) => {
              setRegionalWaterVisible(checked)
            }}
            checked={regionalWaterVisible}
          />
        </Card>
  
        {regionalWaterVisible &&
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
