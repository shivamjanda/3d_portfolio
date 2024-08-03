import React from 'react';
import { motion } from 'framer-motion'; // Importing motion component for animations
import { useTypewriter, Cursor } from 'react-simple-typewriter'; // Importing typewriter effect and cursor
import { styles } from '../styles'; // Importing custom styles
import { ComputersCanvas } from './canvas'; // Importing custom canvas component

// Hero component to display the hero section of the page
const Hero = () => {
  // Using useTypewriter hook to create a typewriter effect
  const [ text ] = useTypewriter({
    words: ['Shivam'], // Words to be typed
    loop: true,  // Loop the typing effect
    typeSpeed: 50, // Speed of typing
    deleteSpeed: 10, // Speed of deleting

  });

  return (
    // Section container for the hero section
    <section className="relative w-full h-screen mx-auto">
      {/* Container for hero content with padding and centered positioning */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* Decorative elements */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" /> {/* Small circle */}
          <div className="w-1 sm:h-80 h-40 violet-gradient" /> {/* Vertical line with gradient */}
        </div>
        {/* Text content */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#66FCF1]">{text}<Cursor /></span> {/* Typewriter effect with cursor */}
            
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I am a second-year student at Durham College. <br className="sm:block hidden" /> {/* Subtext */}
          </p>
        </div>
      </div>

      {/* Canvas element for 3D computer animation */}
      <ComputersCanvas />

      {/* Scroll down indicator */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about"> {/* Link to the about section */}
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            {/* Animated scroll indicator */}
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }} // Infinite loop animation
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;  // Exporting the Hero component


/*

1.Imports:

  - React: Core library for building UI.
  - motion: Part of Framer Motion for handling animations.
  - useTypewriter, Cursor: Hook and component from react-simple-typewriter for creating a typewriter effect.
  - styles: Custom styles for the component.
  - ComputersCanvas: Custom canvas component for rendering 3D animation.

2.  Hero Component:

  - useTypewriter Hook: Used to create a typewriter effect. It types and deletes words with specified speeds and loops the effect.
  - Section Container: Main container for the hero section, set to take full width and height of the screen.
  - Content Container: Positioned absolutely within the section to align the content centrally. Uses custom padding and max-width styles.
  - Decorative Elements: Includes a small circle and a vertical gradient line for visual decoration.
  - Text Content:
    - Heading: Displays the main heading with a typewriter effect on the name "Shivam" and a cursor.
    - Subtext: Brief description of the person, hidden on small screens.
  - ComputersCanvas Component: Custom component to render a 3D computer animation.
  - Scroll Down Indicator:
    - Link: A link that directs to the "about" section of the page.
    - Animated Indicator: Uses motion.div to create a bouncing effect, indicating the user should scroll down.

3. Export:

  - The Hero component is exported as the default export of the module.


*/