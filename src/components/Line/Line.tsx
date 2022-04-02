import { Polyline, PolylineCollection } from "resium";
import { Material, Color } from "cesium";
interface line {
  positions: Array<any>;
  material: Material;
  width: number;
}

const Line = (props: line) => {
  const { positions, material, width } = props;

  return (
    <PolylineCollection>
      <Polyline
        show={true}
        width={width}
        material={material}
        positions={positions}
      ></Polyline>
    </PolylineCollection>
  );
};
export default Line;
