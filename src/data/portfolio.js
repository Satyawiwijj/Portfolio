export const personal = {
  name: "Satya P",
  title: "Full-Stack Developer",
  subtitle: "Django & .NET · Aspiring Software Engineering Intern",
  bio1: "I'm a 3rd year B.Tech Information Technology student at PSG College of Technology, Coimbatore — building real software while studying.",
  bio2: "I don't just do academic projects. I've built a live CRM for a motorcycle dealership, an end-to-end billing platform for a real client, and I'm collaborating on an AI-powered voice diarization system with Kovan Labs.",
  bio3: "I work across the full stack — Django, Next.js, React, PostgreSQL — and I've deployed production apps on Railway, Render, and Vercel.",
  email: "satyasurya2000@gmail.com",
  phone: "+91-9597588207",
  github: "https://github.com/Satyawiwijj",
  linkedin: "https://linkedin.com/in/satya-p-17b5611b8",
  location: "Coimbatore, India",
};

export const stats = [
  { num: "3+", label: "Live Projects Shipped" },
  { num: "2",  label: "Active Internships" },
  { num: "6+", label: "Tech Stacks Used" },
  { num: "2027", label: "Expected Graduation" },
];

export const experiences = [
  {
    title: "Software Development Intern",
    org: "Platinum Softwares",
    period: "2024 – Present",
    bullets: [
      "Developing SS Bikez — a full-featured motorcycle dealership CRM using Django and PostgreSQL, deployed live on Railway",
      "Built modules for enquiry management, appointment scheduling, follow-up tracking, and customer conversion flows",
      "Implemented salesperson-level data isolation and production security hardening",
    ],
  },
  {
    title: "Web Development Intern",
    org: "Sakthi Finance Limited",
    period: "Jun 2024",
    bullets: [
      "Learned and implemented CRUD operations using .NET Core MVC, Entity Framework, and SQL Server",
      "Gained hands-on exposure to MVC architecture and professional backend development",
    ],
  },
];

export const projects = [
  {
    icon: "🧾",
    name: "Servo Packings Billing Platform",
    type: "Freelance Client Project",
    desc: "End-to-end billing software for a real client. Django REST backend on Render, Next.js frontend on Vercel, and an Electron desktop wrapper for Windows. Delivered P&L, GST, FY reports and printable HTML invoices.",
    tags: ["Django", "Next.js", "Electron", "PostgreSQL", "Render", "Vercel"],
  },
  {
    icon: "🎙️",
    name: "Voice Diarization System",
    type: "Kovan Labs — Team Project",
    desc: "AI-powered voice diarization system that recognizes up to 12 participants from a single device. Integrated with Google Gemini so users can host and query meetings using only Gemini — getting summaries and insights from live participant input.",
    tags: ["Python", "Gemini AI", "Speech Processing", "ML"],
  },
  {
    icon: "🔐",
    name: "SecureVerify",
    type: "Infosys Global Hackathon",
    desc: "Credential issuance and verification platform using blockchain and Aadhaar-based face recognition to prevent identity fraud. Used smart contracts and SSI principles for tamper-proof certificate storage.",
    tags: ["Blockchain", "Smart Contracts", "Face Recognition", "SSI"],
  },
  {
    icon: "🚌",
    name: "Bus Ticket Booking System",
    type: "College Project",
    desc: "Online ticket reservation platform with a React.js frontend and Spring Boot backend. Designed MySQL schema for route, seat, and booking management.",
    tags: ["Java", "Spring Boot", "React.js", "MySQL"],
  },
];

export const skills = [
  { label: "Languages",    items: ["Python", "Java", "JavaScript", "SQL", "C"] },
  { label: "Frameworks",   items: ["Django", ".NET Core", "React.js", "Next.js", "Spring Boot", "Electron"] },
  { label: "Databases",    items: ["PostgreSQL", "MySQL", "SQL Server"] },
  { label: "Tools & Cloud",items: ["Git", "GitHub", "Railway", "Render", "Vercel", "REST APIs"] },
];
