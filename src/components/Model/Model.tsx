import React, { MouseEventHandler, useEffect, useRef, useState } from "react";
import useFrameSetState from "../../utils/customHooks";
import getFixScaleEleTransPosition from "../../utils/getFixScaleEleTransPosition";
import addEventListener from "../../utils/addEventListener";
import "./Model.scss";
interface ModelProp {
  visible: boolean;
  src: string;
  onClose:MouseEventHandler<HTMLDivElement>
}
const initialPosition = {
  x: 0,
  y: 0,
};
function Model(props: ModelProp) {
  const [isMoving, setMoving] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useFrameSetState<{
    x: number;
    y: number;
  }>(initialPosition);
  const [rotate, setRotate] = useState(0);
  const [lastWheelZoomDirection, setLastWheelZoomDirection] = useState({
    wheelDirection: 0,
  });
  const originPositionRef = useRef<{
    originX: number;
    originY: number;
    deltaX: number;
    deltaY: number;
  }>({
    originX: 0,
    originY: 0,
    deltaX: 0,
    deltaY: 0,
  });
  const imgRef = useRef<any>();
  const onZoomIn = () => {
    setScale((value) => value + 1);
    setPosition(initialPosition);
  };

  const onZoomOut = () => {
    if (scale > 1) {
      setScale((value) => value - 1);
    }
    setPosition(initialPosition);
  };
  const onMouseUp: React.MouseEventHandler<HTMLBodyElement> = () => {
    if (isMoving) {
      const width = imgRef.current.offsetWidth * scale;
      const height = imgRef.current.offsetHeight * scale;
      // eslint-disable-next-line @typescript-eslint/no-shadow
      const { left, top } = imgRef.current.getBoundingClientRect();
      const isRotate = rotate % 180 !== 0;

      setMoving(false);

      const fixState = getFixScaleEleTransPosition(
        isRotate ? height : width,
        isRotate ? width : height,
        left,
        top
      );

      if (fixState) {
        setPosition({ ...fixState });
      }
    }
  };

  const onMouseDown: React.MouseEventHandler<HTMLDivElement> = (event) => {
    // Only allow main button
    if (event.button !== 0) return;
    event.preventDefault();
    // Without this mask close will abnormal
    event.stopPropagation();
    originPositionRef.current.deltaX = event.pageX - position.x;
    originPositionRef.current.deltaY = event.pageY - position.y;
    originPositionRef.current.originX = position.x;
    originPositionRef.current.originY = position.y;
    setMoving(true);
  };

  const onMouseMove: React.MouseEventHandler<HTMLBodyElement> = (event) => {
    if (isMoving) {
      setPosition({
        x: event.pageX - originPositionRef.current.deltaX,
        y: event.pageY - originPositionRef.current.deltaY,
      });
    }
  };

  const onWheelMove: React.WheelEventHandler<HTMLBodyElement> = (event) => {
    console.log("wheel");
    // if (!visible) return;
    event.preventDefault();
    const wheelDirection = event.deltaY;
    setLastWheelZoomDirection({ wheelDirection });
  };
  useEffect(() => {
    let onTopMouseUpListener: any;
    let onTopMouseMoveListener: any;

    const onMouseUpListener = addEventListener(
      window,
      "mouseup",
      onMouseUp,
      false
    );
    const onMouseMoveListener = addEventListener(
      window,
      "mousemove",
      onMouseMove,
      false
    );
    const onScrollWheelListener = addEventListener(
      window,
      "wheel",
      onWheelMove,
      {
        passive: false,
      }
    );
    // const onKeyDownListener = addEventListener(window, 'keydown', onKeyDown, false);

    try {
      // Resolve if in iframe lost event
      /* istanbul ignore next */
      if (window.top !== window.self) {
        onTopMouseUpListener = addEventListener(
          window.top,
          "mouseup",
          onMouseUp,
          false
        );
        onTopMouseMoveListener = addEventListener(
          window.top,
          "mousemove",
          onMouseMove,
          false
        );
      }
    } catch (error) {
      /* istanbul ignore next */
      // warning(false, `[rc-image] ${error}`);
    }

    return () => {
      onMouseUpListener.remove();
      onMouseMoveListener.remove();
      onScrollWheelListener.remove();
      // onKeyDownListener.remove();

      /* istanbul ignore next */
      if (onTopMouseUpListener) onTopMouseUpListener.remove();
      /* istanbul ignore next */
      if (onTopMouseMoveListener) onTopMouseMoveListener.remove();
    };
  }, [isMoving]);
  useEffect(() => {
    const { wheelDirection } = lastWheelZoomDirection;
    if (wheelDirection > 0) {
      onZoomOut();
    } else if (wheelDirection < 0) {
      onZoomIn();
    }
  }, [lastWheelZoomDirection]);
  return (
    <>
      {props.visible ? (
        <div className="model-wrap">
          <div className="model-close" onClick={props.onClose}></div>
          <div className="model-content">
            <div
              className="model-image-wrap"
              style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
              }}
            >
              <img
                onMouseDown={onMouseDown}
                ref={imgRef}
                src={props.src}
                alt=""
                style={{
                  transform: `scale3d(${scale}, ${scale}, 1) rotate(${rotate}deg)`,
                }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Model;
