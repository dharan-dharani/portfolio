// ============================================================================
// PORTFOLIO CONTENT — single source of truth
// All information below is derived directly from Dharanidharan S's resume.
// Update this file to change any content shown on the site.
// ============================================================================

export const personalInfo = {
  name: "Dharanidharan S",
  title: "Flutter Developer",
  tagline:
    "Flutter Developer with 1.7+ years of experience building scalable, real-time cross-platform mobile applications.",
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
    "I'm a Flutter Developer with 1.7 years of hands-on experience designing and maintaining cross-platform mobile applications using Flutter and Dart. My work centers on building scalable, real-time service applications — including food delivery, grocery, taxi booking, and parcel management systems.",
    "I build on Clean Architecture, MVVM, and MVC patterns with Dependency Injection, and I'm comfortable owning a feature end-to-end: Firebase Authentication, Analytics, Storage and Cloud Messaging, REST API integration, Razorpay payment gateway, Google Maps integration, and state management with GetX and Provider.",
    "I care about writing clean, reusable, performance-optimized code and collaborating effectively within SDLC-driven teams. I'm currently looking for Flutter/mobile development opportunities where I can contribute to production-grade, real-time applications.",
  ],
};

export type SkillGroup = {
  category: string;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Programming Languages",
    skills: ["Dart", "JavaScript"],
  },
  {
    category: "Frameworks & Technologies",
    skills: ["Flutter", "Firebase", "REST API Integration"],
  },
  {
    category: "Architecture & Design Patterns",
    skills: [
      "MVVM",
      "Clean Architecture",
      "MVC",
      "Dependency Injection",
      "OOPs Concepts",
      "Singleton",
      "Lazy Initialization",
    ],
  },
  {
    category: "State Management",
    skills: ["GetX", "Provider"],
  },
  {
    category: "Firebase Services",
    skills: [
      "Authentication",
      "Firebase Analytics",
      "Firebase Storage",
      "Firebase Cloud Messaging (FCM)",
      "Firebase Hosting",
    ],
  },
  {
    category: "Integrations",
    skills: ["Razorpay Payment Gateway", "Google Maps Integration"],
  },
  {
    category: "Tools & Platforms",
    skills: ["GitHub", "VS Code", "Android Studio", "Flutter DevTools"],
  },
  {
    category: "Core Skills",
    skills: [
      "SDLC",
      "Responsive UI Development",
      "Flutter Animations",
      "Reusable Component Development",
      "Flutter Unit Testing",
      "Manual Testing",
      "App Performance Optimization",
      "Play Store & App Store Deployment",
    ],
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
    duration: "Nov 2025 – Present",
    current: true,
    points: [
      "Contributed to end-to-end development of a multi-service Flutter application integrating Food Delivery, Grocery, Taxi Booking, and Parcel Management, following MVVM and Clean Architecture principles with Dependency Injection for scalability and maintainability.",
      "Implemented Firebase Authentication and Firebase Cloud Messaging (FCM) for real-time data handling and notifications; integrated Firebase Analytics and Firebase Storage for tracking and media management, while optimizing data queries to improve app performance.",
      "Integrated Razorpay payment gateway for secure in-app transactions and Google Maps for real-time location tracking across taxi and delivery workflows.",
      "Developed responsive, reusable UI components with Flutter animations, wrote unit tests for reliability, used Flutter DevTools for performance profiling, and managed deployment on the Google Play Store and App Store.",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Firebase Auth",
      "FCM",
      "Firebase Analytics",
      "Firebase Storage",
      "Razorpay",
      "Google Maps",
      "MVVM",
      "Clean Architecture",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Success Life Mantra",
    duration: "Jan 2025 – Oct 2025",
    points: [
      "Developed frontend modules for a Social Media Marketing Tool using Flutter and React.js with CRM functionality, broadcast messaging, and subscription-based workflows, following SDLC processes across planning, development, and testing.",
      "Implemented dynamic UI flows, user role-based access, and scalable, reusable feature modules using OOPs principles to improve usability, maintainability, and app performance.",
    ],
    technologies: ["Flutter", "React.js", "Dart", "JavaScript", "OOPs"],
  },
  {
    role: "Flutter Developer Intern",
    company: "Mindvision Technologies",
    duration: "Jul 2024 – Dec 2024",
    points: [
      "Built responsive Flutter UI components and integrated REST APIs for real-time web and mobile applications during internship training.",
      "Collaborated with the development team to improve application functionality and user experience.",
    ],
    technologies: ["Flutter", "REST API"],
  },
];

export type Project = {
  name: string;
  type: string;
  description: string;
  role: string;
  contributions: string[];
  technologies: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    name: "Photography Studio Event Management Application",
    type: "Freelance Project",
    description:
      "A Flutter-based application for managing customer bookings, event details, photo selections, and delivery workflows for a photography studio.",
    role: "Flutter Developer",
    contributions: [
      "Built separate Admin and User modules with responsive UI, Firebase integration, and reusable widgets for real-time data management.",
      "Implemented authentication, booking management, and event status tracking using MVVM architecture.",
      "Optimized data handling, improving overall app performance.",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "MVVM"],
  },
  {
    name: "Multi-Service Mobile Application",
    type: "Taxi, Parcel, Restaurants & Grocery Service",
    description:
      "A single Flutter APK integrating Restaurant Ordering, Grocery/Store Delivery, Parcel Delivery, and Taxi Booking, built on Provider-based state management with Dependency Injection.",
    role: "Flutter Developer",
    contributions: [
      "Integrated Firebase Authentication and Firestore for users, vendors, drivers, orders, and ride management, with query optimization that boosted app performance.",
      "Integrated Razorpay for in-app payments and Google Maps for live tracking of taxi rides and deliveries.",
      "Ensured smooth UI performance and responsive layouts, added Flutter animations, and conducted unit and manual testing to maintain application stability.",
    ],
    technologies: [
      "Flutter",
      "Provider",
      "Dependency Injection",
      "Firebase Auth",
      "Firestore",
      "Razorpay",
      "Google Maps",
    ],
  },
  {
    name: "Social Media Marketing Tool",
    type: "Product",
    description:
      "A marketing tool built with React.js, Flutter, and Dart featuring CRM (Customer Relationship Management), keyword-based flows, broadcast messaging, and plan-based restrictions.",
    role: "Frontend Developer",
    contributions: [
      "Implemented dynamic UI restrictions, campaign management, and reusable, role-based access components for scalable marketing operations.",
    ],
    technologies: ["React.js", "Flutter", "Dart", "CRM"],
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
    degree: "B.E. in Electronics and Communication Engineering",
    duration: "Sept 2020 – Mar 2024",
    detail: "CGPA: 8.6 / 10.0",
  },
  {
    institution: "V.H.N Boys Higher Secondary School",
    degree: "Higher Secondary Certificate, Computer Science",
    duration: "Jun 2018 – Mar 2020",
    detail: "Percentage: 68 / 100",
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
