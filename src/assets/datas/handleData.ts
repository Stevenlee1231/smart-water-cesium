import suidongData from "./suidong.json";
const suidongArr: any[]=[]
suidongData.geometries[0].coordinates.map((value) => {
    return suidongArr.concat(value)
});
<<<<<<< HEAD
=======

console.log(suidongData)
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
