// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: "Muhammad Farhan",
  photo: "/farhan.jpg",
  role: "Full-Stack & IoT Developer",
  location: "Tangerang Regency, Banten, Indonesia",
  intro:
    "I build web apps, mobile apps and IoT systems that carry a reading from a sensor in the field to a screen in your hand.",
  about: [
    "I graduated in Electrical Engineering from Diponegoro University with a focus on Information Technology, so I am comfortable on both sides of a project the microcontroller and the interface.",
    "Day to day I work with Laravel, Flutter, React and Firebase. I am now learning Go and Spring Boot to broaden my backend skills.",
    "Outside code I led a student nature club, running expeditions and survival training where risk planning came first. I bring the same habits to software: clear plans, safe defaults, and a team that knows its role.",
  ],
  // TODO: replace with your real links.
  email: "mfsn2806@gmail.com",
  github: "https://github.com/MhdFarhan17",
  linkedin: "https://www.linkedin.com/in/mdfarhann/",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export interface Milestone {
  role: string;
  org: string;
  period: string;
  summary: string;
}

export const journey: Milestone[] = [
  {
    role: "Information System Intern",
    org: "PDAM Tirta Moedal, Semarang",
    period: "Oct – Dec 2023",
    summary:
      "Built a web section (PHP, Bootstrap) that streamlines new water connection requests, and helped fix bugs and handle daily user reports.",
  },
  {
    role: "President, Philar Teknik Elektro (MAPALA)",
    org: "Nature club, Electrical Engineering, Undip",
    period: "Nov 2022 – Dec 2023",
    summary:
      "Led the board and 5 divisions, supervised expeditions and survival training under strict safety protocols, and represented the club in visits to other nature clubs.",
  },
  {
    role: "Head of Media, Keluarga Mahasiswa Banten",
    org: "Regional student organization",
    period: "Jun 2021 – Jul 2022",
    summary:
      "Led a 3-person media team: design templates, publication calendar, the Instagram account, event photography, and Zoom and Teams setup for public events.",
  },
  {
    role: "Programming Staff, Roboboat Team",
    org: "Undip Robotic Development Center",
    period: "Aug 2020 – Feb 2021",
    summary:
      "Programmed autonomous boat control in embedded C/C++ with sensor integration and control algorithms for the national RoboBoat competition.",
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["PHP", "JavaScript", "TypeScript", "Dart", "Python", "Java", "C++", "Go"],
  "Frameworks & libraries": ["Laravel", "React", "Flutter", "Node.js", "Tailwind CSS", "Bootstrap", "Spring Boot"],
  "Data & cloud": ["MySQL", "Firebase", "Supabase"],
  "Tools & hardware": ["Git", "GitHub", "Docker", "Postman", "Vercel", "ESP32", "Arduino IDE"],
};

export const awards = [
  { year: "2020", medal: "Gold", title: "International Inventions Show", work: "Smart Talang, a dual-season energy harvesting system" },
  { year: "2019", medal: "Silver", title: "Seoul International Invention Fair", work: "Combine harvester system integrated with an Android app" },
  { year: "2019", medal: "3rd place", title: "ITB IEEE Fusion Competition", work: "My Farm, an Android app concept and prototype" },
];
