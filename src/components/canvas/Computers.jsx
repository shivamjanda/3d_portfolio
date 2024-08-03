import { Suspense, useEffect, useState } from 'react'; // Importing Suspense, useEffect, and useState from React

import { Canvas } from '@react-three/fiber'; // Importing Canvas component from @react-three/fiber for rendering 3D content
import { OrbitControls, Preload, SoftShadows, useGLTF} from '@react-three/drei'; // Importing components from @react-three/drei for 3D effects and controls


import CanvasLoader from '../Loader'; // Importing CanvasLoader component for loading spinner

// Computers component to display the 3D computer model
const Computers = ({ isMobile }) => {
  // imported object using useGLTF and imported from the public folder
  // GLTF is a three dimensonal scene file
    const computer = useGLTF('./desktop_pc/scene.gltf')


  return (
    // Created a mesh and added lighting (point lighting, spot light, hemisphere light)
    <mesh>
      <hemisphereLight intestity ={0.15}
      groundColor="black"/>
      <pointLight intestity={1} />
      <spotLight 
        position={[-20 , 50 ,10]} // Position of the spotlight
        angle={0.12} // Angle of the spotlight cone
        penumbra={1} // Soft edge of the spotlight
        intesity={1} // Intensity of the spotlight
        castShadow // Enables casting shadows
        shadow-mapSize={1024} // Size of the shadow map
        />
      {/* Primitive component to render the GLTF model */}
      <primitive 
        object={computer.scene} // The loaded 3D scene
        scale={ isMobile? 0.7 : 0.75} // Scale based on whether it's a mobile device
        position={isMobile ? [0,-3, -2.2]  : [0,-3.25, -1.25]} // Position based on device
        rotation={[-0.01, -0.2, -0.1]} // Rotation of the model
        />

    </mesh>
  )
}

// ComputersCanvas component to render the 3D scene with the Computers component
const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false); // State to track if the device is mobile


  // changing the is mobile variable (if the screen is now a mobile screen determined by the width of the window)
  useEffect(() => {

    // add a listener for changes to the screen size
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Set the intial vlaue of the 'isMobile' state variable
    setIsMobile(mediaQuery.matches);
    
    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    }
    
    // add the call buck function as a listner for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // remove the listner when the component is unmounted
    return () => {
      
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

  return (
    // Canvas component to create a 3D rendering context
    <Canvas 
      frameLoop="demand" // Renders on demand
      shadows // Enables shadows
      camera={{ position: [20, 3, 5 ], fov: 25}} // Camera settings
      gl={{ preserveDrawingBuffer: true}} // Preserves the drawing buffer
    >
      {/* Suspense component to show a fallback while loading */}
      <Suspense fallback={<CanvasLoader />}>
        {/* OrbitControls component to enable interactive controls */} 
        <OrbitControls  
        enableZoom={false}  // Disables zoom
        maxPolarAngle={Math.PI/2} // Limits the maximum polar angle
        minPolarAngle={Math.PI/2} // Limits the minimum polar angle
        
      />
        {/* Rendering the Computers component with the isMobile prop */}
        <Computers isMobile={isMobile}/>
      
      </Suspense>

      {/* Preload all assets to improve performance */}
      <Preload all />

    </Canvas>
  )
    
}
export default ComputersCanvas // Exporting the ComputersCanvas component as the default export


/*

Imports:

  - Suspense, useEffect, useState: Importing hooks from React.
  - Canvas: Importing the Canvas component from @react-three/fiber to create a 3D rendering context.
  - OrbitControls, Preload, SoftShadows, useGLTF: Importing components and hooks from @react-three/drei for 3D effects and controls.
  - CanvasLoader: Importing the CanvasLoader component to show a loading spinner.

2.Computers Component:

  - useGLTF Hook: Loads the GLTF model from the provided URL.
  - Lights:
    - hemisphereLight: Adds general illumination with a ground color.
    - pointLight: Adds a point light source.
    - spotLight: Adds a spotlight with specified properties like position, angle, penumbra, intensity, and shadow settings.
  - Primitive Component: Renders the GLTF model with properties like scale, position, and rotation based on the isMobile prop.

3.ComputersCanvas Component:

  - isMobile State: Tracks if the device is mobile.
  - useEffect Hook: Handles screen size changes and updates the isMobile state.
    - mediaQuery: Adds a media query listener for screen width changes.
    - handleMediaQueryChange: Updates the isMobile state based on the media query match.
    - Cleanup: Removes the media query listener when the component is unmounted.
  - Canvas: Creates a 3D rendering context with properties like frame loop, shadows, camera settings, and preserving the drawing buffer.
  - Suspense: Shows the CanvasLoader component while loading.
  - OrbitControls: Adds interactive controls with zoom disabled and limited polar angles.
  - Preload: Preloads all assets to improve performance.

4.Export:

  - The ComputersCanvas component is exported as the default export, making it easy to import and use in other parts of the application.



*/