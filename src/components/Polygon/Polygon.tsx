import { Color, Cartesian3 } from "cesium";
import React from "react";
import { PolygonGraphics, Entity } from "resium";
interface polygon {
  hierarchy: Array<any>;
  material: Color;
}
function Polygon(props: polygon) {
  const { hierarchy, material } = props;
  return (
    <Entity>
      <PolygonGraphics
        hierarchy={Cartesian3.fromDegreesArray(hierarchy) as any}
        material={material}
        outline
        outlineColor={Color.WHITESMOKE}
      ></PolygonGraphics>
    </Entity>
  );
}

export default Polygon;
