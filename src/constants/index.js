import { getAssetPath } from '../utils/getAssetPath';

const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: getAssetPath("/images/ideas.svg") },
  { text: "Concepts", imgPath: getAssetPath("/images/concepts.svg") },
  { text: "Designs", imgPath: getAssetPath("/images/designs.svg") },
  { text: "Code", imgPath: getAssetPath("/images/code.svg") },
  { text: "Ideas", imgPath: getAssetPath("/images/ideas.svg") },
  { text: "Concepts", imgPath: getAssetPath("/images/concepts.svg") },
  { text: "Designs", imgPath: getAssetPath("/images/designs.svg") },
  { text: "Code", imgPath: getAssetPath("/images/code.svg") },
];

const counterItems = [
  { value: 8, suffix: "+", label: "Years of Experience" },
  { value: 85, suffix: "+", label: "Satisfied Clients" },
  { value: 100, suffix: "+", label: "Completed Projects" },
  { value: 99, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: getAssetPath("/images/logos/company-logo-1.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-2.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-3.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-4.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-5.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-6.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-7.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-8.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-9.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-10.png"),
  },
  {
    imgPath: getAssetPath("/images/logos/company-logo-11.png"),
  },
];

const abilities = [
  {
    imgPath: getAssetPath("/images/seo.png"),
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: getAssetPath("/images/chat.png"),
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: getAssetPath("/images/time.png"),
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: getAssetPath("/images/logos/react.png"),
  },
  {
    name: "Python Developer",
    imgPath: getAssetPath("/images/logos/python.svg"),
  },
  {
    name: "Backend Developer",
    imgPath: getAssetPath("/images/logos/node.png"),
  },
  {
    name: "Interactive Developer",
    imgPath: getAssetPath("/images/logos/three.png"),
  },
  {
    name: "Project Manager",
    imgPath: getAssetPath("/images/logos/git.svg"),
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: getAssetPath("/models/react_logo-transformed.glb"),
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: getAssetPath("/models/python-transformed.glb"),
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: getAssetPath("/models/node-transformed.glb"),
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: getAssetPath("/models/three.js-transformed.glb"),
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: getAssetPath("/models/git-svg-transformed.glb"),
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: getAssetPath("/images/exp1.png"),
    logoPath: getAssetPath("/images/logo1.png"),
    title: "Frontend Developer",
    date: "Feb 2024 - Aug 2025",
    responsibilities: [
      "Engineered and deployed LVT's advanced live video streaming systems reducing retail theft and vandalism incidents.",
      "Designed and integrated Cognify AI camera networks to enhance real-time monitoring and public safety.",
      "Implemented ShotSpotter technology for instant gunshot detection and automated law enforcement dispatch.",
      "Developed a Whooster interface for rapid suspect identification using name, address, and digital footprint.",
      "Integrated Skydio drone automation for seamless drone dispatch and flight operations.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: getAssetPath("/images/exp2.png"),
    logoPath: getAssetPath("/images/logo2.png"),
    title: "Full Stack Developer",
    date: "March 2021 - Feb 2024",
    responsibilities: [
      "Designed and developed the patented Overwatch platform for AI-powered suspect tracking across video feeds.",
      "Built and maintained a third-party app marketplace to expand platform capabilities and improve performance.",
      "Created LiveLink technology to securely connect field mobile devices with dispatch through real-time video.",
      "Developed the Buddi interface for device monitoring and management in live law enforcement environments.",
      "Engineered Family Watchdog integration for offender tracking and public safety alerts.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: getAssetPath("/images/exp3.png"),
    logoPath: getAssetPath("/images/logo3.png"),
    title: "React Native Developer",
    date: "May 2017 - Sept 2019",
    responsibilities: [
      "Developed accounting automation tools using C# and VBA, improving efficiency across internal workflows.",
      "Built a VBA program to process over 1 million Excel entries for invoice-level expenditure analysis.",
      "Optimized C# constructors and functions for enterprise accounting applications.",
      "Collaborated with teams to migrate legacy VBA systems to C# and implemented MySQL-based security access.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: getAssetPath("/images/logo1.png"),
  },
  {
    name: "logo2",
    imgPath: getAssetPath("/images/logo2.png"),
  },
  {
    name: "logo3",
    imgPath: getAssetPath("/images/logo3.png"),
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: getAssetPath("/images/client1.png"),
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: getAssetPath("/images/client3.png"),
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: getAssetPath("/images/client2.png"),
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: getAssetPath("/images/client5.png"),
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: getAssetPath("/images/client4.png"),
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: getAssetPath("/images/client6.png"),
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: getAssetPath("/images/insta.png"),
  },
  {
    name: "fb",
    imgPath: getAssetPath("/images/fb.png"),
  },
  {
    name: "x",
    imgPath: getAssetPath("/images/x.png"),
  },
  {
    name: "linkedin",
    imgPath: getAssetPath("/images/linkedin.png"),
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};