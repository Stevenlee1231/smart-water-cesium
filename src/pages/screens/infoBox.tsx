import { Switch } from "antd";
export const InfoBox = () => {
    const whiteBackgroundStyle = {
        position:'relative',
        left:10,
        top:25,
        backgroundColor:'white',
        width:130
    }
    return (
        <div style={{ position: 'fixed', top: 100, right: 30, zIndex: 999,backgroundColor:'rgba(255,255,255,0.8)',width:150,height:160,borderRadius:3}}>
            <div style={{ position: 'relative', top: 10, left: 10, zIndex: 999,backgroundColor:'rgb(220,230,247)',width:130,height:50,opacity:0.8,borderRadius:3}}>
                <span style={{position: 'relative',top:5,left:15,color:'black',fontSize:24}}>气象信息</span>
            </div>
            <div style={whiteBackgroundStyle as any}>
                <span style={{position: 'relative',left:3}}>气象站</span><Switch style={{left:47}} size="small"></Switch>
            </div>
            <div style={whiteBackgroundStyle as any}>
                <span style={{position: 'relative',left:3}}>地下水监测点</span>
                <Switch style={{left:5}} 
                size="small"
                ></Switch>
            </div>
            <div style={whiteBackgroundStyle as any}>
                <span style={{position: 'relative',left:3}}>突涌水监测点</span>
                <Switch style={{left:5}} 
                size="small"
                ></Switch>
            </div>
        </div>
    );
};