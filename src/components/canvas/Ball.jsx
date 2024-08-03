import React, { Suspense } from "react"; // Importing React and Suspense for lazy loading
import { Canvas } from "@react-three/fiber";  // Importing Canvas component from @react-three/fiber for rendering 3D content
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei"; // Importing components from @react-three/drei for 3D effects and controls


import CanvasLoader from "../Loader"; // Importing CanvasLoader component for loading spinner 

// Ball component to display a 3D ball with a decal texture
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]); // Loading the decal texture from the provided image URL

  return (
    // Float component to apply floating animation to the ball
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Ambient light for general illumination */}
      <ambientLight intensity={0.25} />
      {/* Directional light for casting shadows */}
      <directionalLight position={[0, 0, 0.05]} />
      {/* Mesh component to define the 3D object */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* Icosahedron geometry for the ball shape */}
        <icosahedronGeometry args={[1, 1]} />
        {/* Standard material for the mesh with custom properties */}
        <meshStandardMaterial
          color='#fff8eb'
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        {/* Decal component to apply the texture as a decal */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

// BallCanvas component to render the Ball component inside a Canvas
const BallCanvas = ({ icon }) => {
  return (
    // Canvas component to create a 3D rendering context
    <Canvas
      frameloop='demand' // Frame loop setting for rendering on demand
      dpr={[1, 2]} // Device pixel ratio settings
      gl={{ preserveDrawingBuffer: true }} // Preserve the drawing buffer for screenshot purposes
    >
      {/* Suspense component to show a fallback while loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls component to enable interactive controls */}
        <OrbitControls enableZoom={false} /> {/* Disabling zoom */}
        {/* Rendering the Ball component with the provided icon */}
        <Ball imgUrl={icon} />
      </Suspense>
      {/* Preload all assets to improve performance */}
      <Preload all />
    </Canvas>
  );
};
export default BallCanvas  // Exporting the BallCanvas component as the default export




/*

1.Imports:

  - React, Suspense: Importing React for building the component and Suspense for lazy loading.
  - Canvas: Importing the Canvas component from @react-three/fiber to create a 3D rendering context.
  - Decal, Float, OrbitControls, Preload, useTexture: Importing components and hooks from @react-three/drei for 3D effects and controls.
  - CanvasLoader: Importing the CanvasLoader component to show a loading spinner.

2.Ball Component:

  - useTexture Hook: Loads the decal texture from the provided image URL.
  - Float Component: Adds a floating animation to the ball.
  - Lights:
    - ambientLight: Adds general illumination.
    - directionalLight: Adds a directional light for casting shadows.
  - Mesh Component:
    - icosahedronGeometry: Defines the geometry of the ball.
    - meshStandardMaterial: Applies a standard material with custom properties like color and flat shading.
    - Decal: Applies the texture as a decal on the ball.

3.BallCanvas Component:

  - Canvas: Creates a 3D rendering context.
    - frameloop='demand': Renders only when needed.
    - dpr={[1, 2]}: Sets the device pixel ratio for rendering.
    - gl={{ preserveDrawingBuffer: true }}: Preserves the drawing buffer for screenshot purposes.
  - Suspense: Shows the CanvasLoader component while loading.
  - OrbitControls: Adds interactive controls, disabling zoom.
  - Preload: Preloads all assets to improve performance.

4.Export:

  - The BallCanvas component is exported as the default export, making it easy to import and use in other parts of the application


*/