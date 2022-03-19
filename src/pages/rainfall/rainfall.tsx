import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { useOutletContext } from "react-router";
import { SiderTheme } from "antd/lib/layout/Sider";
import Chart from "../../components/Chart";
import { theme_store } from "../../store/theme";
import { getRainfall } from "../../api/chart";
function Rainfall() {
  const eleMsg = useOutletContext<any>();
  useEffect(() => {
    console.log(eleMsg);
  }, [eleMsg]);
  const [data, setData] = useState({
    xAxis: [],
    series: [],
  });
  const [theme, setTheme] = useRecoilState<SiderTheme | string>(theme_store);
  useEffect(() => {
    getRainfall("XLP4ZK2").then((res) => {
      const xAxis = res.data.map((value: any, index: any) => {
        return value.date;
      });
      const series = res.data.map((value: any, index: any) => {
        return value.level;
      });
      setData((prev) => {
        return {
          ...prev,
          xAxis,
          series,
        };
      });
    });
  }, []);
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <div style={{ width: `${eleMsg.width}px`, height: `${eleMsg.height}px` }}>
      {data.series != [] &&
        data.xAxis != [] &&
        eleMsg.width != 0 &&
        eleMsg.height != 0 && (
          <Chart
            title="降水量/mm"
            theme={theme}
            // @ts-ignore
            xAxis={data.xAxis}
            // @ts-ignore
            series={data.series}
          ></Chart>
        )}
    </div>
  );
}

export default Rainfall;
