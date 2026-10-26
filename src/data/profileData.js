// ---------------------------------------------------------------------------
// EDIT ME: this file holds every piece of personal/editable content on the
// site. Update the values below with your real information — nothing else
// in the codebase needs to change.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Inam",
  role: "Java Full Stack Developer",
  tagline: "Building reliable backend systems, one service at a time.",
  intro:
    "Java backend developer focused on designing dependable, well-tested microservices and learning the modern tooling around them.",
  location: "Pakistan",
  email: "lashariinam50@gmail.com",
  phone: "+92 3066738557",
  // Drop a real photo in /public (e.g. /public/photo.jpg) and set this to
  // "/photo.jpg" to show it on the Home section. Leave empty to keep the
  // animated gradient avatar instead.
  photoUrl: "",
  social: {
    github: "https://github.com/InamullahLashari?tab=repositories",
    linkedin: "https://www.linkedin.com/in/inam-lashari-466a41256/",
  },
  resumeUrl: "#", // link to a hosted PDF resume, if you have one
};

export const about = {
  whoIAm:
    "I'm a software engineer focused on building scalable backend systems and reliable web applications, with a strong interest in clean architecture and solving complex problems.",

  whatIDo:
    "I design and develop REST APIs and microservices, covering everything from data modeling and business logic to authentication, service integration, deployment, and monitoring.",

  experience:
    "Experienced in building Spring Boot microservices end-to-end, implementing JWT-based authentication and token rotation, API gateways, and secure service-to-service communication.",

  interestedIn:
    "I'm passionate about backend engineering, distributed systems, microservice architecture, and building reliable platforms where performance, security, and correctness matter.",

  goals:
    "My goal is to grow into a strong backend and platform engineer, contribute to architectural decisions, and eventually lead the design of scalable, resilient systems.",
};


// Grouped by area rather than a "Core / Working" level — every skill here
// is one you actively use, so the grid speaks for itself without a badge.
export const skillGroups = [
  {
    group: "Backend & Java",
    icon: "backend",
    items: [
      "Java",
      "Advanced Java",
      "Multithreading & Concurrency",
      "Spring Boot",
      "WebFlux",
      "JPA / Hibernate",
      "Microservices",
      "REST APIs",
      "RestTemplate",
      "JDBC",
    ],
  },
  {
    group: "Data & Messaging",
    icon: "data",
    items: ["MySQL", "PostgreSQL", "Redis", "Kafka"],
  },
  {
    group: "DevOps & Infra",
    icon: "infra",
    items: ["Docker", "Kubernetes", "CI/CD Pipelines", "Linux", "Git"],
  },
  {
    group: "Frontend & Mobile",
    icon: "frontend",
    items: ["React", "Next.js", "React Native"],
  },
];

export const education = [
  {
    degree: "Bachelor's Degree in Computer Science",
    institution: "QUEST University",
    period: "Graduated 2025",
    detail: "",
  },
];

// Reverse-chronological work history — most recent role first.
export const experience = [
  {
    role: "Full Stack Developer",
    company: "Finnect",
    project: "Digital Banking App",
    period: "Present",
    current: true,
    detail: "Currently developing a digital  banking application end-to-end(offline Transaction).",
  },
  {
    role: "Full Stack Developer",
    company: "Fusion Tech",
    project: "CRM Mortgage",
    period: "9 months",
    current: false,
    detail: "Built and maintained a CRM platform for mortgage workflows.",
  },
  {
    role: "Full Stack Java Developer Intern",
    company: "10Pearls",
    logoDomain: "10pearls.com",
    project: "Smart Contact Management System",
    period: "4 months",
    current: false,
    detail: "Contributed to a smart contact management system as part of a full stack Java internship.",
  },
  {
    role: "Senior Freelance Developer",
    company: "Freelancer.com",
    logoDomain: "freelancer.com",
    project: "E-commerce Website",
    period: "14 months",
    current: false,
    detail: "Built and supported an e-commerce website as a senior freelancer over an extended engagement.",
  },
];

export const availability = {
  status: "Currently available",
  note: "Open to part-time work right now. Other arrangements aren't open at the moment.",
  options: [
    { label: "Full-time", available: false },
    { label: "Part-time", available: true },
    { label: "Freelance", available: false },
    { label: "Remote", available: false },
  ],
};

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "availability", label: "Availability" },
  { id: "games", label: "Playground" },
  { id: "contact", label: "Contact" },
];
