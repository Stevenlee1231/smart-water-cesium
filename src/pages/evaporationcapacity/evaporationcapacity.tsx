/*
 * @Author: your name
 * @Date: 2022-03-21 12:57:39
 * @LastEditTime: 2022-03-21 13:54:38
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /smart-water-cesium/src/pages/evaporationcapacity/evaporationcapacity.tsx
 */
import { useRecoilState } from "recoil";
import { useOutletContext } from "react-router";
import { SiderTheme } from "antd/lib/layout/Sider";
import Chart from "../../components/Chart/Chart";
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


