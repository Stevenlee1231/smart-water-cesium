import { CesiumMovementEvent, Polyline, PolylineCollection } from "resium";
import { Material, Color } from "cesium";
interface line {
  positions: Array<any>;
  material: Material;
  width: number;
  key?: any;
  id?: number;
  mouseEnter?: Function;
  mouseLeave?: Function;
}
type resiumMouseEvent = (movement: CesiumMovementEvent, target: any) => void;
const Line = (props: line) => {
  const { positions, material, width, id, mouseEnter, mouseLeave } = props;

  return (
    <PolylineCollection>
      <Polyline
        id={id}
        show={true}
        width={width}
        material={material}
        positions={positions}
        onMouseEnter={mouseEnter as resiumMouseEvent}
        onMouseLeave={mouseLeave as resiumMouseEvent}
      ></Polyline>
    </PolylineCollection>
  );
};
export default Line;
