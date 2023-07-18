import { Resource, UrlTemplateImageryProvider } from "cesium";
import { ImageryLayer } from "resium";
interface loadtif {
  url: string | Resource;
  visible: boolean;
}
function Loadtif(props: loadtif) {
  const { url, visible } = props;
  console.log(url);
  return (
    <>
      <ImageryLayer
        imageryProvider={
          new UrlTemplateImageryProvider({
            url: url.toString(),
          })
        }
        alpha={visible ? 1 : 0}
<<<<<<< HEAD
      />
=======
      />{" "}
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
    </>
  );
}

export default Loadtif;
