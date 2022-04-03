import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model'; 
export const FormationScreen = () => {
   const url=  process.env.NODE_ENV === "development"
   ? "/api/react/Model.gltf"
   : "http://103.118.40.123:9999/react/Model.gltf";
    return (
       <Canvas
           camera={{ position: [0, 0, 12.25], fov: 15}}
           style={{
              backgroundColor: '#111a21',
              width: '100%',
              height: '100%',
           }}
        >
           <ambientLight intensity={1.25} />
           <ambientLight intensity={0.1} />
           <directionalLight intensity={0.4} />
           <Suspense fallback={null}>
             <Model position={[1.5, 9, -5]} url={url}/>
           </Suspense>
           <OrbitControls />
        </Canvas>
     );
}