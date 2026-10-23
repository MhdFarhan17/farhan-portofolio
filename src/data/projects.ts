// Add a project by copying one block. repo, demo, image and period are optional:
// buttons and labels only appear when you fill them in.
// image example: "/projects/smartkoi.png" (file in public/projects/)

export interface Project {
  slug: string; // used in the URL: /projects/<slug>
  title: string;
  period?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
  repo?: string;
  demo?: string;
  image?: string;
}

const gh = (name: string) => `https://github.com/MhdFarhan17/${name}`;

export const projects: Project[] = [
  {
    slug: "smartkoi",
    title: "SmartKOI",
    period: "Aug 2025 – Feb 2026",
    featured: true,
    summary:
      "A mobile-first monitoring system for koi ponds. ESP32 sensors send readings to Firebase, and a Flutter app shows them live and warns the owner before water quality becomes a problem.",
    highlights: [
      "Live dashboard for temperature, pH, TDS, turbidity, battery level and actuator status",
      "Push notifications through FCM when a reading crosses a safety limit or the battery runs low",
      "Multi-device management with secure sign-in",
      "Backend pipeline that bridges ESP32 microcontrollers and the Firebase database",
    ],
    stack: ["Flutter", "Dart", "Firebase", "FCM", "ESP32"],
    repo: gh("Aplikasi-SmartKOI"),
  },
  {
    slug: "scaffolding-rental",
    title: "ScaffoldPro",
    period: "Jun 2025 – Oct 2025",
    summary:
      "A rental storefront and admin portal for a scaffolding company. Customers browse the catalog, fill a cart, and the order is saved to the database and sent to WhatsApp as a formatted message.",
    highlights: [
      "Catalog with category filters, plus Indonesian and English versions",
      "Checkout that stores the order and opens a ready-made WhatsApp message",
      "Admin portal with login protection, sales overview and order status management",
      "Business settings (phone, address, company name) editable from the admin panel",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Zustand"],
    repo: gh("scaffolding"),
    demo: "https://scaffolding-one.vercel.app",
  },
  {
    slug: "saku",
    title: "SAKU",
    summary:
      "A personal finance tracker that puts expenses, budgets, savings goals and debts in one dashboard, with data protected per user.",
    highlights: [
      "Interactive charts of spending habits",
      "Category budgets with alerts, savings goals with visual progress, and a debt tracker",
      "English and Indonesian, with light and dark themes",
      "Per-user data protection with Supabase Row Level Security",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    repo: gh("SAKU"),
    demo: "https://saku-finance.vercel.app",
  },
  {
    slug: "fluentyapp",
    title: "FluentYapp",
    summary:
      "A gamified English learning web app in the spirit of Duolingo: short interactive lessons, progress rewards and pronunciation practice.",
    highlights: [
      "XP, daily streaks, badges and a global leaderboard",
      "Hearts system where mistakes cost a heart and hearts regenerate over time",
      "Pronunciation practice with the browser's speech recognition",
      "Automatic review sessions built from the user's past mistakes",
      "Email and Google sign-in through Supabase",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    repo: gh("FluentYapp"),
    demo: "https://fluentyapp.vercel.app",
  },
  {
    slug: "good-laundry",
    title: "Good Laundry",
    summary:
      "A point-of-sale and management system for per-kilo laundry shops that replaces paper records.",
    highlights: [
      "Fast order entry: name, service, weight, and the total is calculated instantly",
      "Kanban board with drag and drop for order status",
      "Printable receipts and automatic PDF financial reports",
      "Role-based access for owner and cashier",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "Zustand"],
    repo: gh("GoodLaundry"),
    demo: "https://goodlaundry-peach.vercel.app",
  },
  {
    slug: "sirga",
    title: "SIRGA Family Tree",
    summary:
      "A web app for keeping a family's lineage in one place. Relatives can view the tree as a diagram and contribute their own branches.",
    highlights: [
      "Interactive, zoomable family tree with automatic layout",
      "Admin and contributor roles, with an audit log of every change",
      "Profile photo uploads and a cloud database",
      "English and Indonesian",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "React Flow"],
    repo: gh("familytree"),
    demo: "https://sirga-iota.vercel.app",
  },
  {
    slug: "iot-attendance",
    title: "IoT Employee Attendance System",
    period: "Mar 2024 – Jul 2024",
    summary:
      "A fingerprint attendance system from hardware to web. The device verifies identity on-site and the web dashboard records and shows the history.",
    highlights: ["ESP32 with AS608 fingerprint module", "Admin dashboard, employee records and attendance logs"],
    stack: ["PHP", "MySQL", "ESP32", "C++"],
  },
];
