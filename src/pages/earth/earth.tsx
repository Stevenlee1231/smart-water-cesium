import { Ion, Transforms, UrlTemplateImageryProvider } from "cesium";
import {
  Viewer,
  CameraFlyTo,
  Entity,
  PointGraphics,
  PolylineCollection,
  ImageryLayer,
} from "resium";
import { Cartesian3 } from "cesium";
import { useOutletContext } from "react-router";
import Caculate from "../../components/Caculate/Caculate";
import Line from "../../components/Line/Line";
//隧洞数据
import suidongData from "../../assets/datas/suidong.json";
//监测井数据
import tunnel from "../../assets/datas/obswell.json";
//支洞数据
import branchHole from "../../assets/datas/zhidong.json";
import Point from "../../components/Point/Point";
Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OTU2ZDE3Yi04ZDliLTRjZDAtYWYyOC01ZTk1OWFjOGNiZTUiLCJpZCI6NDQ3NjgsImlhdCI6MTYyNzk2Mjk1MX0.FrqhJD70CQLH9QsnePyuU0gmevojlEmGgF8swsUQue4";

export const EarthScreen = () => {
  const { earthVisible, callback } = useOutletContext<any>();
  const lineData = suidongData.geometries[0].coordinates.map((value) => {
    return Cartesian3.fromDegrees(value[0], value[1], 0);
  });
  const tunnels = tunnel.geometries.map((obj) => {
    return Cartesian3.fromDegrees(obj.coordinates[0], obj.coordinates[1], 0);
  });

  const branchHoles = branchHole.geometries.map((obj) => {
    return Cartesian3.fromDegrees(
      obj.coordinates[0][0],
      obj.coordinates[0][1],
      0
    );
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
  const location2 = [
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
        {/* 监测井 */}
        {earthVisible["monitoring"] && (
          <Point size={30} position={tunnels} location={tunnelLabel} />
        )}
        {/* 隧道及支洞 */}
        {earthVisible["tunnel"] && (
          <>
            {/* <Point location={location2} size={10} position={branchHoles} /> */}
            <Line positions={lineData}></Line>
          </>
        )}
        <CameraFlyTo
          duration={0}
          destination={Cartesian3.fromDegrees(100.075, 26.602, 15000.0)}
        ></CameraFlyTo>
        <ImageryLayer
          imageryProvider={
            new UrlTemplateImageryProvider({
              url: "/api/yun/tif/wulfeng/{z}/{x}/{y}.png",
            })
          }
          alpha={1}
        />
        {/* <ImageryLayer
          imageryProvider={
            new UrlTemplateImageryProvider({
              url: "http://103.118.40.123:9999/yun/tif/wuku/{z}/{x}/{y}.png",
            })
          }
          alpha={1}
        /> */}
        {/* <ImageryLayer
          imageryProvider={
            new UrlTemplateImageryProvider({
              url: "http://103.118.40.123:9999/yun/tif/wulku/{z}/{x}/{y}.png",
            })
          }
          alpha={1}
        /> */}
        {/* <ImageryLayer
          imageryProvider={
            new UrlTemplateImageryProvider({
              url: "http://103.118.40.123:9999/yun/tif/wulfeng/{z}/{x}/{y}.png",
            })
          }
          alpha={1}
        /> */}

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
