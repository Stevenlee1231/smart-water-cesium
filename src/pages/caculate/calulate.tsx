import {  Form,  Input, Select, } from "antd"


export const CalulateScreen = () => {
    return <div style={{ }}>
        <div style={{ left:"50%",position:"absolute",display:"flex",flexDirection:"column",flexWrap:"wrap"}}>
        <Form layout={"vertical"} >
        <Form.Item label={"隧道"} >
        <Select defaultValue="隧洞段及桩号" style={{ width: 240}} size={"middle"} >
      <Select.Option value="季家坡隧道YK16+040">季家坡隧道YK16+040</Select.Option>
      <Select.Option value="季家坡隧道YK16+086~+022">季家坡隧道YK16+086~+022</Select.Option>
      <Select.Option value="天池隧道K35+040" >
      天池隧道K35+040
      </Select.Option>
            <Select.Option value="马鹿箐隧道PDK255+978">马鹿箐隧道PDK255+978</Select.Option>
      <Select.Option value="野三关隧道1线DK124+602">野三关隧道1线DK124+602</Select.Option>
            
      <Select.Option value="宜万线齐岳山隧道DK363+540">宜万线齐岳山隧道DK363+540</Select.Option>

        </Select>
        </Form.Item>
        
        <Form.Item label={"汇水面积"}>
        <Input style={{ width: 240}}/>
        </Form.Item>
        <Form.Item label={"汇水面积"}>
        <Input style={{ width: 240}}/>
            </Form.Item>
            <Form.Item label={"汇水面积"}>
        <Input style={{ width: 240}}/>
            </Form.Item>
            <Form.Item label={"汇水面积"}>
        <Input style={{ width: 240}}/>
        </Form.Item>
        <Form.Item label={"汇水面积"}>
        <Input style={{ width: 240}}/>
                </Form.Item>
                <Form.Item label={"汇水面积"}>
        <Input style={{ width: 240}}/>
                </Form.Item>
                <Form.Item label={"汇水面积"}>
        <Input style={{ width: 240}}/>
                </Form.Item>
                <Form.Item label={"汇水面积"}>
        <Input style={{ width: 240}}/>
                </Form.Item>
               
                
               
                
    </Form>
        </div>
    </div>
}