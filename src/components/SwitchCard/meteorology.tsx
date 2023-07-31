import { CardProps } from "./tunnel";
import Point from "../Point/Point";
import {
  Cartesian3,
  CircleGeometry,
  Color,
  EllipsoidSurfaceAppearance,
  GeometryInstance,
  LabelStyle,
  NearFarScalar,
} from "cesium";
import stationIcon from "../../assets/images/station.png";
import { BillboardCollection, Label, LabelCollection } from "resium";
import tunnel from "../../assets/datas/obswell.json";
import { useState } from "react";
import Legend from "../Legend/Legend";
import { Drawer,Tabs } from "antd";
const { TabPane } = Tabs;
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
const tunnelsText = tunnel.geometries.map((obj) => {
  return Cartesian3.fromDegrees(
    obj.coordinates[0] + 0.0015,
    obj.coordinates[1],
    0
  );
});

interface meteorology {
  visible: boolean;
  showDrawer: any;
  onClose: any;
}
const Meteorology = (props: meteorology) => {
  const { visible, onClose } = props;
  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "100px",
          right: "25px",
        }}
      >
        <Drawer
          title="滇中引水工程简介"
          placement="right"
          onClose={onClose}
          visible={visible}
          size={"large"}
        > <Tabs>
          <TabPane tab="项目简介" key="1">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;云南省滇中地区包括昆明、玉溪、楚雄、曲靖、大理、红河以及丽江50个县（市、区），国土面积9.63万km<sup>2</sup>。该区域生产总值约占云南省地区生产总值的61%，是云南省经济社会发展的核心地区。滇中地区又是长江流域三大干旱区之一，水资源量仅占全省的12%，资源性缺水与工程性缺水并存，已成为制约滇中地区乃至云南省经济社会可持续发展的瓶颈。滇中引水是国务院批复的《长江流域综合利用规划简要报告（1990 年修订）》、《全国水资源综合规划（2010～2030 年）》和《长江流域综合规划（2012～2030 年）》提出解决滇中地区严重缺水的特大型跨流域调水工程。实施该工程可有效缓解滇中地区较长时期缺水矛盾，改善河道及高原湖泊的生态及水环境状况，对促进云南省经济社会协调、可持续发展具有重要作用。该工程是国务院确定的 172 项节水、供水重大水利工程之一。经过多年努力，2017年5月《滇中引水工程可行性研究报告》获国家发展和改革委员会正式批复。经水利水电规划设计总院审查，2018年3月《滇中引水工程初步设计报告》获水利部行政许可。从此，在云南省滇中引水工程建设管理局的精心组织下，工程建设有序展开，逐渐进入高潮。
<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;滇中引水工程是从金沙江上游石鼓河段取水，以解决滇中区水资源短缺问题的特大型跨流域引（调）水工程，主要任务是向滇中城镇生活及工业供水，兼顾农业与生态补水。工程受水区包括丽江、大理、楚雄、昆明、玉溪及红河6个州市的35个县（市、区），国土面积3.69万km<sup>2</sup>；工程多年平均引水量34.03亿m<sup>3</sup>。滇中引水工程等别为Ⅰ等工程，主要建筑物级别为1级，次要建筑物为3级。滇中引水工程由石鼓水源工程和输水工程两部分组成，工程总工期为96个月，控制性项目为大理I段的香炉山隧洞。
          </TabPane>
          <TabPane tab="石鼓水源工程" key="2">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;水源工程为金沙江石鼓大同河段取水、一级地下泵站提水，主要建筑物包括引水渠、进水塔、进水流道及调压室、地下泵房及主变洞、出水隧洞、出水池和地面开关站等，地下泵站布置于冲江河右岸竹园村上游山体中，设计抽水流量135m<sup>3</sup>/s，最大提水净扬程219.16m，装机12台（2台备用），总装机容量480MW。
          </TabPane>
          <TabPane tab="输水工程" key="3">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;输水总干渠全长664.236km，自丽江石鼓渠首由北向南布设，经香炉山长隧洞穿越金沙江与澜沧江流域分水岭马耳山脉后到大理州鹤庆县松桂，后向南进入澜沧江流域至洱海东岸长育村；在洱海东岸转而向东南，经祥云在万家进入楚雄，在楚雄北部沿金沙江、红河分水岭由西向东至罗茨、进入昆明；经昆明东北部城区外围转而向东南经呈贡至新庄，向南进入玉溪杞麓湖西岸；在旧寨转向东南进入红河建水，经羊街至红河蒙自，终点为红河新坡背。总干渠分为大理I段（长114.992km）、大理Ⅱ段（长104.071km）、楚雄段（长142.816km）、昆明段（长116.758km）、玉溪段（长77.069km）及红河段（长108.530km）共6段。
总干渠全线主要输水建筑物118座，由隧洞、渡槽、倒虹吸、暗涵及消能电站组成，其中隧洞58座，长611.986km，占比92.13%；渡槽17座，长3.700km占比0.56%；倒虹吸25座，长42.595km、占比6.41%；暗涵15座，长4.891km，占比0.74%；消能电站3座，长1.063km，占比0.16%。

          </TabPane>
        </Tabs>
          
        </Drawer>
        {/* {visible &&
          tunnels.map((value, index) => {
            const circleGeometry = new GeometryInstance({
              geometry: new CircleGeometry({
                center: value,
                radius: 150,
                vertexFormat: EllipsoidSurfaceAppearance.VERTEX_FORMAT,
              }),
              id: index,
            });
            return (
              <BillboardCollection>
                <LabelCollection>
                  <Point
                    key={index}
                    geometry={circleGeometry}
                    mode="site"
                    id={"XinfengWeatherStation"}
                    position={value}
                    textPosition={tunnelsText[index]}
                  />
                </LabelCollection>
              </BillboardCollection>
            );
          })} */}
        {/* {visible &&
          tunnelsText.map((value, index) => {
            return (
              <LabelCollection>
                <Label
                  position={value}
                  text="气象站"
                  fillColor={Color.WHITE}
                  outlineColor={Color.BLACK}
                  outlineWidth={20}
                  style={LabelStyle.FILL_AND_OUTLINE}
                  font={"14pt Microsoft Yahei"}
                  translucencyByDistance={new NearFarScalar(
                    0.0e5,
                    1.0,
                    0.1e7,
                    0.0
                  )}
                ></Label>
              </LabelCollection>
            );
          })} */}
      </div>
    </>
  );
};
export default Meteorology;
