import { Steps } from "antd";
import { Color } from "cesium";
import Polygon from "../Polygon/Polygon";
import { CardProps } from "./tunnel";
import waterLevel from "../../assets/datas/water_level0706.json";
import waterLevelColor from "../../assets/datas/water_level_color";

const { Step } = Steps;
let templateGeoJson = {
  type: "GeometryCollection",
  geometries: [
    {
      type: "Polygon",
      coordinates: null as any,
    },
  ],
};
const RegionalWater = ({ visible }: CardProps) => {
  return (
    <>
    <div  style={{backgroundColor:"white",transform:"translateY(-50px)",overflow:"auto"}} >
      <Steps  current={6} size="small" style={{padding:"20px,0"}} >
        <Step title="2022.1" />
        <Step title="2022.2" />
        <Step title="2022.3" />
        <Step title="2022.4" />
        <Step title="2022.5" />
        <Step title="2022.6" />
        <Step title="2022.7" />
        <Step title="2022.8" />
        <Step title="2022.9" />
        
      </Steps>
      </div>
      {visible &&
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
    </>
  );
};
export default RegionalWater;
