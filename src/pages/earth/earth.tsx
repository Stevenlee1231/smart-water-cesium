import { Ion } from "cesium";
import { Viewer, CameraFlyTo } from "resium";
import { Cartesian3 } from "cesium";
import { useOutletContext } from "react-router";
import MountainCard from "../../components/MountainCard/MountainCard";
import Caculate from "../../components/Caculate/Caculate";
import { useState } from "react";
import { TunnelCard } from "../../components/SwitchCard/tunnel";
import { MonitoringCard } from "../../components/SwitchCard/monitoring";
import { RegionalWaterCard } from "../../components/SwitchCard/regionalWater";
Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OTU2ZDE3Yi04ZDliLTRjZDAtYWYyOC01ZTk1OWFjOGNiZTUiLCJpZCI6NDQ3NjgsImlhdCI6MTYyNzk2Mjk1MX0.FrqhJD70CQLH9QsnePyuU0gmevojlEmGgF8swsUQue4";

export const EarthScreen = () => {
  // 开关状态
  const [earthContentVisibel, setearthContentVisibel] = useState({
    tunnelContent: false,
    monitoringContent: false,
    regionalWaterContent: false,
  });
  // useOutletContext
  const { earthVisible, callback } = useOutletContext<any>();
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Viewer timeline={false} animation={false} infoBox={false}>
        <CameraFlyTo
          duration={0}
          destination={Cartesian3.fromDegrees(100.075, 26.602, 15000.0)}
        ></CameraFlyTo>
        {/* 监测井 */}
        {earthVisible["monitoring"] && (
          <>
            {/* <MonitoringCard
              mode={"monitoringContent"}
              setearthContentVisibel={setearthContentVisibel}
              earthContentVisibel={earthContentVisibel}
            /> */}
          </>
        )}

        {/* 隧道及支洞 */}
        {earthVisible["tunnel"] && (
          <>
            <TunnelCard
              mode={"tunnelContent"}
              setearthContentVisibel={setearthContentVisibel}
              earthContentVisibel={earthContentVisibel}
              visible={earthVisible["tunnel"]}
            />
          </>
        )}
        {earthVisible["regionalWater"] && (
          <>
            {/* <RegionalWaterCard
              mode={"regionalWaterContent"}
              setearthContentVisibel={setearthContentVisibel}
              earthContentVisibel={earthContentVisibel}
            /> */}
          </>
        )}

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
