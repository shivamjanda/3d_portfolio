import { Suspense, useEffect, useState } from 'react';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, SoftShadows, useGLTF} from '@react-three/drei';

import CanvasLoader from '../Loader';


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
        position={[-20 , 50 ,10]}
        angle={0.12}
        penumbra={1}
        intesity={1}
        castShadow
        shadow-mapSize={1024}
        />
      <primitive 
        object={computer.scene}
        scale={ isMobile? 0.7 : 0.75}
        position={isMobile ? [0,-3, -2.2]  : [0,-3.25, -1.25]}
        rotation={[-0.01, -0.2, -0.1]}
        />

    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

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
    <Canvas 
      frameLoop="demand"
      shadows
      camera={{ position: [20, 3, 5 ], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
    >
      
      <Suspense fallback={<CanvasLoader />}> 
        <OrbitControls  
        enableZoom={false} 
        maxPolarAngle={Math.PI/2}
        minPolarAngle={Math.PI/2}
        
      />
        <Computers isMobile={isMobile}/>
      
      </Suspense>
      
      <Preload all />

    </Canvas>
  )
    
}
export default ComputersCanvas