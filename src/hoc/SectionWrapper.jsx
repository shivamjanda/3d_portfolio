import { motion } from 'framer-motion'; // Importing motion from framer-motion for animations

import { styles } from "../styles"; // Importing custom styles
import { staggerContainer } from "../utils/motion"; // Importing staggerContainer animation variant

// SectionWrapper higher-order component to wrap sections with common styling and animations
const SectionWrapper = (Component, idName) => 
function HOC(){
    return(
      // motion.section to apply animations to the sectio
      <motion.section
        variants={staggerContainer()} // Applying staggerContainer animation variant
        initial="hidden" // Initial state of the animation
        whileInView="show" // Animation state when the section comes into view
        viewport={{once: true, amount: 0.25 }} // Viewport settings for when the animation should trigger
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`} // Applying custom styles
      >
        {/* Span element to provide an anchor link for the section */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {/* Rendering the passed component */}
        <Component />
      </motion.section>  
    )
}
   

export default SectionWrapper // Exporting the SectionWrapper higher-order component as the default export


/*


1.Imports:

  - motion: Importing motion from framer-motion for applying animations.
  - styles: Importing custom styles for the component.
  - staggerContainer: Importing the staggerContainer animation variant from the motion utilities.

2.SectionWrapper Higher-Order Component:

  - Parameters: Takes a Component to be wrapped and an idName for the section.
  - Function HOC: Returns a higher-order component that wraps the passed Component with additional styling and animations.

3.motion.section:

  - variants: Applies the staggerContainer animation variant.
  - initial: Sets the initial state of the animation to "hidden".
  - whileInView: Sets the animation state to "show" when the section comes into view.
  - viewport: Configures the viewport settings:
    - once: Ensures the animation only occurs once.
    - amount: Triggers the animation when 25% of the section is in view.
  - className: Applies custom styles including padding, maximum width, centering, relative positioning, and z-index.

3.span.hash-span:

  - Provides an anchor link for the section using the idName passed as a parameter.
  - : Adds a non-breaking space inside the span.

4.Component:

  - Renders the passed Component inside the motion.section.

5.Export:

  - The SectionWrapper higher-order component is exported as the default export, making it easy to wrap sections with consistent styling and animations in other parts of the application.








*/