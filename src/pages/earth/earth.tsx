
import { Ion, Transforms } from "cesium"
import { Viewer,CameraFlyTo,Entity,PointGraphics, PolylineCollection} from "resium"
import { Cartesian3} from "cesium"
import Line from "../../components/Line/Line"
import suidongData from "../../assets/datas/suidong.json"
import pointData from "../../assets/datas/obswell.json"
Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OTU2ZDE3Yi04ZDliLTRjZDAtYWYyOC01ZTk1OWFjOGNiZTUiLCJpZCI6NDQ3NjgsImlhdCI6MTYyNzk2Mjk1MX0.FrqhJD70CQLH9QsnePyuU0gmevojlEmGgF8swsUQue4"


export const EarthScreen = () => {
  const lineData=suidongData.geometries[0].coordinates.map((value)=>{
      return Cartesian3.fromDegrees(value[0],value[1],0)
  })
  const position = Cartesian3.fromDegrees(100.075,26.602, 100);
  return(
    <div style={{width:"100%",height:"100%"}}>
        <Viewer timeline={false} animation={false}  >    
        {/* <Entity position={position}>
        <PointGraphics pixelSize={10} />
        </Entity> */}
        <PolylineCollection>
          <Line positions={lineData}></Line>
          </PolylineCollection>
            <CameraFlyTo duration={0} destination={Cartesian3.fromDegrees(100.075,26.602, 15000.0)}></CameraFlyTo>
        </Viewer>
    </div>
  )}