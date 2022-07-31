import {
  Ion,
  ScreenSpaceEventType,
  UrlTemplateImageryProvider,
  WebMapTileServiceImageryProvider,
} from "cesium";
import { Viewer, CameraFlyTo, ImageryLayer, CesiumComponentRef } from "resium";
import { Cartesian3 } from "cesium";
import MountainCard from "../../components/MountainCard/MountainCard";
import Stratum from "../../components/Stratum/Stratum";
import Caculate from "../../components/Caculate/Caculate";
import { useEffect, useRef, useState } from "react";
import Meteorology from "../../components/SwitchCard/meteorology";
import Tunnel from "../../components/SwitchCard/tunnel";
import Monitoring from "../../components/SwitchCard/monitoring";
import RegionalWater from "../../components/SwitchCard/regionalWater";
import "./earth.scss";
Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OTU2ZDE3Yi04ZDliLTRjZDAtYWYyOC01ZTk1OWFjOGNiZTUiLCJpZCI6NDQ3NjgsImlhdCI6MTYyNzk2Mjk1MX0.FrqhJD70CQLH9QsnePyuU0gmevojlEmGgF8swsUQue4";

export const EarthScreen = (props: any) => {
  const earthRef = useRef<CesiumComponentRef<any>>(null);
  const { earthVisible, setEarthVisible } = props;
  const renderCount = useRef(0);
  useEffect(() => {
    if (earthRef.current && earthRef.current.cesiumElement) {
      earthRef.current.cesiumElement.scene.globe.depthTestAgainstTerrain =
        false;
      earthRef.current.cesiumElement.cesiumWidget.screenSpaceEventHandler.removeInputAction(
        ScreenSpaceEventType.LEFT_DOUBLE_CLICK
      );
      earthRef.current.cesiumElement.scene.fxaa = true
    }
  });
  useEffect(() => {
    setTimeout(() => {
      renderCount.current++;
    }, 0);
  }, []);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Viewer
        timeline={false}
        animation={false}
        infoBox={false}
        style={{ height: "95%" }}
        ref={earthRef}
        selectionIndicator={false}
        // imageryProvider={false}
      >
        {/* <ImageryLayer
          imageryProvider={
            new UrlTemplateImageryProvider({
              url: "https://t{s}.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=48d8f36297a4adcd94eb4f85ea260349",
              subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
              minimumLevel: 0,
              maximumLevel: 18,
            })
          }
        ></ImageryLayer> */}
        <ImageryLayer
          imageryProvider={
            new UrlTemplateImageryProvider({
              url: "https://t{s}.tianditu.gov.cn/DataServer?T=cia_w&x={x}&y={y}&l={z}&tk=48d8f36297a4adcd94eb4f85ea260349",
              subdomains: ["0", "1", "2", "3", "4", "5", "6", "7"],
              minimumLevel: 0,
              maximumLevel: 18,
            })
          }
        ></ImageryLayer>
        {renderCount.current === 0 && (
          <CameraFlyTo
            duration={0}
            destination={Cartesian3.fromDegrees(100.075, 26.602, 15000.0)}
          ></CameraFlyTo>
        )}
        {/*水文气象 */}
        {earthVisible["meteorology"] && (
          <Meteorology visible={earthVisible["meteorology"]}></Meteorology>
        )}
        {/*区域地质*/}
        {earthVisible["stratum"] && <Stratum></Stratum>}
        {/* 监测井 */}
        <Monitoring  earthInstance={earthRef}  visible={earthVisible["monitoring"]} />
        {/* 隧道及支洞 */}
        {earthVisible["tunnel"] && <Tunnel earthInstance={earthRef} />}
        {/* 区域水位 */}
        <RegionalWater visible={earthVisible["regionalWater"]} />
        {earthVisible["GMSMountain"] && (
          <>
            <MountainCard mode={"GMSMOUNTAIN"}></MountainCard>
            <CameraFlyTo
              duration={0}
              destination={
                {
                  x: -1035477.0099878273,
                  y: 5712028.233173981,
                  z: 2888111.1876860037,
                } as Cartesian3
              }
            ></CameraFlyTo>
          </>
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
            setEarthVisible((prev: any) => {
              return { ...prev, count: true };
            });
          }}
          onClose={() => {
            setEarthVisible((prev: any) => {
              return { ...prev, count: false };
            });
          }}
        ></Caculate>
      </Viewer>
    </div>
  );
};
