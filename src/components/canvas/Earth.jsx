import React, { Suspense } from "react"; // Importing React and Suspense for lazy loading
import { Canvas } from "@react-three/fiber"; // Importing Canvas component from @react-three/fiber for rendering 3D content
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // Importing components from @react-three/drei for 3D effects and controls

import CanvasLoader from "../Loader"; // Importing CanvasLoader component for loading spinner

// Earth component to display the 3D Earth model
const Earth = () => {
  // Using useGLTF hook to load the GLTF model from the public folder
  const earth = useGLTF("./planet/scene.gltf");

  return (
    // Rendering the GLTF model as a primitive 
    <primitive 
      object={earth.scene}  // The loaded 3D scene
      scale={2.5} // Scaling the model 
      position-y={0} // Setting the Y position
      rotation-y={0} /> // Setting the Y rotation
  );
};

// EarthCanvas component to render the 3D scene with the Earth component
const EarthCanvas = () => {
  return (
    // Canvas component to create a 3D rendering context
    <Canvas
      shadows // Enables shadows
      frameloop='demand' // Renders on demand
      dpr={[1, 2]} // Device pixel ratio settings
      gl={{ preserveDrawingBuffer: true }} // Preserves the drawing buffer
      camera={{
        fov: 45, // Field of view
        near: 0.1, // Near clipping plane
        far: 200, // Far clipping plane
        position: [-4, 3, 6], // Camera position
      }}
    >
      {/* Suspense component to show a fallback while loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls component to enable interactive controls */}
        <OrbitControls
          autoRotate // Enables auto rotation
          enableZoom={false} // Disables zoom
          maxPolarAngle={Math.PI / 2} // Limits the maximum polar angle
          minPolarAngle={Math.PI / 2} // Limits the minimum polar angle
        />
        {/* Rendering the Earth component */}
        <Earth />

        {/* Preload all assets to improve performance */}
        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas; // Exporting the EarthCanvas component as the default export

/*

1.Imports:

  - React, Suspense: Importing React for building the component and Suspense for lazy loading.
  - Canvas: Importing the Canvas component from @react-three/fiber to create a 3D rendering context.
  - OrbitControls, Preload, useGLTF: Importing components and hooks from @react-three/drei for 3D effects and controls.
  - CanvasLoader: Importing the CanvasLoader component to show a loading spinner.

2.Earth Component:

  - useGLTF Hook: Loads the GLTF model from the provided URL.
  - Primitive Component: Renders the GLTF model with properties like scale, position, and rotation.

3.EarthCanvas Component:

  - Canvas: Creates a 3D rendering context with properties like shadows, frame loop, device pixel ratio, preserving the drawing buffer, and camera settings.
    - shadows: Enables shadows in the scene.
    - frameloop='demand': Renders only when needed.
    - dpr={[1, 2]}: Sets the device pixel ratio for rendering.
    - gl={{ preserveDrawingBuffer: true }}: Preserves the drawing buffer for screenshot purposes.
    - camera: Sets the camera properties including field of view, near and far clipping planes, and position.
  - Suspense: Shows the CanvasLoader component while loading.
  - OrbitControls: Adds interactive controls with auto-rotate enabled, zoom disabled, and limited polar angles.
  - Preload: Preloads all assets to improve performance.

4.Export:

  - The EarthCanvas component is exported as the default export, making it easy to import and use in other parts of the application.


*/