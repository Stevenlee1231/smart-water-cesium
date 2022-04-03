import { Color, Ion, Material } from "cesium";
import { Viewer, CameraFlyTo, LabelCollection } from "resium";
import { Cartesian3 } from "cesium";
import { useOutletContext } from "react-router";
import MountainCard from "../../components/MountainCard/MountainCard";
import Caculate from "../../components/Caculate/Caculate";
import Line from "../../components/Line/Line";
import Text from "../../components/Text/Text";
//隧洞数据
import suidongData from "../../assets/datas/suidong.json";
//监测井数据
import tunnel from "../../assets/datas/obswell.json";
//支洞数据
import branchHole from "../../assets/datas/zhidong.json";
import waterLevel from "../../assets/datas/water_level0706.json";
import waterLevelColor from "../../assets/datas/water_level_color";
import Point from "../../components/Point/Point";
import { useState } from "react";
import Polygon from "../../components/Polygon/Polygon";
Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OTU2ZDE3Yi04ZDliLTRjZDAtYWYyOC01ZTk1OWFjOGNiZTUiLCJpZCI6NDQ3NjgsImlhdCI6MTYyNzk2Mjk1MX0.FrqhJD70CQLH9QsnePyuU0gmevojlEmGgF8swsUQue4";
let templateGeoJson = {
  type: "GeometryCollection",
  geometries: [
    {
      type: "Polygon",
      coordinates: null as any,
    },
  ],
};
export const EarthScreen = () => {
  const { earthVisible, callback } = useOutletContext<any>();
  const lineData = suidongData.geometries[0].coordinates.map((value) => {
    return Cartesian3.fromDegrees(value[0], value[1], 0);
  });

  const tunnels = tunnel.geometries.map((obj) => {
    return Cartesian3.fromDegrees(obj.coordinates[0], obj.coordinates[1], 0);
  });

  //支洞
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
  //tunnel_label
  const tunnelLabel = [
    "XL2K7",
    "XL2K12",
    "XL2K25",
    "XL2K17",
    "XLP3-12K3",
    "XLP4-2K2",
  ];
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
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Viewer timeline={false} animation={false} infoBox={false}>
        <CameraFlyTo
          duration={0}
          destination={Cartesian3.fromDegrees(100.075, 26.602, 15000.0)}
        ></CameraFlyTo>
        {/* 监测井 */}
        {earthVisible["monitoring"] && (
          <Point size={25} position={tunnels} location={tunnelLabel} />
        )}
        {/* 隧道及支洞 */}
        {earthVisible["tunnel"] && (
          <>
            {/* <Point location={location2} size={10} position={branchHoles} /> */}
            {branchHoles &&
              branchHoles.map((value, index) => {
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
        {earthVisible["regionalWater"] &&
          waterLevel.geometries.map((value, index) => {
            // tempGeoJson.geometries[0].coordinates = null;
            // console.log("pre", tempGeoJson);
            // // console.log(waterLevelColor[index]);
            // // tempGeoJson.geometries[0].coordinates[0].push(value.coordinates[0])
            // tempGeoJson.geometries[0].coordinates = value.coordinates;
            // console.log("tempGeoJson", tempGeoJson);
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
        {earthVisible["GMSMountain"] && (
          <MountainCard mode={"GMSMOUNTAIN"}></MountainCard>
        )}
        {earthVisible["GMSMountainSix"] && (
          <MountainCard mode={"GMSMOUNTAINSIX"}></MountainCard>
        )}
        {earthVisible["mountain"] && (
          <MountainCard mode={"MOUNTAIN"}></MountainCard>
        )}
        {earthVisible["mountainSix"] && (
          <MountainCard mode={"MOUNTAINSIX"}></MountainCard>
        )}
        {/* 计算页面 */}
        <Caculate
          visible={earthVisible["count"]}
          showDrawer={() => {
            callback((prev: any) => {
              return { ...prev, count: true };
            });
          }}
          onClose={() => {
            callback((prev: any) => {
              return { ...prev, count: false };
            });
          }}
        ></Caculate>
      </Viewer>
    </div>
  );
};
