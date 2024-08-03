import { Html, useProgress } from "@react-three/drei"; // Importing Html and useProgress components from @react-three/drei

// CanvasLoader component to display a loading spinner and progress percentage
const CanvasLoader = () => {
  const { progress } = useProgress(); // useProgress hook to get the current loading progress
  // This hook is used to get the current loading progress of assets in the 3D canvas. The progress variable holds the loading percentage.

  return (
    // Html component to render HTML elements in the 3D canvas
    <Html
      as='div' // HTML element type
      center // Center the content
      style={{
        display: "flex", // Flexbox layout
        justifyContent: "center", // Center content horizontally
        alignItems: "center", // Center content vertically
        flexDirection: "column", // Stack elements vertically
      }}
    >
      <span className='canvas-loader'></span> {/* Loader spinner */}
      <p
        style={{
          fontSize: 14,
          color: "#F1F1F1",
          fontWeight: 800,
          marginTop: 40,
        }}
      >
        {progress.toFixed(2)}% {/* Display the loading progress percentage */}
      </p>
    </Html>
  );
};

export default CanvasLoader; // Exporting the CanvasLoader component as the default export





/* Detailed Explanation

1.Imports:

    - Html: A component from @react-three/drei that allows rendering of HTML elements in the 3D canvas.
    - useProgress: A hook from @react-three/drei that provides loading progress information.

2.CanvasLoader Component:

    - useProgress Hook: This hook is used to get the current loading progress of assets in the 3D canvas. The progress variable holds the loading percentage.
    - Html Component:
      - as='div': Specifies the HTML element type to be a div.
      - center: Centers the content within the 3D canvas.
      - style: Inline styles to define the layout and appearance of the content.
        - display: "flex": Uses flexbox layout.
        - justifyContent: "center": Centers the content horizontally.
        - alignItems: "center": Centers the content vertically.
        - flexDirection: "column": Stacks the child elements vertically.
      - Child Elements:
       -  span: A span element with a class of canvas-loader, which could be styled to show a loading spinner.
       -  p: A paragraph element displaying the loading progress percentage.
       -  style: Inline styles to define the font size, color, weight, and top margin.
       -  {progress.toFixed(2)}%: Displays the loading progress with two decimal places.


3. Export:
   - The CanvasLoader component is exported as the default export, making it easy to import and use in other parts of the application.




*/