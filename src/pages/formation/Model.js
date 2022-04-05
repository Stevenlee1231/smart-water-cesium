import React, { useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useLoader } from "@react-three/fiber";

export default function Model({ ...props }) {
  const group = useRef();
  const { url, switchValue } = props;
  const { nodes, materials } = useLoader(GLTFLoader, url);

  return (
    <group ref={group} {...props} dispose={null}>
      {switchValue[0] && (
        <mesh geometry={nodes.mesh0.geometry} material={materials.Material_0} />
      )}
      {switchValue[1] && (
        <mesh geometry={nodes.mesh1.geometry} material={materials.Material_1} />
      )}
      {switchValue[2] && (
        <mesh geometry={nodes.mesh2.geometry} material={materials.Material_2} />
      )}
      {switchValue[3] && (
        <mesh geometry={nodes.mesh3.geometry} material={materials.Material_3} />
      )}
      {switchValue[4] && (
        <mesh geometry={nodes.mesh4.geometry} material={materials.Material_4} />
      )}
      {switchValue[5] && (
        <mesh geometry={nodes.mesh5.geometry} material={materials.Material_5} />
      )}
      {switchValue[6] && (
        <mesh geometry={nodes.mesh6.geometry} material={materials.Material_6} />
      )}
      {switchValue[7] && (
        <mesh geometry={nodes.mesh7.geometry} material={materials.Material_7} />
      )}
      {switchValue[8] && (
        <mesh geometry={nodes.mesh8.geometry} material={materials.Material_8} />
      )}
      {switchValue[9] && (
        <mesh geometry={nodes.mesh9.geometry} material={materials.Material_9} />
      )}
      {switchValue[10] && (
        <mesh
          geometry={nodes.mesh10.geometry}
          material={materials.Material_10}
        />
      )}
      {switchValue[11] && (
        <mesh
          geometry={nodes.mesh11.geometry}
          material={materials.Material_11}
        />
      )}
      {switchValue[12] && (
        <mesh
          geometry={nodes.mesh12.geometry}
          material={materials.Material_12}
        />
      )}
      {switchValue[13] && (
        <mesh
          geometry={nodes.mesh13.geometry}
          material={materials.Material_13}
        />
      )}
      {switchValue[14] && (
        <mesh
          geometry={nodes.mesh14.geometry}
          material={materials.Material_14}
        />
      )}
      {switchValue[15] && (
        <mesh
          geometry={nodes.mesh15.geometry}
          material={materials.Material_15}
        />
      )}
      {switchValue[16] && (
        <mesh
          geometry={nodes.mesh16.geometry}
          material={materials.Material_16}
        />
      )}
      {switchValue[17] && (
        <mesh
          geometry={nodes.mesh17.geometry}
          material={materials.Material_17}
        />
      )}
      {switchValue[18] && (
        <mesh
          geometry={nodes.mesh18.geometry}
          material={materials.Material_18}
        />
      )}
      {switchValue[19] && (
        <mesh
          geometry={nodes.mesh19.geometry}
          material={materials.Material_19}
        />
      )}
      {switchValue[20] && (
        <mesh
          geometry={nodes.mesh20.geometry}
          material={materials.Material_20}
        />
      )}
      {switchValue[21] && (
        <mesh
          geometry={nodes.mesh21.geometry}
          material={materials.Material_21}
        />
      )}
      {switchValue[22] && (
        <mesh
          geometry={nodes.mesh22.geometry}
          material={materials.Material_22}
        />
      )}
      {switchValue[23] && (
        <mesh
          geometry={nodes.mesh23.geometry}
          material={materials.Material_23}
        />
      )}
      {switchValue[24] && (
        <mesh
          geometry={nodes.mesh24.geometry}
          material={materials.Material_24}
        />
      )}
      {switchValue[25] && (
        <mesh
          geometry={nodes.mesh25.geometry}
          material={materials.Material_25}
        />
      )}
      {switchValue[26] && (
        <mesh
          geometry={nodes.mesh26.geometry}
          material={materials.Material_26}
        />
      )}
      {switchValue[27] && (
        <mesh
          geometry={nodes.mesh27.geometry}
          material={materials.Material_27}
        />
      )}
    </group>
  );
}
