// Importing canvas components
import { EarthCanvas, BallCanvas, ComputersCanvas, StarsCanvas } from './canvas';

// Importing individual page or section components
import Hero from './Hero';
import Navbar from './Navbar';
import About from './About';
import Tech from './Tech';
import Experience from './Experience';
import Works from './Works';
// import Feedbacks from './Feedbacks'; // Importing Feedbacks component (currently commented out)
import Contact from './Contact';

// Exporting all imported components for easy access in other parts of the application
export {
  Hero,
  Navbar,
  About,
  Tech,
  Experience,
  Works,
 // Feedbacks,
  Contact,
  EarthCanvas, 
  BallCanvas, 
  ComputersCanvas, 
  StarsCanvas
}


/*
1.Imports:
    
    - Canvas Components: Importing various canvas components from the ./canvas module.
      - EarthCanvas: A component to render a 3D Earth animation.
      - BallCanvas: A component to render a 3D ball animation.
      - ComputersCanvas: A component to render a 3D computer animation.
      - StarsCanvas: A component to render a 3D stars animation.
    - Page/Section Components: Importing various page or section components from their respective modules.
      - Hero: The hero section component.
      - Navbar: The navigation bar component.
      - About: The about section component.
      - Tech: The technology section component.
      - Experience: The experience section component.
      - Works: The works/projects section component.
      - Contact: The contact section component.
      - Feedbacks: The feedbacks/testimonials section component (currently commented out).
2.Exports:

    Named Exports: Exporting all imported components using named exports for easy access in other parts of the application.
      - This allows the components to be imported individually or as a group in other files.
      - The Feedbacks component is currently commented out, meaning it is not included in the exports, but can be easily re-enabled by uncommenting it.

*/