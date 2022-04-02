import { Billboard, BillboardCollection, Entity, PointGraphics } from "resium";
import {
  Cartesian2,
  Cartesian3,
  Color,
  HorizontalOrigin,
  LabelStyle,
  VerticalOrigin,
} from "cesium";
interface point {
  size: number;
  position: Array<any>;
  location: Array<string>;
}

const Point = (props: point) => {
  const { size, position, location } = props;

  return (
    <div>
      {position.map((point, i) => {
        return (
          <>
            <Entity
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
            </Entity>
          </>
        );
      })}
    </div>
  );
};
export default Point;
