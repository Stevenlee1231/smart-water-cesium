<<<<<<< HEAD
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import raf from "./raf";

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

type SetActionType<T> = Partial<T> | ((state: T) => Partial<T>);

export default function useFrameSetState<T extends object>(
  initial: T
): [T, (newState: SetActionType<T>) => void] {
  const frame = useRef(null);
  const [state, setState] = useState(initial);

  const queue = useRef<SetActionType<T>[]>([]);

  const setFrameState = (newState: SetActionType<T>) => {
    if (frame.current === null) {
      queue.current = [];
      //@ts-ignore
      frame.current = raf(() => {
        setState((preState) => {
          let memoState: any = preState;
          queue.current.forEach((queueState) => {
            memoState = { ...memoState, ...queueState };
          });
          frame.current = null;

          return memoState;
        });
      });
    }

    queue.current.push(newState);
  };
  //@ts-ignore
  useEffect(() => () => frame.current && raf.cancel(frame.current), []);

  return [state, setFrameState];
}
=======
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { URLSearchParamsInit, useSearchParams } from "react-router-dom";
import raf from "./raf";

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

type SetActionType<T> = Partial<T> | ((state: T) => Partial<T>);

export default function useFrameSetState<T extends object>(
  initial: T
): [T, (newState: SetActionType<T>) => void] {
  const frame = useRef(null);
  const [state, setState] = useState(initial);

  const queue = useRef<SetActionType<T>[]>([]);

  const setFrameState = (newState: SetActionType<T>) => {
    if (frame.current === null) {
      queue.current = [];
      //@ts-ignore
      frame.current = raf(() => {
        setState((preState) => {
          let memoState: any = preState;
          queue.current.forEach((queueState) => {
            memoState = { ...memoState, ...queueState };
          });
          frame.current = null;

          return memoState;
        });
      });
    }

    queue.current.push(newState);
  };
  //@ts-ignore
  useEffect(() => () => frame.current && raf.cancel(frame.current), []);

  return [state, setFrameState];
}
>>>>>>> e351d025d9b6cb08cd80bc569f2ae03000f61cde
