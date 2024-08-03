import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles"; // Importing custom styles from a module
import { navLinks } from "../constants"; // Importing navigation links data
import { logo, menu, close } from "../assets"; // Importing image assets 

const Navbar = () => {
  // State to track which navigation link is currently active
  const [active, setActive] = useState("");
  // State to toggle the mobile navigation menu
  const [toggle, setToggle] = useState(false);
  // State to track if the page has been scrolled past a certain point
  const [scrolled, setScrolled] = useState(false);

  // useEffect hook to handle the scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get the vertical scrol position
      if (scrollTop > 100) {
        setScrolled(true); // If it is scrolled more than 100 px, set scrolled to true
      } else {
        setScrolled(false); // else less than 100 px, set scrolled to false
      }
    };

    // Add the scroll event listner when the components mounts
    window.addEventListener("scroll", handleScroll);

    // Remove the scroll event listner when the component unmounts
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      {/* Container to align content horizontally and center it */}
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        {/* Link to the home page, resets the active state and scrolls to the top */}
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive(""); // Reset the active state
            window.scrollTo(0, 0); // Scroll to the top of the page
          }}
        >
           {/* Brand name with conditional display based on screen size */}         
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Shivam &nbsp;
            <span className='sm:block hidden'> Janda</span> 
            
          </p>
        </Link>
        
        {/* Navigation links for desktop view */}
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {/* Iterating over navLinks array to create list items */}
          {navLinks.map((nav) => (
            <li
              key={nav.id} // Uniqure key for each list item
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`} // Dynamic classes for active state and hover effect
              onClick={() => setActive(nav.title)} // Set the active link
            >
              {/* Anchor link to section based on nav.id */}
              <a href={`#${nav.id}`}>{nav.title}</a> 
            </li>
          ))}
        </ul>

        {/* Hamburger menu for mobile view */}
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu} // Toggle between menu and close icons
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)} // Toggle the mobile menu
          />
          
          {/* Mobile navigation menu */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            {/* List of navigation links for mobile view */}
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {/* Iterating over navLinks array to create list items */}             
              {navLinks.map((nav) => (
                <li
                  key={nav.id} // Uniqure key for each list item
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`} // Dynamic classes for active state
                  onClick={() => {
                    setToggle(!toggle); // Close the mobile menu
                    setActive(nav.title); // Set the active link when clicked
                  }}
                >
                  {/* Anchor link to section based on nav.id */}
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; // Exporting the Navbar component as the default export

/*

Container elements: <nav> and <div> elements are containers for the navigation bar and its contents, respectively.
Link to home: The Link component wraps the brand name and handles click events to reset the active state and scroll to the top of the page.
Navigation links for desktop view: The ul element with class hidden sm:flex ensures that these links are only visible on larger screens (hidden on small screens).
Mobile navigation menu toggle: The div containing the img element is responsible for displaying the hamburger menu icon, which toggles the state of the mobile menu.
Mobile navigation menu: The conditional rendering of the mobile menu is controlled by the toggle state. When toggle is true, the menu is displayed; otherwise, it is hidden.


*/