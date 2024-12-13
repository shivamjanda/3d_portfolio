import { BrowserRouter } from 'react-router-dom'; // Importing BrowserRouter for routing

import {About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas } from './components'; // Importing components from the components directory
 


// App component to structure the main layout of the application
const App = () => {
  return (
    // BrowserRouter to enable routing in the application
   <BrowserRouter>
   {/* Main container with relative positioning and primary background color */}
    <div className ="relative z-0 bg-primary">
      {/* Hero section with background pattern */}
      <div className= "custom-radial-linear-gradient">
        <Navbar /> {/* Rendering the Navbar component */}
        <Hero /> {/* Rendering the Hero component */}
      
     
      <About /> {/* Rendering the About component */}
      <Experience /> {/* Rendering the Experience component */}
      <Tech /> {/* Rendering the Tech component */}
      <Works /> {/* Rendering the Works component */}
      
      {/* Contact section with StarsCanvas background */}
      <div className="relative z-0">
        <Contact /> {/* Rendering the Contact component */}
        <StarsCanvas /> {/* Rendering the StarsCanvas component */}
      </div>
      </div>
    </div>
   </BrowserRouter> 

  )
}

export default App // Exporting the App component as the default export



/*

1.Imports:

  - BrowserRouter: Importing BrowserRouter from react-router-dom to enable routing in the application.
  - About, Contact, Experience, Hero, Navbar, Tech, Works, StarsCanvas: Importing various components from the ./components directory.

2.App Component:

  - BrowserRouter: Wraps the entire application to enable routing.
  - Main Container:
    - div with className="relative z-0 bg-primary": A div with relative positioning, z-index of 0, and primary background color.
  - Hero Section:
    - div with className="bg-hero-pattern bg-cover bg-no-repeat bg-center": A div with a hero background pattern that covers the whole area, does not repeat, and is centered.
    - Navbar: Renders the Navbar component.
    - Hero: Renders the Hero component.
  - Other Sections:
    - About: Renders the About component.
    - Experience: Renders the Experience component.
    - Tech: Renders the Tech component.
    - Works: Renders the Works component.
  - Contact Section:
    - div with className="relative z-0": A div with relative positioning and z-index of 0 to contain the Contact and StarsCanvas components.
    - Contact: Renders the Contact component.
    - StarsCanvas: Renders the StarsCanvas component as a background.

3.Export:

  - The App component is exported as the default export, making it easy to import and use in other parts of the application.


*/
