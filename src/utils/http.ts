import axios from "axios";
import { useCallback } from "react";

const http = async (endpoint: string, sensor: string) => {
  return axios({
    method: "get",
    baseURL: "http://103.118.40.123:8080/get/",
    url: `/${endpoint}`,
    params: {
      sensor,
    },
  }).then((res) => {
    return res.data;
  });
};
export const useHttp = () => {
  return useCallback(
    ([endpoint, sensor]: Parameters<typeof http>) => http(endpoint, sensor),
    []
  );
};
