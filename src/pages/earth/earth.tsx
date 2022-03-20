import { Ion } from "cesium"
import { Viewer} from "resium"
Ion.defaultAccessToken="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2OTU2ZDE3Yi04ZDliLTRjZDAtYWYyOC01ZTk1OWFjOGNiZTUiLCJpZCI6NDQ3NjgsImlhdCI6MTYyNzk2Mjk1MX0.FrqhJD70CQLH9QsnePyuU0gmevojlEmGgF8swsUQue4"
export const EarthScreen = () => (
    <div style={{width:"100%"}}>
        <Viewer timeline={false} animation={false}>    
    </Viewer>
    </div>
)