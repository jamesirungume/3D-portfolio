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
    // meta,
    // starbucks,
    tesla,
    shopify,
    // carrent,
    // jobit,
    // tripguide,
    threejs,
  } from "../assets";
  import starbucks from "../assets/company/pj.png";
  import meta from "../assets/company/chatwave.png";
  import logo from "../assets/bff3254df1cf22ed74923aaa65bc2a08.jpg";
  import carrent from "../assets/Screenshot from 2024-02-20 08-44-38.png";
  import jobit from "../assets/Screenshot from 2024-02-20 08-57-21.png";
  import tripguide from "../assets/Screenshot from 2024-02-20 09-22-04.png";
  import Wordpress from "../assets/company/Wordpress.png";
  import React from "../assets/company/React.png";
  import Mysql from "../assets/company/Mysql.jpeg";
  import Cloth from "../assets/company/Cloth.png";
  import Home from "../assets/company/Home.png";
  import HOMEB from "../assets/company/home.2b5a4a85.jpg";
  import HireGroove from "../assets/company/HireGroove.png";

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
      title: "Wordpress Developer",
      icon: Wordpress,
    },
    {
      title: "Frontend dev(reactJ,typescript)",
      icon: React    },
    {
      title: "Backend Developer(Django,Flask & other backend CMS)",
      icon: backend,
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
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
  title: "WordPress & Digital Marketing Specialist",
  company_name: "Upwork",
  icon: Wordpress,
  iconBg: "#383E56",
  date: "Oct 2023 - Present",
  points: [
    "Developing custom WordPress themes and plugins tailored to client needs.",
    "Designing and managing responsive, SEO-friendly websites using Elementor and WPBakery.",
    "Integrating social media platforms like Instagram and Facebook for seamless user engagement.",
    "Creating and managing paid advertising campaigns on Facebook and Instagram to drive traffic and conversions.",
    "Collaborating with clients to create content strategies and optimize marketing performance.",
    "Monitoring site analytics and ad performance to refine strategies and deliver measurable results."
  ],
},

    {
      title: "React JS Developer ",
      company_name: "Nairobi Digital Hub INTERNSIP",
      icon: React,
      iconBg: "#E6DEDD",
      date: "Oct 2023 - Nov 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack developer",
      company_name: "Freelance In Patel Buisness",
      icon: Cloth,
      iconBg: "#383E56",
      date: "Sept 2022 - Oct 2023",
      points: [
        "Developing and maintaining web applications using React.js, mySQL and flask.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality chat app.",
        "This was bulit from scratch my team and I to enhace communication within our classroom"
      ],
    },
    {
      title: "Backend Developer",
      company_name: "Hire Groove Personal website",
      icon: Mysql,
      iconBg: "#E6DEDD",
      date: "Jan 2024 - Present",
      points: [
         "Developing and maintaining web applications back-end using Flask and mySQL and other related technologies.",
        
      ],
    },
  ];
  
  const testimonials = [
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
  
  const projects = [
    
    
    
    {
      name: "GikombaNet(Wordpress site)",
      description:
        "An e-commerce website built with WordPress for shopping quality thrift clothes and footwear from various stores nationwide.", 
      tags: [
        {
          name: "Wordpress Theme(Astra)",
          color: "blue-text-gradient",
        },
        
      ],
      image: Home,
      source_code_link: "https://jamesirungu.free.nf/?i=1",
      website_link: "https://jamesirungu.free.nf/?i=1", // ✅ Add this
    },
     {
      name: "Project Tracker",
      description:
        "Web-based platform that allows programmers to keep track of their projects and different cohorts in order to make it easier for them.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mySQL",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "flask",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/arnold-aswan/project-tracker-frontend",
      website_link: "https://project-tracker-frontend-six.vercel.app/", // ✅ Add this
    },
    {
      name: "FitBuddy +",
      description:
        "A fitness app that helps users track their workouts, nutrition, and progress towards their fitness goals.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        
        {
          name: "Bootstrap",
          color: "pink-text-gradient",
        },
        
       
      ],
      image: HOMEB ,
      source_code_link: "https://github.com/jamesirungume/Fit_budddy",
      website_link: "https://hawamariah.github.io/Fit-Buddy/", // ✅ Add this
    },
     {
      name: "Hire Groove Backend",
      description:
        "A job platform connecting web developers, UI/UX designers, and other tech professionals with freelance and full-time roles.",
      tags: [
        
        {
          name: "mySQL",
          color: "green-text-gradient",
        },
        
        {
          name: "flask",
          color: "pink-text-gradient",
        },
        {
          name: "JWT authorization",
          color: "blue-text-gradient",
        },
      ],
      image: HireGroove,
      source_code_link: "https://github.com/jamesirungume/Hire_Grove_backend/tree/main",
      website_link: "https://dashboard.render.com/web/srv-ckfj2984sbec73cofldg", // ✅ Add this
    },

  ];
  
  export { services, technologies, experiences, testimonials, projects };