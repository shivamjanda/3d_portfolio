import { VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component'; // Importing components for vertical timeline
import { motion } from 'framer-motion'; // Importing motion component for animations

import 'react-vertical-timeline-component/style.min.css'; // Importing CSS for the vertical timeline

import { styles } from '../styles'; // Importing custom styles
import { experiences } from '../constants'; // Importing experiences data from constants
import { SectionWrapper } from '../hoc'; // Importing higher-order component for section wrapping
import { textVariant } from '../utils/motion'; // Importing animation variant


// ExperienceCard component to display individual experience cards in the timeline
const ExperienceCard = ({ experience }) => {
  return (
    // VerticalTimelineElement to create a timeline entry
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836", // Background color of the timeline content
        color: "#fff", // Text color of the timeline content
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}  // Style for the arrow connecting to the content
      date={experience.date} // Date of the experience
      iconStyle={{ background: experience.iconBg }} // Background color for the icon
      icon={
        // Container for the icon
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}  // Icon image source
            alt={experience.company_name} // Alt text for the icon
            className='w-[60%] h-[60%] object-contain' // Styling for the icon image
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3> {/* Title of the experience */}
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name} {/* Company name */}
        </p>
      </div>

      {/* List of points describing the experience */}
      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point} {/* Description point */}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

// Experience component to display the entire experience section
const Experience = () => {
  return (
    <>
      {/* Motion div for section title with animation */} 
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}> {/* Subtext with center alignment */}
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}> {/* Heading with center alignment */}
          Work Experience.
        </h2>
      </motion.div>

      {/* Container for the vertical timeline */}
      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {/* Mapping over experiences array to create ExperienceCard components */}
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`} // Unique key for each experience
              experience={experience} // Passing experience data as prop
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// Exporting the Experience component wrapped with SectionWrapper higher-order component
export default SectionWrapper (Experience, "Experience")


/*

1.Imports:

  - VerticalTimeline, VerticalTimelineElement: Components from the react-vertical-timeline-component library for creating a vertical timeline.
  - motion: Part of Framer Motion for handling animations.
  - styles: Custom styles for the component.
  - experiences: Data for experiences to be displayed in the timeline.
  - SectionWrapper: Higher-order component for wrapping sections.
  - textVariant: Animation variant for text animations.

2.ExperienceCard Component:

  - Props: experience.
  - VerticalTimelineElement: Represents an individual entry in the vertical timeline.
    - contentStyle: Styles for the content background and text color.
    - contentArrowStyle: Styles for the arrow connecting the timeline element.
    - date: The date of the experience.
    - iconStyle: Background color for the icon.
    - icon: Container for the icon, displaying an image.
  - Title and Company: Displays the title and company name of the experience.
  - Points List: An unordered list of points describing the experience.

3.Experience Component:

  - Motion div for Section Title: Animated container for the section title.
    - Subtext: Text element for the subheading.
    - Heading: Text element for the main heading.
  - VerticalTimeline: Container for the timeline.
    - Mapping over Experiences: Generates an ExperienceCard for each experience in the experiences array. Each card is passed the experience data as a prop.

4.Export:

  - The Experience component is exported wrapped with the SectionWrapper higher-order component, which may provide additional styling or functionality specific to sections of the website.


*/