import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    wis,
    homedepot,
    tendercare,
    bindingofissaccremake,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Game Development",
      icon: mobile,
    },
    {
      title: "Cloud Engineering",
      icon: backend,
    },
    {
      title: "Full Stack Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Admin Work",
      company_name: "Tendercare Living Centre Retirement Home",
      icon: tendercare,
      iconBg: "#383E56",
      date: "Feburary 2017 - December 2017",
      points: [
        "Professionally organize papers and important documents.",
        "Keep Track of who checks in and out of the building",
        "Answer Phone inquiries",
        "Using excel sheets for inventory management",
      ],
    },
    {
      title: "Tool Rental / Customer Service Associate",
      company_name: "Home Depot",
      icon: homedepot,
      iconBg: "#E6DEDD",
      date: "March 2019 - December 2020",
      points: [
        "Create contracts for equipment and tools rented out for contractors.",
        "Answer and provide excellent customer service to customers that have questions about tools and or advice on current projects.",
        "Answer customer phone calls professionally",
        "Efficently cash out customers",
        "Maintain and repair tools",
      ],
    },
    {
      title: "Maintenance Worker / Kitchen Server",
      company_name: "Tendercare Living Centre Retirement Home",
      icon: tendercare,
      iconBg: "#383E56",
      date: "December 2020 - August 2021",
      points: [
        "Worked under tough covid circumstances as the retirement home was one of the worst covid hit home,",
        "Repair anyhing that malfunctions which include electrical, plubming and general maintenance of equipments.",
        "Daily building checks",
        "Move heavy boxes, equipment and other heavy duty tasks.",
        "Provide help with serving food catrered specifically to each individual as covid caused extreme understaffing",
        "Other help needed in the building (covid understaffing)",
      ],
    },
    {
      title: "Inventory Supervisor",
      company_name: "WIS International",
      icon: wis,
      iconBg: "#E6DEDD",
      date: "June 2024 - Present",
      points: [
        "Lead and manage a team to ensure accurate inventoryt counting in diverse settings",
        "Oversee inventory operations in compliance iwht company policies and industry standards",
        "Utilize technology solutions for efficent inventroy tracking and managemnet, which includes:",
        "WIS:DOM software specializing in warehouse management systems platformed by IBM (Data Analysis).",
        "WMS, Billing, Work Orders and Performance indicators",
        "Implement performance metrics to track team performance and enhance productivity",
        "Maintain Inventory accuracy and integrity through regular audits and quality control measures",
        "Foster a collaborative and support team environment, promoting open communication and teamwork.",

      ],
    },
  ];
  
  /*const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  */
  
  const projects = [
    {
      name: "The Binding of Issac Remake",
      description:
        "The Binding of Isaac : Bootlegged is a recreation of a popular video game written in Java using the Greenfoot GUI. ",
      tags: [
        {
          name: "Java",
          color: "blue-text-gradient",
        },
        {
          name: "Greenfoot",
          color: "green-text-gradient",
        },
      ],
      image: bindingofissaccremake,
      source_code_link: "https://github.com/shivamjanda/The-Binding-of-Isaac-Video-Game-Remake",
    },
    {
      name: "Insert my stuff here",
      description:
        "mY description",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: bindingofissaccremake,
      source_code_link: "https://github.com/",
    },
    {
      name: "Insert my stuff here",
      description:
        "my description",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: bindingofissaccremake,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };