import { useRecoilState } from "recoil";
import { useOutletContext } from "react-router";
import { SiderTheme } from "antd/lib/layout/Sider";
import Chart from "../../components/Chart";
import { theme_store } from "../../store/theme";
import { useGetData } from "../../utils/data";
export const Evaporationcapacity=()=> {
  const eleMsg = useOutletContext<any>();
  const [theme] = useRecoilState<SiderTheme | string>(theme_store);
  const {series,xAxis}= useGetData("evaporationcapacitys","XinfengWeatherStation",false)
  return (
    <div style={{ width: `${eleMsg.width}px`, height: `${eleMsg.height}px` }}>
      {series !== [] &&
        xAxis !== [] &&
        eleMsg.width !== 0 &&
        eleMsg.height !== 0 && (
          <Chart
            title="蒸发量/mm"
            theme={theme}           
            xAxis={xAxis}
            series={series}
          ></Chart>
        )}
    </div>
  );
}


