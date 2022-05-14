import { Entity, PointGraphics, Primitive } from "resium";
import backgroundImg from "../../assets/images/jing.png";
import {
  Cartesian2,
  Color,
  EllipsoidSurfaceAppearance,
  GeometryInstance,
  HorizontalOrigin,
  LabelStyle,
  Material,
} from "cesium";
interface point {
  // size: number;
  // position: Object;
  // location: Array<string>;
  geometry: GeometryInstance;
}
const appearance = new EllipsoidSurfaceAppearance({
  aboveGround: false,
  material: new Material({
    fabric: {
      type: "Image",
      uniforms: {
        image: backgroundImg,
      },
    },
  }),
});
const Point = (props: point) => {
  const { geometry } = props;
  console.log(geometry);
  return (
    <>
      <Primitive
        geometryInstances={geometry}
        appearance={appearance}
      ></Primitive>
      {/* <Entity
              key={i}
              position={point}
              label={{
                text: location[i],
                font: "14pt sans-serif",
                fillColor: Color.RED,
                backgroundColor: Color.GREEN,
                showBackground: true,
                outlineColor: Color.ORANGERED,
                outlineWidth: 10,
                scale: 1.0,
                style: LabelStyle.FILL_AND_OUTLINE,
                horizontalOrigin: HorizontalOrigin.LEFT,
                pixelOffset: new Cartesian2(20, 0),
                show: true,
              }}
            >
              <PointGraphics pixelSize={size}></PointGraphics>
            </Entity> */}
    </>
  );
};
export default Point;
