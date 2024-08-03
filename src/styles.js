// Defining a styles object to store CSS classes as JavaScript strings
const styles = {
  paddingX: "sm:px-16 px-6", // Padding for the x-axis: 16 units for small screens, 6 units for other screens
  paddingY: "sm:py-16 py-6", // Padding for the y-axis: 16 units for small screens, 6 units for other screens
  padding: "sm:px-16 px-6 sm:py-16 py-10", // Combined padding for x and y axes

  // Hero section head text styles
  heroHeadText: "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  // Large text sizes for different screen sizes with white font color, black font weight, and margin top of 2 units
  heroSubText: "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  // Sub text with different text sizes for different screen sizes, medium font weight, and a specific color

  // Section head text styles
  sectionHeadText: "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  // Large text sizes for different screen sizes with white font color and black font weight
  sectionSubText: "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  // Smaller text sizes for different screen sizes, secondary text color, uppercase letters, and wider tracking
};

// Exporting the styles object for use in other parts of the application
export { styles };


/*
1.styles Object:

  - A JavaScript object to store CSS class definitions as strings. This allows for dynamic and reusable styling in React components.

2.Padding Styles:

  - paddingX: Sets horizontal padding.
    - sm:px-16: 16 units of padding on the x-axis for small screens.
    - px-6: 6 units of padding on the x-axis for other screens.
  - paddingY: Sets vertical padding.
    - sm:py-16: 16 units of padding on the y-axis for small screens.
    - py-6: 6 units of padding on the y-axis for other screens.
  - padding: Combines horizontal and vertical padding.
    - sm:px-16 px-6 sm:py-16 py-10: 16 units of padding on both axes for small screens, 6 units of padding on the x-axis and 10 units on the y-axis for other screens.

3.Hero Section Text Styles:

  - heroHeadText: Styles for the main heading in the hero section.
    - font-black: Black font weight.
    - text-white: White text color.
    - lg:text-[80px]: 80px font size for large screens.
    - sm:text-[60px]: 60px font size for small screens.
    - xs:text-[50px]: 50px font size for extra small screens.
    - text-[40px]: 40px font size for other screens.
    - lg:leading-[98px]: 98px line height for large screens.
    - mt-2: 2 units of margin at the top.
  - heroSubText: Styles for the subheading in the hero section.
    - text-[#dfd9ff]: Custom color for the text.
    - font-medium: Medium font weight.
    - lg:text-[30px]: 30px font size for large screens.
    - sm:text-[26px]: 26px font size for small screens.
    - xs:text-[20px]: 20px font size for extra small screens.
    - text-[16px]: 16px font size for other screens.
    - lg:leading-[40px]: 40px line height for large screens.

4.Section Text Styles:

  - sectionHeadText: Styles for section headings.
    - text-white: White text color.
    - font-black: Black font weight.
    - md:text-[60px]: 60px font size for medium screens.
    - sm:text-[50px]: 50px font size for small screens.
    - xs:text-[40px]: 40px font size for extra small screens.
    - text-[30px]: 30px font size for other screens.
  - sectionSubText: Styles for section subheadings.
    - sm:text-[18px]: 18px font size for small screens.
    - text-[14px]: 14px font size for other screens.
    - text-secondary: Secondary color for the text.
    - uppercase: Uppercase text transformation.
    - tracking-wider: Wider letter spacing (tracking).

5Export:

  - The styles object is exported for use in other parts of the application, allowing for consistent and reusable styling across components.



*/

