import { Color, Cartesian3 } from "cesium";
import { PolygonGraphics, Entity } from "resium";
interface polygon {
  hierarchy: Array<number[]>;
  material: Color;
}
function Polygon(props: polygon) {
  const { hierarchy, material } = props;
  let positions: Array<number> = [];
  hierarchy.map((i) => {
    positions.push(i[0]);
    positions.push(i[1]);
  });

  return (
    <Entity>
      <PolygonGraphics
        hierarchy={{
          positions: Cartesian3.fromDegreesArray(positions),
          holes: [],
        }}
        material={material}
        outline
        outlineColor={Color.WHITESMOKE}
      ></PolygonGraphics>
    </Entity>
  );
}

export default Polygon;
