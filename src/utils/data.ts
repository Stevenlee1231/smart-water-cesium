import { useEffect, useState } from "react";
import { useHttp } from "./http";

export const useGetData = (
  endpoint: string,
  sensor: string,
  isLevel: boolean
) => {
  const [data, setData] = useState({
    xAxis: [],
    series: [],
    datas: [],
  });
  const client = useHttp();
  useEffect(() => {
    client([endpoint, sensor]).then((data) => {
      const xAxis = data.map((value: any) => {
        return value.date;
      });
      const series = data.map((value: any) => {
        return isLevel ? value.level : value.waterlevel;
      });
      const datas = data.map((value: any) => {
        return value;
      });
      setData((prev) => {
        return {
          ...prev,
          xAxis,
          series,
          datas,
        };
      });
    });
  }, []);
  return data;
};
