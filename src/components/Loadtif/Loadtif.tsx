import React from "react";
import { Resource, UrlTemplateImageryProvider } from "cesium";
import { ImageryLayer } from "resium";
interface loadtif {
  url: string | Resource;
  alpha: number;
}
function Loadtif(props: loadtif) {
  const { url, alpha } = props;
  return (
    <>
      <ImageryLayer
        imageryProvider={
          new UrlTemplateImageryProvider({
            //@ts-ignore
            url: { url },
          })
        }
        alpha={alpha}
      />{" "}
    </>
  );
}

export default Loadtif;
