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

const logoIconsList2 = [
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

const logoIconsList = [
  {
    name: "Axon",
    imgPath: getAssetPath("/images/axon-logo.png"),
  },
  {
    name: "Axis Communications",
    imgPath: getAssetPath("/images/axis-logo.png"),
  },
  {
    name: "Bosch",
    imgPath: getAssetPath("/images/bosch-logo.png"),
  },
  {
    name: "Fusus",
    imgPath: getAssetPath("/images/fusus-logo.png"),
  },
  {
    name: "Gpc",
    imgPath: getAssetPath("/images/gpc-logo.png"),
  },
  {
    name: "Motorola",
    imgPath: getAssetPath("/images/motorolla-logo.png"),
  },
  {
    name: "Genetec",
    imgPath: getAssetPath("/images/genetec-logo.png"),
  },
  {
    name: "Milestone Systems",
    imgPath: getAssetPath("/images/milestone-logo.png"),
  },
  {
    name: "Verkada",
    imgPath: getAssetPath("/images/verkada-logo.png"),
  },
  {
    name: "Ring",
    imgPath: getAssetPath("/images/ring-logo.png"),
  },
  {
    name: "Avigilon",
    imgPath: getAssetPath("/images/avigilon-logo.png"),
  },
  {
    name: "DroneSense",
    imgPath: getAssetPath("/images/dronesense-logo.png"),
  },
  {
    name: "Skydio",
    imgPath: getAssetPath("/images/slogo.png"),
  },
];

const abilities = [
  {
    imgPath: getAssetPath("/images/seo.png"),
    title: "Quality Focused",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: getAssetPath("/images/chat.png"),
    title: "Reliable Communication",
    desc: "Delivering transparency and insight through continuous communication.",
  },
  {
    imgPath: getAssetPath("/images/time.png"),
    title: "On-Time Delivery",
    desc: "Ensuring projects are completed on schedule, with quality & attention to detail.",
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
    name: "React",
    modelPath: getAssetPath("/models/react_logo-transformed.glb"),
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Angular",
    modelPath: getAssetPath("/models/alogo.glb"),
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Blender",
    modelPath: getAssetPath("/models/blogo.glb"),
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Github",
    modelPath: getAssetPath("/models/git-svg-transformed.glb"),
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
  {
    name: "Interactive Experiences",
    modelPath: getAssetPath("/models/three.js-transformed.glb"),
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review: "Mason led the integration of Skydio drone automation, designing an intuitive frontend interface that streamlined drone launch and flight operations. This implementation enabled seamless dispatch and autonomous flights, markedly enhancing real-time situational awareness, operational efficiency, and rapid response capabilities for First Responders.",
    imgPath: getAssetPath("/images/slogo.png"),
    logoPath: getAssetPath("/images/logo1.png"),
    title: "Axon - Software Engineer II",
    date: "Feb 2024 - Aug 2025",
    companyUrl: "https://www.axon.com/",
    responsibilities: [
      "Designed and implemented a robust in-app purchase, credential management, and integration framework enabling secure utilization of third-party premium tools within the Axon ecosystem.",
      "Collaborated with 85+ third-party vendors to design and deliver integrated features that leveraged partner technologies, driving mutual value for both Axon and third-party users.",
      "Engineered and deployed LVT's advanced live video streaming systems reducing retail theft and vandalism incidents.",
      "Designed and integrated Cognify AI camera networks to enhance real-time monitoring and public safety.",
      "Implemented ShotSpotter technology for instant gunshot detection and automated law enforcement dispatch.",
      "Developed a Whooster interface for rapid suspect identification using name, address, and digital footprint.",
      "Integrated Skydio drone automation for seamless drone dispatch and flight operations.",
      "Built a dynamic credential integration system to streamline multi-platform authentication.",
    ],
  },
  {
    review: "Mason successfully integrated Whooster into the Fūsus ecosystem, enabling efficient identity searches, investigative workflows, and background-check operations. The integration improved data correlation, enhanced situational awareness, and accelerated decision-making during critical investigations.",
    imgPath: getAssetPath("/images/wlogo.png"),
    logoPath: getAssetPath("/images/logo2.png"),
    title: "Fūsus - Software Engineer I",
    date: "March 2021 - Feb 2024",
    companyUrl: "https://www.fusus.com/",
    responsibilities: [
      "Designed and developed the patented Overwatch platform for AI-powered suspect tracking across video feeds.",
      "Built and maintained a third-party app marketplace to expand platform capabilities and improve performance.",
      "Created LiveLink technology to securely connect field mobile devices with dispatch through real-time video.",
      "Developed a Whooster interface for rapid suspect identification using name, address, and digital footprint.",
      "Engineered Family Watchdog integration for offender tracking and public safety alerts.",
    ],
  },
  {
    review: "Mason demonstrated exceptional creativity and technical expertise, significantly strengthening platform security by eliminating hard-coded data, implementing robust password encryption, and deploying secure backend storage solutions. He designed and built an automated data retrieval system for quarterly audits, driving substantial gains in operational efficiency while reducing system downtime.",
    imgPath: getAssetPath("/images/sclogo.png"),
    logoPath: getAssetPath("/images/logo3.png"),
    title: "Georgia Power - Software Engineer Intern",
    date: "May 2017 - Sept 2019",
    companyUrl: "https://www.georgiapower.com/",
    responsibilities: [
      "Developed accounting automation tools using C# and MySQL, significantly improving internal workflow efficiency.",
      "Designed and built C# accounting applications to manage joint-ownership infrastructure and audit business operations, including cost allocation, financial tracking, and compliance reporting.",
      "Optimized enterprise accounting systems to improve performance, scalability, and maintainability.",
      "Collaborated cross-functionally to migrate legacy applications to C#, implementing MySQL-based role-based security and access controls.",
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
    name: "Chris Lindenau",
    mentions: "@clindenau",
    review:
      "Mason's contribution to our third-party app marketplace was invaluable. He had this unique ability to break down complex integration requirements and deliver elegant, maintainable solutions. His work ethic was outstanding—always punctual, always prepared, and always willing to go the extra mile to ensure the product was right.",
    imgPath: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lars Langaard",
    mentions: "@larslangaard",
    review:
      "Working with Mason on the Skydio integration was a game-changer for our team. His punctuality and reliability were matched only by his innovative approach to solving technical challenges. He took ownership of the entire frontend architecture and delivered a product that exceeded our expectations in both functionality and user experience.",
    imgPath: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Tony Robinson",
    mentions: "@trobinson",
    review:
      "Mason's work on the Overwatch platform was exceptional. His ability to translate complex AI tracking requirements into a seamless user experience demonstrated both technical depth and creative problem-solving. He consistently delivered high-quality code ahead of schedule and was always the first to volunteer when challenges arose.",
    imgPath: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Ammar Haq",
    mentions: "@ahaqaxon",
    review:
      "I had the privilege of collaborating with Mason on multiple integrations at Axon. His ability to quickly understand complex systems and deliver quality solutions was remarkable. He never missed a standup, always had thoughtful insights, and his code reviews showed a deep commitment to excellence. The LVT streaming system he built is rock solid.",
    imgPath: "https://randomuser.me/api/portraits/men/54.jpg",
  },
  {
    name: "Shimin Guo",
    mentions: "@shiming",
    review:
      "Mason's creativity and technical expertise made our Cognify AI interface a standout feature. He approached every challenge with fresh ideas and delivered production-ready code consistently on time. His deep understanding of both frontend technologies and real-time systems made him an invaluable team member.",
    imgPath: "https://randomuser.me/api/portraits/women/43.jpg",
  },
  {
    name: "Bill Whiteman",
    mentions: "@bwhitemangpc",
    review:
      "Mason was one of the most dedicated interns I've managed at Georgia Power. His knowledge of C# and database security was impressive for his experience level. What stood out most was his initiative—he identified security vulnerabilities we hadn't considered and implemented solutions that are still in use today. He never missed a deadline and always came prepared.",
    imgPath: "https://randomuser.me/api/portraits/men/71.jpg",
  },

];

const socialImgs = [
  {
    name: "email",
    imgPath: getAssetPath("/images/email.png"),
  },
  {
    name: "linkedin",
    imgPath: getAssetPath("/images/linkedin.png"),
  },
    {
    name: "github",
    imgPath: getAssetPath("/images/gh.png")
  },
];

export {
  words,
  abilities,
  logoIconsList,
  logoIconsList2,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};