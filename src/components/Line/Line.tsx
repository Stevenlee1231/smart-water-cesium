import { Polyline, PolylineCollection } from "resium";
import { Material, Color } from "cesium";
interface line {
  positions: Array<any>;
}

const Line = (props: line) => {
  const { positions } = props;
  const material = Material.fromType("Color", {
    color: new Color(255, 0, 0, 1),
  });
    return (
      
    <PolylineCollection >
      <Polyline
        show={true}
        width={10}
        material={material}
        positions={positions}
      ></Polyline>
    </PolylineCollection>
  );
};
export default Line;
