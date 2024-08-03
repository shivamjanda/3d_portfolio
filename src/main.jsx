import React from 'react'; // Importing React
import ReactDOM from 'react-dom/client'; // Importing ReactDOM for rendering the application
import App from './App.jsx'; // Importing the main App component
import './index.css'; // Importing the global CSS stylesheet

// Rendering the React application into the root DOM element
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Rendering the App component */}
  </React.StrictMode>,
);


/*

1.Imports:

  - React: Importing the core React library.
  - ReactDOM: Importing ReactDOM from react-dom/client to enable rendering of the React application into the DOM.
  - App: Importing the main App component from ./App.jsx.
  - index.css: Importing the global CSS stylesheet to apply global styles.

2.Rendering the React Application:

  - ReactDOM.createRoot: Creates a root container to render the React application. This is a new method introduced in React 18 for concurrent rendering.
    - document.getElementById('root'): Selects the root DOM element with the ID 'root'.
  - render Method: Renders the React application inside the root container.
    - React.StrictMode: A wrapper component that activates additional checks and warnings for its descendants. It does not render any visible UI but helps with identifying potential problems in the application.
    - App: The main App component is rendered inside React.StrictMode.

3.Export:

  - There is no explicit export in this file as it is the entry point for the application, where the React application is rendered into the DOM.









*/