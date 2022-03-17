import axios from "axios";

const baseURL = "http://103.118.40.123:8080";
export const getRainfall = (sensor: string) => {
  return axios.get(`${baseURL}/get/allwaterlevels`, {
    params: {
      sensor,
    },
  });
};
