import { Switch } from "antd";
import { SiderTheme } from "antd/lib/layout/Sider";
import Weather from "../../components/SwitchCard/weather";
import {Modal} from "antd";
import { useState } from "react";
export const InfoBox = ({
    theme,
    setEarthVisible,
    earthVisible,
  }: {
    theme: SiderTheme | string;
    setEarthVisible: any;
    earthVisible: any;
  }) => {
    const handleSwitch = (key: string) => {
        return (checked: boolean, e: any) => {
          e.stopPropagation();
          setEarthVisible((prev: any) => {
            return { ...prev, [key]: checked };
          });
        };
      };
    const whiteBackgroundStyle = {
        position:'relative',
        left:10,
        top:15,
        backgroundColor:'white',
        width:130
    }
    const [open, setOpen] = useState(false);
    const showModal = () => {
      setOpen(true);
    };
  
    const hideModal = () => {
      setOpen(false);
    }
    return (
        <div style={{ position: 'fixed', top: 100, right: 30, zIndex: 999,backgroundColor:'rgba(255,255,255,0.8)',width:150,height:160,borderRadius:3}}>
            <div style={{ position: 'relative', top: 10, left: 10, zIndex: 999,backgroundColor:'rgb(220,230,247)',width:130,height:50,opacity:0.8,borderRadius:3}}>
                <span style={{position: 'relative',top:5,left:15,color:'black',fontSize:24}}>气象信息</span>
            </div>
            <div style={whiteBackgroundStyle as any}>
                <span style={{position: 'relative',left:3}}>气象站</span>
                <Switch 
                onClick={showModal}
                checked={open}
                style={{left:47}} 
                size="small"></Switch>
            </div>
            <div style={whiteBackgroundStyle as any}>
                <span style={{position: 'relative',left:3}}>地下水监测点</span>
                <Switch style={{left:5}} 
                size="small"
                onClick={handleSwitch("undergroundWater")}
                checked={earthVisible["undergroundWater"]}
                ></Switch>
            </div>
            <div style={whiteBackgroundStyle as any}>
                <span style={{position: 'relative',left:3}}>突涌水监测点</span>
                <Switch style={{left:5}} 
                size="small"
                onClick={handleSwitch("gushing")}
                checked={earthVisible["gushing"]}
                ></Switch>
            </div>
            <div style={whiteBackgroundStyle as any}>
                <span style={{position: 'relative',left:3}}>泉流量监测点</span>
                <Switch style={{left:5}} 
                size="small"
                onClick={handleSwitch("spring")}
                checked={earthVisible["spring"]}
                ></Switch>
            </div>
            {open ?<Modal
              width={600}
              visible={open}
              onOk={hideModal}
              onCancel={hideModal}
              okText="确认"
              cancelText="取消"
              centered={true}
            > 
            <Weather></Weather>
            <span>点位信息：{"降雨蒸发自动监测站"}</span><br/>
            <span>备注：{" 昆呈隧洞标石柱气象自动监测点于2021年6月17日完成土建及设备调试"}</span>
            </Modal>: undefined}
        </div>
    )  
};