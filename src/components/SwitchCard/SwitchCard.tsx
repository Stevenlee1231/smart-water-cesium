import { Card, Switch } from "antd"
interface CardProps {
    mode: string,
    setearthContentVisibel: any
    earthContentVisibel: any
    title:string
}

export const SwitchCard = ({ mode, setearthContentVisibel, earthContentVisibel,title }: CardProps) => {
    return (
        <>
            <div style={{ position: "absolute", top: "180px", right: "25px" }}>
                <Card title={title} bordered={false}>
                    开关：
                    <Switch onChange={(checked) => { setearthContentVisibel((prev: any) => { return { ...prev, [mode]: checked } }) }} checked={earthContentVisibel[mode]} />
                </Card>
            </div>
        </>
    )
}