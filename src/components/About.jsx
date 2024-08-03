import React from "react"; 
import { Tilt } from 'react-tilt' // Importing the Tilt component for tilt effects
import { motion } from "framer-motion"; // Importing motion for animations
import Lottie from "react-lottie"; // Importing lottie for animmations 

import { styles } from "../styles"; // Importing custom styles
import { services } from "../constants"; // Importing services data
import { fadeIn, textVariant } from "../utils/motion"; // Importing motion variants
import { SectionWrapper } from "../hoc"; // Importing higher-order component for section wrapping


// ServiceCard component to display indivdual service cards with tilt and animation effects
// ( Card like component )
const ServiceCard = ({index, title, icon}) => {

  return (
    // Tilt component to apply tilt effects to the card
    <Tilt className="xs:w-[250px] w-full">
      {/* Motion div to apply animation to the card*/}
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75 )} // Applying fadeIn animation variant
        className="w=full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        {/* Inner div to display the card content */}
        <div
          options={{
            max: 45, // Maximum tilt rotation
            scale: 1, // Scale effect
            speed: 450, // Speed of tilt effect
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          {/* Icon image of the service*/}
          <img src={icon} alt={title}
          className="w-16, h-16 object-contain" />
          {/* Title of the service */}
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>


        </div>

      </motion.div>
      
      </Tilt>
  )
}

// About component to display the about section
const About = () => {
  return (
    <>
      {/* Motion div for section title with animation */}
      <motion.div variants={textVariant}>
        <p className={styles.sectionSubText}> Introduction </p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      {/* Motion paragraph for introduction text with animation */}
      <motion.p
        variants={fadeIn("", "", 0.1, 1)} // Applying fadeIn animation variant
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
        {/* Introduction text */}
        I am a second-year student at Durham College. The program I am in is computer programming and I plan on transferring to Ontario Tech University to get my computer science degree. I have always enjoyed coding and computer-related activities growing up. I am interested in many industries in this field, including, video game development, web programming, cloud engineering, AI, etc. As a hard-working person who is extremely passionate and finds joy in his field, 
        I am really excited to advance further in the workplace with a variety of skills from different fields in software development / computer science.  
      </motion.p>

      {/* Container for service cards */}
      <div className="mt-20 flex flex wrap gap-10">
        {/* Mapping over services array to create ServiceCard components */}
        {services.map((service, index) => (
          <ServiceCard key={service.title} index = {index} {...service}  />
        ))}

      </div>
    </>
  )
}
// Exporting the About component wrapped with SectionWrapper higher-order component
export default SectionWrapper(About, "about")

/*

1.Imports:

  React: Core library for building UI.
  Tilt: Library for adding a 3D tilt effect.
  motion: Part of Framer Motion for handling animations.
  Lottie: Library for animations (although not used in the provided code).
  styles: Custom styles for the component.
  services: Data for services that will be displayed using the ServiceCard component.
  fadeIn, textVariant: Animation variants from a utility module.
  SectionWrapper: Higher-order component to wrap sections for additional functionality or styling.

2.ServiceCard Component:

  Props: index, title, icon.
  Tilt: Adds a 3D tilt effect to the card.
  motion.div: Applies animation to the card using the fadeIn variant, with a delay based on the index prop.
  Inner div: Contains the card content with a background, padding, and rounded corners.
  img: Displays the icon for the service.
  h3: Displays the title of the service.

3.About Component:

  Section Title: Uses motion.div for animated text. Includes a subtext and a heading.
  Introduction Text: motion.p element for the animated paragraph describing the author’s background and interests.
  Service Cards Container: A div that contains the service cards, arranged in a responsive layout with gaps between them.
  Mapping over Services: Generates a ServiceCard for each service in the services array. Each card is passed an index and the service data.

4.Export: The About component is exported wrapped with the SectionWrapper higher-order component, which may provide additional styling or functionality specific to sections of the website.


*/