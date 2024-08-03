import { useState, useRef, Suspense } from "react"; // Importing hooks from React for state management and refs, and Suspense for lazy loading
import { Canvas, useFrame } from "@react-three/fiber"; // Importing Canvas and useFrame from @react-three/fiber for rendering 3D content
import { Points, PointMaterial, Preload } from "@react-three/drei"; // Importing components from @react-three/drei for 3D points, materials, and preloading
import * as random from "maath/random/dist/maath-random.esm"; // Importing random utilities from maath library

// Stars component to display animated stars
const Stars = (props) => {
  const ref = useRef(); // Creating a ref to manipulate the Points component
  const [sphere] = useState(() => random.inSphere(new Float32Array(5000), { radius: 1.2 })); // Generating random points within a sphere

  // Using useFrame to animate the rotation of the stars
  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10; // Rotating stars around the x-axis
    ref.current.rotation.y -= delta / 15; // Rotating stars around the y-axis
  });

  return (
    // Group to contain the Points component with an initial rotation
    <group rotation={[0, 0, Math.PI / 4]}>
      {/* Points component to render the stars */}
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        {/* PointMaterial to define the appearance of the points */}
        <PointMaterial
          transparent // Makes the material transparent
          color='#f272c8' // Color of the points
          size={0.002} // Size of the points
          sizeAttenuation={true} // Attenuates size with distance
          depthWrite={false} // Disables writing to the depth buffer
        />
      </Points>
    </group>
  );
};

// StarsCanvas component to render the Stars component inside a Canvas
const StarsCanvas = () => {
  return (
    // Wrapper div for the canvas
    <div className='w-full h-auto absolute inset-0 z-[-1]'>
      {/* Canvas component to create a 3D rendering context */}
      <Canvas camera={{ position: [0, 0, 1] }}> {/* Setting the initial camera position */}
        {/* Suspense to handle loading */}
        <Suspense fallback={null}>
          <Stars /> {/* Rendering the Stars component */}
        </Suspense>
        {/* Preload all assets */}
        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas; // Exporting the StarsCanvas component as the default export


/*

1.Imports:

  - useState, useRef, Suspense: Importing hooks from React for state management, refs, and lazy loading.
  - Canvas, useFrame: Importing components from @react-three/fiber for rendering 3D content and creating animations.
  - Points, PointMaterial, Preload: Importing components from @react-three/drei for rendering points, defining point materials, and preloading assets.
  - random: Importing utilities from the maath library for generating random points within a sphere.

2.Stars Component:

  - ref: Creating a ref to manipulate the Points component.
  - sphere: Generating an array of random points within a sphere using the random.inSphere function.
  - useFrame Hook: Animating the rotation of the stars around the x and y axes.
  - group: Wrapping the Points component in a group with an initial rotation.
  - Points Component: Rendering the stars with the positions generated in the sphere array.
  - PointMaterial: Defining the appearance of the points, including transparency, color, size, size attenuation, and depth write settings.

3.StarsCanvas Component:

  - Wrapper div: Creating a div to contain the Canvas component, with full width and height, positioned absolutely, and behind other content.
  - Canvas Component: Creating a 3D rendering context with an initial camera position.
  - Suspense: Wrapping the Stars component in Suspense to handle loading, with a fallback of null.
  - Preload: Preloading all assets to improve performance.

4.Export:

  - The StarsCanvas component is exported as the default export, making it easy to import and use in other parts of the application.



*/