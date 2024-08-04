/** @type {import('tailwindcss').Config} */
// Exporting the Tailwind CSS configuration
module.exports = {
  // Specifying the paths to all of the template files in the project
  content: ["./src/**/*.{js,jsx}"], // Includes all JavaScript and JSX files in the src directory and its subdirectories
  mode: "jit", // Just-in-Time mode for generating styles on-demand
  theme: {
    // Extending the default theme
    extend: {
      // Extending the default color palette
      colors: {
        primary: "#363538s", // Background plain color
        secondary: "#aaa6c3", // Paragraph text color
        tertiary: "#001c57", // Overview card color
        "black-100": "#001c57", // Contact card color
        "black-200": "#090325", // Additional black shade
        "white-100": "#f3f3f3", // Text color for work experience
      },
      fontFamily: {
        primary:"jetbrainsMono",
      },
      // Extending the default box shadow options
      boxShadow: {
        card: "0px 35px 120px -15px #211e35", // Overview card shadows
      },
      // Extending the default screen size options
      screens: {
        xs: "450px", // Extra small screen size
      },
      // Adding custom background images
      backgroundImage: {
        "hero-pattern": "url('/src/assets/background.png')", // Hero section background image
      },
    },
  },
  plugins: [], // No additional plugins are being used
};



/*

1.Type Annotation:

  - @type {import('tailwindcss').Config} : Type annotation for TypeScript and IDEs to understand the shape of the configuration object.

2.module.exports:

  - Exports the Tailwind CSS configuration object.

3.content:

  - Specifies the paths to all of the template files in the project. This allows Tailwind CSS to purge unused styles in production.
  - "./src/*.{js,jsx}": Includes all JavaScript and JSX files in the src directory and its subdirectories.

4.mode:

  - "jit": Enables Just-in-Time mode for generating styles on-demand, which improves development speed and reduces build sizes.

5.theme:

  - extend: Extends the default theme with custom settings.
    - colors: Adds custom colors to the default color palette.
      - primary: A custom background color.
      - secondary: A custom color for paragraph text.
      - tertiary: A custom color for overview cards.
      - black-100: A custom color for contact cards.
      - black-200: An additional black shade.
      - white-100: A custom text color for work experience sections.
  - boxShadow: Adds custom box shadow settings.
    - card: A custom box shadow for overview cards.
  - screens: Adds custom screen size settings.
    - xs: Defines an extra small screen size with a minimum width of 450px.
  - backgroundImage: Adds custom background images.
    - hero-pattern: A custom background image for the hero section, with the image located at src/assets/herobg.png.

6.plugins:

 -  An array to include any additional Tailwind CSS plugins. This configuration does not currently use any plugins.

*/