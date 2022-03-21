import { Entity , PointGraphics } from "resium"
import { Cartesian3, Color } from "cesium"
interface point{
    size:number,
    position:Array<number>
    ishow:boolean
    color:any
}
const Point=(props:point)=>{
    const {size,position,ishow,color}=props
    const pointPosition=Cartesian3.fromDegrees(position[0],position[1],0)
    return (
        <div style={ishow?{display:"block"}:{display:"none"}} className="point-wrap">
            <Entity  position={pointPosition}>
                <PointGraphics color={color} pixelSize={size}></PointGraphics>
            </Entity>
            </div>
    )
}
export default Point