import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import scene from '..models/mh.glb';

function Model() {
  const gltf = useLoader(GLTFLoader, scene);
  const mesh = useRef();
  // mesh.current.rotation.z = 3*Math.PI/2;
  // mesh.current.rotation.y = 3*Math.PI/2;
  // mesh.current.rotation.x = Math.PI / 2;
  mesh.current.position.x = 0;
  mesh.current.rotation.x = Math.PI / 2;
  mesh.current.rotation.y = 4*Math.PI / 2;

  useFrame(() => {
    // Rotate the model around the y-axis (left to right)
    mesh.current.rotation.z += 0.01;
  });


  return <primitive ref={mesh} object={gltf.scene} dispose={null} />;
}

function MHLogo() {
  const [isContextLost, setIsContextLost] = useState(false);


  useEffect(() => {
    const handleContextLost = () => setIsContextLost(true);
    const handleContextRestored = () => setIsContextLost(false);

    window.addEventListener('webglcontextlost', handleContextLost, false);
    window.addEventListener('webglcontextrestored', handleContextRestored, false);

    return () => {
      window.removeEventListener('webglcontextlost', handleContextLost, false);
      window.removeEventListener('webglcontextrestored', handleContextRestored, false);
    };
  }, []);

  return (
    <Canvas style={{  width: '100vw', height: '100vh', backgroundColor: 'black'}}>
      {isContextLost ? (
        <div style={{ color: 'white' }}>WebGL context lost. Please reload the page.</div>
      ) : (
        <>
          <ambientLight />
          <pointLight position={[10,10,10]} />
          <Model position ={[0,0,0]} rotation={[0,0, Math.PI/2.0]}/>
        </>
      )}
    </Canvas>
  );
}

export default MHLogo;