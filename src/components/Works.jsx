import React from "react";
import { Tilt } from "react-tilt"; // Importing Tilt component for 3D tilt effects
import { motion } from "framer-motion"; // Importing motion component for animations

import { styles } from "../styles"; // Importing custom styles
import { github } from "../assets"; // Importing GitHub icon asset
import { SectionWrapper } from "../hoc"; // Importing higher-order component for section wrapping
import { projects } from "../constants"; // Importing projects data from constants
import { fadeIn, textVariant } from "../utils/motion"; // Importing animation variants

// ProjectCard component to display individual project cards with tilt and animation effects
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    // Motion div to apply animation to the project card
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Tilt component to apply 3D tilt effect to the card */}
      <Tilt
        options={{
          max: 45, // Maximum tilt rotation
          scale: 1, // Scale effect
          speed: 450, // Speed of tilt effect
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        {/* Container for the project image */}
        <div className='relative w-full h-[230px]'>
          <img
            src={image} // Image source for the project
            alt='project_image' // Alt text for the image
            className='w-full h-full object-cover rounded-2xl' // Image styling
          />
          {/* Overlay container for the source code link */}
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")} // Open the source code link in a new tab
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github} // GitHub icon image
                alt='source code' // Alt text for the GitHub icon
                className='w-1/2 h-1/2 object-contain' // Icon styling
              />
            </div>
          </div>
        </div>

        {/* Container for the project details */}
        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3> {/* Project name */}
          <p className='mt-2 text-secondary text-[14px]'>{description}</p> {/* Project description */}
        </div>

        {/* Container for the project tags */}
        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`} // Unique key for each tag
              className={`text-[14px] ${tag.color}`} // Tag styling
            >
              #{tag.name} {/* Tag name */}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Works component to display the projects section
const Works = () => {
  return (
    <>
     {/* Motion div for section title with animation */}
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>My work</p>
        <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
      </motion.div>

      {/* Container for the projects description */}
      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)} // Applying fadeIn animation variant
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following projects highlight my skills and experience through practical examples of my work. Each project includes a brief description and links to the corresponding code repositories. They demonstrate my ability to tackle complex problems, work with diverse technologies, and manage projects efficiently.
        </motion.p>
      </div>

      {/* Container for the project cards */}
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} /> // Rendering a ProjectCard for each project
        ))}
      </div>
    </>
  );
};

// Exporting the Works component wrapped with SectionWrapper higher-order component
export default SectionWrapper(Works, "work");


/*

1.Imports:

  - Tilt: Importing the Tilt component for 3D tilt effects.
  - motion: Importing the motion component for animations.
  - styles: Importing custom styles for the component.
  - github: Importing the GitHub icon asset.
  - SectionWrapper: Importing the SectionWrapper higher-order component for wrapping sections.
  - projects: Importing the projects data from constants, which contains information about various projects.
  - fadeIn, textVariant: Importing animation variants for applying animations.

2.ProjectCard Component:

  - Props: index, name, description, tags, image, source_code_link.
  - motion.div: Applies animation to the project card using the fadeIn variant, with a delay based on the index prop.
  - Tilt Component: Adds a 3D tilt effect to the card with specified options.
  - Project Image: Contains the project image with an overlay for the source code link.
  - Project Details: Displays the project name and description.
  - Project Tags: Lists the tags associated with the project.

3.Works Component:

  - Motion div for Section Title: Animated container for the section title.
    - Subtext: Text element for the subheading.
    - Heading: Text element for the main heading.
  - Projects Description: Container for the description of the projects.
    - motion.p: Applies animation to the description paragraph using the fadeIn variant.
  - Project Cards Container: Contains the project cards, arranged in a responsive layout with gaps between them.
    - Mapping Over Projects: Iterates over the projects array to create a ProjectCard for each project. Each card is passed the project data as props.

4.Export:

  - The Works component is exported wrapped with the SectionWrapper higher-order component, providing additional styling or functionality specific to sections of the website. The second argument is an empty string, indicating no additional class name is provided.














*/