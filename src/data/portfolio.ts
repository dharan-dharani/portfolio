// ============================================================================
// PORTFOLIO CONTENT — single source of truth
// All information below is derived directly from Dharanidharan S's resume.
// Update this file to change any content shown on the site.
// ============================================================================

export const personalInfo = {
  name: "Dharanidharan S",
  title: "Flutter Developer",
  tagline:
    "Flutter Developer with 2+ years of experience building scalable, real-time cross-platform mobile applications.",
  location: "Madurai, Tamil Nadu, India",
  email: "sdharandharani@gmail.com",
  phone: "+91 93441 76105",
  linkedin: "https://www.linkedin.com/in/dharanidharan-s-386740224",
  linkedinLabel: "dharanidharan-s-386740224",
  github: "https://github.com/dharan-dharani",
  githubLabel: "dharan-dharani",
  resumeFile: "resume.pdf",
  photo: "profile.jpg",
};

export const about = {
  heading: "About Me",
  paragraphs: [
    "I'm Dharanidharan S, a Flutter Developer with 2+ years of experience building cross-platform mobile apps using Flutter and Dart. I specialize in scalable, real-time service applications — food delivery, grocery, taxi booking, and parcel delivery.",
    "My technical toolkit includes MVVM, Clean Architecture, MVC, Dependency Injection, Firebase (Auth, Analytics, Storage, FCM), REST APIs, Razorpay integration, and Google Maps. I'm proficient in GetX and Provider, and familiar with Bloc.",
    "I care about clean architecture, reusable components, and performance-optimized code. I have hands-on experience with Play Store and App Store deployment, and I'm comfortable collaborating in SDLC-driven teams.",
  ],
};

export type SkillGroup = {
  category: string;
  skills: string[];
  icon?: string;
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Dart"],
  },
  {
    category: "Frameworks",
    skills: ["Flutter", "Firebase", "REST API"],
  },
  {
    category: "Architecture",
    skills: ["MVVM", "MVC", "Clean Architecture", "Dependency Injection", "OOPs"],
  },
  {
    category: "State Management",
    skills: ["GetX", "Provider", "Bloc (familiar)"],
  },
  {
    category: "Firebase",
    skills: ["Authentication", "Analytics", "Storage", "FCM", "Hosting"],
  },
  {
    category: "Integrations",
    skills: ["Razorpay", "Google Maps SDK"],
  },
  {
    category: "Tools",
    skills: ["GitHub", "VS Code", "Android Studio", "Flutter DevTools", "Jenkins (basics)", "GitHub Actions (basics)"],
  },
];

export type ExperienceItem = {
  role: string;
  company: string;
  duration: string;
  current?: boolean;
  points: string[];
  technologies: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "Flutter Developer",
    company: "Feb40",
    duration: "Feb 2025 – Present",
    current: true,
    points: [
      "Built multi-service app: Food Delivery, Grocery, Taxi Booking, Parcel Delivery — MVVM + DI architecture.",
      "Firebase Authentication & FCM for real-time notifications.",
      "Razorpay payment integration and Google Maps SDK for live tracking.",
      "Built reusable animated UI components, performance profiling with DevTools, Play Store/App Store releases.",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase",
      "Razorpay",
      "Google Maps",
      "MVVM",
      "GetX",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Success Life Mantra",
    duration: "Jan 2025 – Oct 2025",
    points: [
      "Developed frontend modules for Social Media Marketing Tool (Flutter + React.js) with CRM, broadcast messaging, subscriptions.",
      "Implemented role-based access and reusable scalable modules.",
    ],
    technologies: ["Flutter", "React.js", "Dart", "CRM"],
  },
  {
    role: "Flutter Developer",
    company: "Mindvision Technologies",
    duration: "Jul 2024 – Dec 2024",
    points: [
      "Built responsive Flutter UI, integrated REST APIs for web/mobile.",
    ],
    technologies: ["Flutter", "REST API"],
  },
];

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  type: string;
  description: string;
  role: string;
  contributions: string[];
  technologies: string[];
  links: ProjectLink[];
  badges: string[];
};

export const projects: Project[] = [
  {
    name: "Feb40",
    type: "Multi-service App",
    description:
      "Multi-service app integrating Food Delivery, Grocery, Taxi Booking, and Parcel Delivery — built with MVVM + Dependency Injection.",
    role: "Flutter Developer",
    contributions: [
      "End-to-end development of multi-service Flutter application with Firebase Auth, FCM, Razorpay, and Google Maps.",
      "Reusable animated UI components, DevTools performance profiling, and Play Store / App Store releases.",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "GetX", "Razorpay", "Google Maps"],
    links: [
      { label: "User App", href: "https://play.google.com/store/apps/details?id=com.feb40.app&pcampaignid=web_share" },
      { label: "Service App", href: "https://play.google.com/store/apps/details?id=com.feb40_service.app" },
    ],
    badges: ["Flutter", "Firebase", "GetX", "Play Store", "Live"],
  },
  {
    name: "Nagai51",
    type: "Flavor Concept App",
    description:
      "Flutter app demonstrating white-label / flavor architecture for multi-brand deployments.",
    role: "Flutter Developer",
    contributions: [
      "Implemented flavor-based architecture for scalable multi-brand app deployments.",
      "Clean separation of codebase and configurations across flavors.",
    ],
    technologies: ["Flutter", "Dart", "Firebase"],
    links: [
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.nagai51.user" },
    ],
    badges: ["Flutter", "Firebase", "Play Store", "Live"],
  },
  {
    name: "NXSupplyHub",
    type: "Hosted Web Project",
    description:
      "Hosted web project built with modern web technologies for supply chain management.",
    role: "Developer",
    contributions: [
      "Built responsive web interfaces and deployed to production hosting.",
      "Implemented scalable architecture for supply chain operations.",
    ],
    technologies: ["Web", "Hosting"],
    links: [
      { label: "Live Site", href: "https://nxsupplyhub.com/" },
    ],
    badges: ["Web", "Hosted", "Live"],
  },
  {
    name: "Success Life Mantra",
    type: "CRM & Social Media Marketing Tool",
    description:
      "Marketing tool with CRM, broadcast messaging, subscriptions, and keyword-based flows.",
    role: "Frontend Developer",
    contributions: [
      "Developed CRM modules, broadcast messaging, and subscription workflows.",
      "Implemented role-based access and reusable scalable modules.",
    ],
    technologies: ["Flutter", "React.js", "Dart", "CRM"],
    links: [
      { label: "Live Site", href: "https://inderact.masfob.com/" },
    ],
    badges: ["Flutter", "React.js", "CRM", "Live"],
  },
  {
    name: "Photography Studio App",
    type: "Freelance Project",
    description:
      "Flutter MVVM app with Admin & User modules, Firebase integration, booking management, and event status tracking.",
    role: "Flutter Developer",
    contributions: [
      "Built Admin and User modules with responsive UI and Firebase integration.",
      "Implemented authentication, booking management, and event status tracking using MVVM.",
      "Optimized data handling for improved app performance.",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "MVVM"],
    links: [],
    badges: ["Flutter", "Firebase", "MVVM", "Freelance"],
  },
];

export type EducationItem = {
  institution: string;
  degree: string;
  duration: string;
  detail: string;
};

export const education: EducationItem[] = [
  {
    institution: "Sethu Institute of Technology",
    degree: "B.E in Electronics and Communication Engineering",
    duration: "Sept 2020 – Mar 2024",
    detail: "CGPA: 8.6 / 10",
  },
  {
    institution: "V.H.N Boys Higher Secondary School",
    degree: "Higher Secondary Certificate, Computer Science",
    duration: "Jun 2018 – Mar 2020",
    detail: "Percentage: 68%",
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
