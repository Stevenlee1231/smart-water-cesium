import { MutableRefObject, useEffect, useRef, useState } from "react";

export const useDocumentTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

//获取元素的宽和高
interface widtheight {
  width: number;
  height: number;
}
export const useWidtheight = <T>(): [
  MutableRefObject<T | null>,
  widtheight
] => {
  const [screenWidth, setScreenWidth] = useState(0);
  const [value, setValue] = useState<widtheight>({
    width: 0,
    height: 0,
  });
  const ref: MutableRefObject<T | null> = useRef<T | null>(null);
  useEffect(() => {
    window.addEventListener("resize", (e: any) => {
      setScreenWidth(e.target.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setScreenWidth(0);
      });
    };
  });
  useEffect(() => {
    const node = ref.current as any;
    if (node) setValue({ width: node.offsetWidth, height: node.offsetHeight });
  }, [ref.current, screenWidth]);
  return [ref, value];
};
