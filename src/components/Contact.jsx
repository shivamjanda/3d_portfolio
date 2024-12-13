import React, { useRef, useState } from "react";
import { motion } from "framer-motion"; // Importing motion component for animations
import emailjs from "@emailjs/browser"; // Importing emailjs for sending emails


import { styles } from "../styles"; // Importing custom styles
import { EarthCanvas } from "./canvas"; // Importing EartchCanvas component
import { SectionWrapper } from "../hoc";  // Importing higher-order component for section wrapping
import { slideIn } from "../utils/motion"; // Importing animation variant

// Contact component to display the contact form and EarthCanvas
const Contact = () => {
  const formRef = useRef(); // useRef hook to reference the form element
  const [form, setForm] = useState({
    name: "", // State to track the name input
    email: "", // State to track the email input
    message: "", // State to track the message input

  });

  const [loading, setLoading] = useState(false); // State to track the loading status

  // Handle input change vents
  const handleChange = (e) => {
    const { target } = e; // Destructure the target from the event
    const { name, value } = target; // Destructure name and value from the target

    // Update the form state with the new input value
    setForm({
      ...form,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setLoading(true); // Set loading state to true

    // Send email using emailjs
    emailjs
      .send(
        "service_lqy5jl8", // Service ID
        "template_6pz1lm9", // Template ID
        {
          from_name: form.name, // Senders name
          to_name: "JavaScript Mastery", // Recipients name
          from_email: form.email, // Senders email
          to_email: "shivjanda@gmail.com", // Recipents email
          message: form.message, // Message content
        },
        "zir5jeh_0WufIJ3dH" // User ID
      )
      .then(
        () => {
          setLoading(false); // Set loading state to false
          alert("Thank you. I will get back to you as soon as possible."); // Show sucess alert

          // Reset the form state
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false); // Set loading state to false
          console.error(error); // Log the error

          alert("Ahh, something went wrong. Please try again."); // Show error message
        }
      );
  };

  return (
    <div
    // Container div for the contact section
      className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      {/* Motion div for the contact form with animation */}
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)} // Applying slideIn animation variant
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        {/* Contact form */}
        <form
          ref={formRef} // Reference to the form element
          onSubmit={handleSubmit} // Handle form submission
          className='mt-12 flex flex-col gap-8'
        >
          {/* Name input */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange} // Handle input change
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {/* Email input */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange} // Handle input change
              placeholder="What's your web address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          {/* Message text area */}
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows={7}
              name='message'
              value={form.message}
              onChange={handleChange} // Handle input change
              placeholder='What do you want to say?'
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          {/* Submit button */}
          <button
            type='submit'
            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
          >
            {loading ? "Sending..." : "Send"} {/* Display "Sending..." while loading */}
          </button>
        </form>
      </motion.div>

      {/* Motion div for the EarthCanvas with animation */}
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)} // Applying slideIn animation variant
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas /> {/* Display EarthCanvas component */}
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");



/*

1.Imports:

  - React: Core library for building UI.
  - useRef, useState: React hooks for managing refs and state.
  - motion: Part of Framer Motion for handling animations.
  - emailjs: Library for sending emails.
  - styles: Custom styles for the component.
  - EarthCanvas: Custom component for rendering a 3D Earth canvas.
  - SectionWrapper: Higher-order component for wrapping sections.
  - slideIn: Animation variant for sliding effects.

2.Contact Component:

  - formRef: Ref to reference the form element.
  - form state: Object to manage form inputs (name, email, message).
  - loading state: Boolean to track if the form is submitting.

3.handleChange Function:

  - Updates the form state when an input value changes.

4.handleSubmit Function:

  - Prevents default form submission.
  - Sets the loading state to true.
  - Sends an email using emailjs with the form data.
  - Resets the form and shows an alert on success.
  - Logs the error and shows an alert on failure.

5.Return Statement:

  - Container div: Main container for the contact section.
  - Motion div for form: Animated container for the contact form.
    - Subtext and Heading: Text elements for the section title.
    - Form: Contains input fields for name, email, and message, and a submit button.
  - Motion div for EarthCanvas: Animated container for the 3D Earth canvas.

6.Export:

  - The Contact component is exported wrapped with the SectionWrapper higher-order component, which may provide additional styling or functionality specific to sections of the website.


*/