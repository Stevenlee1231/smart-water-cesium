import React, { Suspense, useEffect, useState } from "react";
import { Row, Col, Card, Switch } from "antd";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import "./formation.scss";
export const FormationScreen = () => {
  const [switchsValue, setSwitchsValue] = useState({
    0: true,
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
    6: true,
    7: true,
    8: true,
    9: true,
    10: true,
    11: true,
    12: true,
    13: true,
    14: true,
    15: true,
    16: true,
    17: true,
    18: true,
    19: true,
    20: true,
    21: true,
    22: true,
    23: true,
    24: true,
    25: true,
    26: true,
    27: true,
  });
  const handleSwitch = (no: string) => {
    return (...args: any[]) => {
      setSwitchsValue((prev) => {
        return { ...prev, [no]: args[0] };
      });
    };
  };
  // useEffect(() => {
  //   console.log(switchsValue);
  // }, [switchsValue]);
  const url =
    process.env.NODE_ENV === "development"
      ? "/api/react/Model.gltf"
      : "http://103.118.40.123:9999/react/Model.gltf";
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
      }}
    >
      <Card className="switch-wrap">
        {Object.entries(switchsValue).map((value, index) => {
          return (
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={4}>
                <span
                  style={{
                    color: "#0052CC",
                    fontWeight: 800,
                  }}
                >
                  {value[0]}：
                </span>
              </Col>
              <Col span={4}>
                <Switch
                  checked={value[1]}
                  onChange={handleSwitch(value[0])}
                  size="small"
                ></Switch>
              </Col>
            </Row>
          );
        })}
      </Card>
      <Canvas
        camera={{ position: [0, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: "#111a21",
          width: "85%",
          height: "95%",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model position={[1.5, 9, -5]} url={url} switchValue={switchsValue} />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
};
