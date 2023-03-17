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
    meta,
    starbucks,
    tesla,
    shopify,
    fiverr,
    carrent,
    jobit,
    tripguide,
    link,
    codex,
    food,
    halloween,
    hoobank,
    smartstudy,
    snake,
    weather,
    threejs,
    FES,
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
      title: "Web Developers",
      icon: web,
    },
    {
      title: "React Native Developers",
      icon: mobile,
    },
    {
      title: "Backend Developers",
      icon: backend,
    },
    {
      title: "Content Creators",
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
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
      name: "Redux Toolkit",
      icon: redux,
    },
  ];
  
  const experiences = [
    {
      title: "Freelance Web Developer",
      company_name: "",
      icon: fiverr,
      iconBg: "#383E56",
      date: "May 2022 - Current",
      points: [
        "Engineered scalable, responsive, multi-platform and SEO friendly websites for multiple clients using HTML5, CSS3 + BEM, JavaScript ES6+ and React best practises",
        "Included SEO, responsive, multi-platform and hosting support, enabling their website to be used by any browser or device.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Front End Developer Intern",
      company_name: "Frontend Simplified",
      icon: FES,
      iconBg: "#383E56",
      date: "Jul 2022 - Dec 2022",
      points: [
        "Transformed a completely static HTML, CSS, JavaScript and React single page application into an interactive user interface using animations, transitions and carousels.",
        "Utilized Git version control and the GitHub interface to work and thrive in a collaborative team environment.",
        "Replicated UI & UX designs and reviewed code through weekly code reviews.",
        "Processed API requests to dynamically represent data from a cloud server and represented it through skeleton loading states, pagination and dynamic routing.",
      ],
    },
    {
      title: "Front End Developer Support",
      company_name: "Frontend Simplified",
      icon: FES,
      iconBg: "#383E56",
      date: "Sep 2022 - Current",
      points: [
        "Supported 1,000+ students using HTML, CSS, Flexbox, JavaScript and React best practices.",
        "Utilized debugging best practices using Google Chrome inspect element tooling.",
        "Simplified difficult programming concepts including responsive website development, CSS layout, Promises and API requests.",
        "Built Scalable Landing pages, and websites using advanced languages and practices.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Sean is so hard working and always goes the extra mile, his web applications are so beautiful and extremely functional, they all fully demonstrate his tech stack. One thing I like about him the most is that he is very good at spotting bugs in code and he is able to debug them quickly to ensure the project is back to being fully functional.",
      name: "Natasha Mwafulirwa",
      designation: "Junior Full-Stack Developer at Nivo",
      image: "https://media.licdn.com/dms/image/C4E03AQFEafqpnmeDZQ/profile-displayphoto-shrink_800_800/0/1654071474321?e=1684368000&v=beta&t=Z_yzEBtxyK2FU-CIeB9rMTpJ_3R5zWhpIaQ6iPEAPJs",
    },
    {
      testimonial:
        "I recently had the pleasure of working with Sean who is a very talented frontend developer who exceeded all my expectations. His attention to detail and ability to bring visions to life was truly remarkable. Sean's excellent communication skills and willingness to go above and beyond made the entire process enjoyable and stress-free. ",
      name: "David Bragg",
      designation: "Founder & CEO of Frontend Simplified",
      image: "https://media.licdn.com/dms/image/C5603AQGudEpdmxmf3w/profile-displayphoto-shrink_400_400/0/1620787420270?e=1684368000&v=beta&t=NaS9QBAmh9WKneBxDXhYDQYec6MVT1CYWLIS8hnGA-U",
    },
    {
      testimonial:
        "I can confidently say that Sean's skills and expertise were truly impressive while working with him on previous projects. From the very beginning, he demonstrated a deep understanding of the latest frontend technologies and best practices and they was able to quickly turn our design concepts into fully functional, responsive interfaces.",
      name: "Adam Gong",
      designation: "Junior Software Developer at AusDiagnostics",
      image: "https://media.licdn.com/dms/image/D5603AQGl3Rw0C-rLPw/profile-displayphoto-shrink_400_400/0/1674711416341?e=1684368000&v=beta&t=VEaUfXUhdAT6VIxceiHUOqiaV_bUI1q4kT90j71qqIM",
    },
  ];
  
  const projects = [
    {
      name: "Weather API Application",
      description:
        "I built a React JS weather app using the OpenWeatherMap API. I also used axios to connect with the API. This app will let you enter any city or country in the world to get a real time weather forecast of it.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "openweathermapapi",
          color: "pink-text-gradient",
        },
      ],
      image: weather,
      source_code_link: "https://github.com/babstah/weather-api-app",
      project_link: "https://weather-c1jzfr4bi-babstah.vercel.app"
    },
    {
      name: "Modern Banking App Website",
      description:
        "Created a modern banking website using best practices of HTML CSS JavaScript Typescript React and also TailwindCSS, this is also a responsive website so that it can be viewed on all devices.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: hoobank,
      source_code_link: "https://github.com/babstah/hoobank",
      project_link: "https://react-bank.vercel.app"
    },
    {
      name: "Food Restaurant Website",
      description:
        "I made a responsive food restaurant website using HTML CSS and JavaScript, I also included a pizza loading animation with a fadeout effect using JavaScript and also made a navbar with toggle menu bar effect.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "vanillajs",
          color: "pink-text-gradient",
        },
      ],
      image: food,
      source_code_link: "https://github.com/babstah/Food-Website",
      project_link: "https://babstah.github.io/Food-Website/"
    },
    {
      name: "ChatGPT Clone",
      description:
        "The ChatGPT clone project is a conversational AI chatbot built with React, JavaScript, and the GPT-3 model API. It uses natural language processing to understand and generate human-like responses to user input. The chatbot can be trained to understand various topics and can be customized to fit specific use cases. The user interface is designed using React, making it easy to use and interactive.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "gpt3modelapi",
          color: "pink-text-gradient",
        },
      ],
      image: codex,
      source_code_link: "https://github.com/babstah/codex",
      project_link: "https://codex-beta-eight.vercel.app"
    },
    {
      name: "Snake Game",
      description:
        "This project is a simple snake game I created using JavaScript as well as HTML and CSS to style the icons, this is a game that loops and also displays best practices for game development and breaking up large files.",
      tags: [
        {
          name: "javascript",
          color: "blue-text-gradient",
        },
      ],
      image: snake,
      source_code_link: "https://github.com/babstah/Snake-Game",
      project_link: "https://babstah.github.io/Snake-Game/"
    },
    {
      name: "Halloween E-Commerce Store",
      description:
        "This is a Halloween E Commerce store I created with HTML CSS and Vanilla JavaScript, features of this website include a responsive header and navbar with a toggle effect and also a responsive slider effect using swiper.js.",
      tags: [
        {
          name: "vanillajs",
          color: "blue-text-gradient",
        },
        {
          name: "swiperjs",
          color: "green-text-gradient",
        },
      ],
      image: halloween,
      source_code_link: "https://github.com/babstah/halloween-ecommerce-store",
      project_link: "https://babstah.github.io/halloween-ecommerce-store/"
    },
    {
      name: "Educational Course Website",
      description:
        "Created a multi page online educational website using HTML CSS and Vanilla JavaScript from scratch. This is a responsive website with a navbar with toggle menu bar effect and also using flexbox throughout the whole website to make it responsive on different devices.",
      tags: [
        {
          name: "vanillajs",
          color: "blue-text-gradient",
        },
      ],
      image: smartstudy,
      source_code_link: "https://github.com/babstah/responsive-education-website",
      project_link: "https://babstah.github.io/responsive-education-website/"
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };