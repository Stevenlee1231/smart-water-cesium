import suidongData from "./suidong.json";
const suidongArr: any[]=[]
suidongData.geometries[0].coordinates.map((value) => {
    return suidongArr.concat(value)
});
