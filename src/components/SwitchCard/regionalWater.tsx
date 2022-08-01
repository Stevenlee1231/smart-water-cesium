import { Steps } from "antd";
import { Color } from "cesium";
import Polygon from "../Polygon/Polygon";
import { CardProps } from "./tunnel";
import waterLevel from "../../assets/datas/water_level0706.json";
import waterLevelColor from "../../assets/datas/water_level_color";
import "./regionalWater.scss";
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
      {visible && (
        <div
          style={{
            // backgroundColor: "white",
            transform: "translateY(-180px)",
            overflow: "auto",
            height: "200px",
            width: "800px",
            margin: "0 auto",
          }}
        >
          <div
            id="timeSliderDiv"
            aria-label="时间滑块"
            className="esri-time-slider esri-widget esri-time-slider__mode--time-window esri-time-slider__layout--compact esri-time-slider--has-actions calcite-theme-light"
          >
            <div className="esri-time-slider__row">
              <div
                style={{ width: "0px" }}
                className="esri-time-slider__time-extent"
              >
                <div
                  className="esri-time-slider__time-extent-date"
                  data-type="extent"
                  data-layout="compact"
                ></div>
              </div>
              <div className="esri-time-slider__actions" title="选项"></div>
            </div>
            <div className="esri-time-slider__row">
              <div className="esri-time-slider__slider">
                <div
                  aria-label="滑块"
                  className="esri-slider esri-widget esri-slider--horizontal"
                  touch-action="none"
                >
                  <div
                    aria-hidden="true"
                    className="esri-slider__min esri-hidden"
                    tabIndex={-1}
                  >
                    1514736000000
                  </div>
                  <div className="esri-slider__content">
                    <div
                      className="esri-slider__track"
                      data-node-ref="trackElement"
                      touch-action="none"
                    >
                      <div
                        className="esri-slider__segment esri-slider__segment-0"
                        style={{
                          transform:
                            "translate(0%, 0px) scale(0.45209140066282927, 1)",
                        }}
                        touch-action="none"
                      ></div>
                      <div
                        className="esri-slider__segment esri-slider__segment-1 esri-slider__segment--interactive"
                        style={{
                          transform:
                            "translate(45.20914%, 0px) scale(0.0898377812663527, 1)",
                          background: "rgba(110, 110, 110, 0.4)",
                        }}
                        touch-action="none"
                      ></div>
                      <div
                        className="esri-slider__segment esri-slider__segment-2"
                        style={{
                          transform:
                            "translate(54.19292%, 0px) scale(0.4580638409209838, 1)",
                        }}
                        touch-action="none"
                      ></div>
                      <div
                        aria-controls="1825473114d-widget-5-handle-1"
                        aria-label="滑块值"
                        aria-orientation="horizontal"
                        aria-valuemax={1543593600000}
                        aria-valuemin={1514736000000}
                        aria-valuenow={1527782400000}
                        aria-valuetext="范围最小值：1,527,782,400,000"
                        className="esri-slider__anchor esri-slider__anchor-0"
                        id="1825473114d-widget-5-handle-0"
                        touch-action="none"
                        role="slider"
                        style={{ left: "45.20914%", zIndex: "5" }}
                        tabIndex={0}
                      >
                        <span
                          className="esri-slider__thumb"
                          touch-action="none"
                        ></span>
                        <span
                          aria-hidden="true"
                          className="esri-slider__label esri-hidden"
                          id="1825473114d-widget-5-label-0"
                          touch-action="none"
                        >
                          1527782400000
                        </span>
                      </div>
                      <div
                        aria-controls="1825473114d-widget-5-handle-0"
                        aria-label="滑块值"
                        aria-orientation="horizontal"
                        aria-valuemax={1543593600000}
                        aria-valuemin={1514736000000}
                        aria-valuenow={1530374400000}
                        aria-valuetext="范围最大值：1,530,374,400,000"
                        className="esri-slider__anchor esri-slider__anchor-1 esri-slider__anchor--moved"
                        id="1825473114d-widget-5-handle-1"
                        touch-action="none"
                        role="slider"
                        style={{ left: "54.19292%", zIndex: 7 }}
                        tabIndex={0}
                      >
                        <span
                          className="esri-slider__thumb"
                          touch-action="none"
                        ></span>
                        <span
                          aria-hidden="true"
                          className="esri-slider__label esri-hidden"
                          id="1825473114d-widget-5-label-1"
                          touch-action="none"
                        >
                          1530374400000
                        </span>
                      </div>
                    </div>
                    {/* <div className="esri-slider__ticks">
                      <div>
                        <div
                          aria-valuenow={1514736000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 0 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1514995200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 0.89866 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1515254400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 1.79731 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1515513600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 2.69597 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1515772800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 3.59184 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1516032000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 4.49049 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1516291200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 5.38915 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1516550400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 6.28781 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1516809600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 7.18646 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1517068800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 8.08512 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1517328000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 8.98099 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1517587200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 9.87964 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1517846400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 10.7783 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1518105600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 11.67696 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1518364800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 12.57561 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1518624000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 13.47427 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1518883200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 14.37014 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1519142400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 15.26879 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1519401600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 16.16745 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1519660800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 17.06611 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1519920000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 17.96477 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1520179200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 18.86342 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1520438400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 19.75929 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1520697600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 20.65795 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1520956800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 21.5566 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1521216000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 22.45526 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1521475200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 23.35392 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1521734400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 24.25257 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1521993600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 25.14844 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1522252800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 26.0471 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1522512000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 26.94575 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1522771200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 27.84441 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1523030400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 28.74307 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1523289600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 29.64172 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1523548800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 30.53759 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1523808000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 31.43625 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1524067200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 32.3349 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1524326400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 33.23356 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1524585600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 34.13222 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1524844800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 35.03087 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1525104000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 35.92953 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1525363200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 36.8254 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1525622400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 37.72405 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1525881600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 38.62271 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1526140800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 39.52137 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1526400000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 40.42002 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1526659200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 41.31868 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1526918400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 42.21455 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1527177600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 43.1132 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1527436800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 44.01186 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1527696000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 44.91052 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1527955200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 45.80917 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1528214400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 46.70783 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1528473600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 47.6037 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1528732800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 48.50235 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1528992000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 49.40101 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1529251200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 50.29967 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1529510400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 51.19833 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1529769600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 52.09698 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1530028800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 52.99285 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1530288000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 53.89151 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1530547200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 54.79016 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1530806400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 55.68882 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1531065600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 56.58748 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1531324800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 57.48613 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1531584000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 58.382 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1531843200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 59.28066 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1532102400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 60.17931 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1532361600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 61.07797 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1532620800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 61.97663 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1532880000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 62.87528 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1533139200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 63.77115 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1533398400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 64.66981 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1533657600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 65.56846 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1533916800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 66.46712 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1534176000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 67.36578 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1534435200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 68.26443 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1534694400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 69.1603 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1534953600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 70.05896 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1535212800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 70.95761 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1535472000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 71.85627 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1535731200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 72.75493 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1535990400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 73.65358 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1536249600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 74.55224 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1536508800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 75.44811 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1536768000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 76.34676 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1537027200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 77.24542 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1537286400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 78.14408 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1537545600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 79.04274 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1537804800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 79.94139 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1538064000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 80.83726 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1538323200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 81.73591 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1538582400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 82.63457 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1538841600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 83.53323 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1539100800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 84.43189 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1539360000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 85.33054 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1539619200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 86.22641 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1539878400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 87.12507 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1540137600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 88.02372 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1540396800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 88.92238 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1540656000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 89.82104 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1540915200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 90.71969 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1541174400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 91.61556 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1541433600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 92.51422 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1541692800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 93.41287 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1541952000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 94.31153 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1542211200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 95.21019 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1542470400000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 96.10884 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1542729600000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 97.00471 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1542988800000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 97.90337 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1543248000000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 98.80202 }}
                        ></div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1543507200000}
                          className="esri-slider__tick minorTick"
                          style={{ left: 99.70068 }}
                        ></div>
                      </div>
                    </div> */}
                    <div className="esri-slider__ticks">
                      <div>
                        <div
                          aria-valuenow={1514736000000}
                          className="esri-slider__tick majorTick"
                          style={{ left: "0%" }}
                        ></div>
                        <div
                          aria-label="1月"
                          aria-valuenow={1514736000000}
                          aria-valuetext="1月"
                          className="esri-slider__tick-label"
                          style={{ transform: "translate(-50%)", left: "0%" }}
                        >
                          1月
                        </div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1517414400000}
                          className="esri-slider__tick majorTick"
                          style={{ left: "9.2824%" }}
                        ></div>
                        <div
                          aria-label="2月"
                          aria-valuenow={1517414400000}
                          aria-valuetext="2月"
                          className="esri-slider__tick-label"
                          style={{
                            transform: "translate(-50%)",
                            left: "9.2824%",
                          }}
                        >
                          2月
                        </div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1519833600000}
                          className="esri-slider__tick majorTick"
                          style={{ left: "17.66335%" }}
                        ></div>
                        <div
                          aria-label="3月"
                          aria-valuenow={1519833600000}
                          aria-valuetext="3月"
                          className="esri-slider__tick-label"
                          style={{
                            transform: "translate(-50%)",
                            left: "17.66335%",
                          }}
                        >
                          3月
                        </div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1522512000000}
                          className="esri-slider__tick majorTick"
                          style={{ left: "26.94575%" }}
                        ></div>
                        <div
                          aria-label="4月"
                          aria-valuenow={1522512000000}
                          aria-valuetext="4月"
                          className="esri-slider__tick-label"
                          style={{
                            transform: "translate(-50%)",
                            left: "26.94575%",
                          }}
                        >
                          4月
                        </div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1525104000000}
                          className="esri-slider__tick majorTick"
                          style={{ left: "35.92953%" }}
                        ></div>
                        <div
                          aria-label="5月"
                          aria-valuenow={1525104000000}
                          aria-valuetext="5月"
                          className="esri-slider__tick-label"
                          style={{
                            transform: "translate(-50%)",
                            left: "35.92953%",
                          }}
                        >
                          5月
                        </div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1527782400000}
                          className="esri-slider__tick majorTick"
                          style={{ left: "45.20914%" }}
                        ></div>
                        <div
                          aria-label="6月"
                          aria-valuenow={1527782400000}
                          aria-valuetext="6月"
                          className="esri-slider__tick-label"
                          style={{
                            transform: "translate(-50%)",
                            left: "45.20914%",
                          }}
                        >
                          6月
                        </div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1530374400000}
                          className="esri-slider__tick majorTick"
                          style={{ left: "54.19292%" }}
                        ></div>
                        <div
                          aria-label="7月"
                          aria-valuenow={1530374400000}
                          aria-valuetext="7月"
                          className="esri-slider__tick-label"
                          style={{
                            transform: "translate(-50%)",
                            left: "54.19292%",
                          }}
                        >
                          7月
                        </div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1533052800000}
                          className="esri-slider__tick majorTick"
                          style={{ left: "63.47253%" }}
                        ></div>
                        <div
                          aria-label="8月"
                          aria-valuenow={1533052800000}
                          aria-valuetext="8月"
                          className="esri-slider__tick-label"
                          style={{
                            transform: " translate(-50%)",
                            left: " 63.47253%",
                          }}
                        >
                          8月
                        </div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1535731200000}
                          className="esri-slider__tick majorTick"
                          style={{ left: "72.75493%" }}
                        ></div>
                        <div
                          aria-label="9月"
                          aria-valuenow={1535731200000}
                          aria-valuetext="9月"
                          className="esri-slider__tick-label"
                          style={{
                            transform: "translate(-50%)",
                            left: "72.75493%",
                          }}
                        >
                          9月
                        </div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1538323200000}
                          className="esri-slider__tick majorTick"
                          style={{ left: "81.73591%" }}
                        ></div>
                        <div
                          aria-label="10月"
                          aria-valuenow={1538323200000}
                          aria-valuetext="10月"
                          className="esri-slider__tick-label"
                          style={{
                            transform: "translate(-50%)",
                            left: "81.73591%",
                          }}
                        >
                          10月
                        </div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1541001600000}
                          className="esri-slider__tick majorTick"
                          style={{ left: "91.01832%" }}
                        ></div>
                        <div
                          aria-label="11月"
                          aria-valuenow={1541001600000}
                          aria-valuetext="11月"
                          className="esri-slider__tick-label"
                          style={{
                            transform: "translate(-50%)",
                            left: "91.01832%",
                          }}
                        >
                          11月
                        </div>
                      </div>
                      <div>
                        <div
                          aria-valuenow={1543593600000}
                          className="esri-slider__tick majorTick"
                          style={{ left: "99.9993%" }}
                        ></div>
                        <div
                          aria-label="12月"
                          aria-valuenow={1543593600000}
                          aria-valuetext="12月"
                          className="esri-slider__tick-label"
                          style={{
                            transform: "translate(-50%)",
                            left: "99.9993%",
                          }}
                        >
                          12月
                        </div>
                      </div>
                    </div>
                    <div className="esri-slider__extra-content"></div>
                  </div>
                  <div
                    aria-hidden="true"
                    className="esri-slider__max esri-hidden"
                    tabIndex={-1}
                  >
                    1543593600000
                  </div>
                </div>
              </div>
            </div>
            <div className="esri-time-slider__row">
              <div className="esri-time-slider__min">
                <div
                  className="esri-time-slider__min-date"
                  data-type="min"
                  data-layout="compact"
                  style={{ color: "#ff642e" }}
                >
                  Jun
                </div>
              </div>
              <div className="esri-time-slider__previous"></div>
              <div className="esri-time-slider__animation"></div>
              <div className="esri-time-slider__next"></div>
              <div className="esri-time-slider__max">
                <div
                  className="esri-time-slider__max-date"
                  data-type="max"
                  data-layout="compact"
                  style={{ color: "#ff642e" }}
                >
                  Aug
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
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
