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
  location:Array<string>
}

const Point = (props: point) => {
  const { size, position ,location} = props;
 
  return (
    <div>
      {position.map((point, i) => {
        return (
          <>
            <Entity
              position={point}
              label={{
                text: location[i],
                font: "14pt sans-serif",
                fillColor: Color.BLACK,
                backgroundColor: Color.GREEN,
                showBackground: true,
                outlineColor: Color.WHITE,
                outlineWidth: 10,
                scale: 1.0,
                style: LabelStyle.FILL_AND_OUTLINE,
                horizontalOrigin: HorizontalOrigin.LEFT,
                pixelOffset: new Cartesian2(10, 0),
                show: true,
              }}
              key={i}
                    
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
