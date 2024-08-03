import { BallCanvas } from "./canvas"; // Importing BallCanvas component from the canvas module
import { SectionWrapper } from '../hoc'; // Importing higher-order component for section wrapping
import { technologies } from '../constants'; // Importing technologies data from constants


// Tech component to display the technology icons in a grid
const Tech = () => {
  return (
    // Main container for the technology icons
    <div className="flex flex-row flex-wrap justify center gap-10">
      {/* Mapping over the technologies array to create a BallCanvas for each technology */}
      {technologies.map((technology) => (
        // Container for each BallCanvas with a fixed width and height
        <div className="w-28 h-28" key={technology.name}>
          {/* BallCanvas component displaying the technology icon */}
          <BallCanvas icon={technology.icon} />

          </div>
      ))}
    </div>
  )
}

// Exporting the Tech component wrapped with SectionWrapper higher-order component
export default SectionWrapper (Tech, "")

/*

1.Imports:

  - BallCanvas: Importing the BallCanvas component from the canvas module to render the 3D technology icons.
  - SectionWrapper: Importing the SectionWrapper higher-order component for wrapping sections.
  - technologies: Importing the technologies data from constants, which contains information about various technologies.

2.Tech Component:

  - Main Container: A div with flexbox properties to arrange the technology icons in a responsive grid layout.
    - flex-row: Aligns the child elements in a row.
    - flex-wrap: Allows the child elements to wrap onto multiple lines.
    - justify-center: Centers the child elements horizontally.
    - gap-10: Adds spacing between the child elements.
  - Mapping Over Technologies: Iterates over the technologies array to create a BallCanvas for each technology.
    - Container for Each BallCanvas: A div with a fixed width and height to contain each BallCanvas.
    - key={technology.name}: Uses the technology name as the unique key for each element.
    - BallCanvas Component: Renders the technology icon inside a 3D ball.
    
4.Export:

  - The Tech component is exported wrapped with the SectionWrapper higher-order component, providing additional styling or functionality specific to sections of the website. The second argument is an empty string, indicating no additional class name is provided.



*/