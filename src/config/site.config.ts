// Please note Some data Below are Just Placeholder for now due to active development
import type { Metadata } from "next";

export type SocialLink = {
  label: string;
  url: string;
  icon?: string; // name for icon library if needed later
};
export type NavItem = {
  label: string;
  href: string;
};
export interface SiteConfig {
  siteName: string;
  domain: string;
  author: string;
  author_img: string;
  description: string;
  about: string;
  aboutContent: {
    body: string;
    name: string;
  };
  interests: string[];
  keywords: string[];
  ogImage: string;

  // New sections
  skills: {
    categories: Record<
      string,
      {
        title: string;
        items: Array<{
          name: string;
          level?: number; // 1-100 for proficiency percentage
          icon?: string;
        }>;
      }
    >;
  };
  experience: Array<{
    title: string;
    company: string;
    location?: string;
    startDate: string;
    endDate: string | "Present";
    description: string;
    technologies?: string[];
  }>;
  achievements: Array<{
    title: string;
    date?: string;
    issuer?: string;
    description?: string;
    url?: string;
  }>;

  theme: {
    default: "light" | "dark";
    allowSystem: boolean;
  };
  links: {
    website: string;
    github: string;
    linkedin: string;
    email: string;
  };
  social: SocialLink[];
  navigation: NavItem[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    canonical?: string;
    image?: string; // default og image
    imageAlt?: string;
    locale?: string;
    type?: string;
    robots?: string;
    themeColor?: string;
  };
}

export const siteConfig: SiteConfig = {
  siteName: "Muqsith Barru",
  domain: "muqsith.me",
  author: "Muqsith Barru",
  author_img: "/img/profile.jpg",
  description:
    "Specializing in cybersecurity, vulnerability research, and CTF problem-solving. Passionate about securing systems, uncovering vulnerabilities, and turning complex security challenges into real-world impact.",
  about: "",
  aboutContent: {
    name: "Muqsith Barru Pamungkas",
    body: `5th-semester Internet Engineering Technology student specializing in cybersecurity, with practical experience
in web application security, networking, and IoT. Proven ethical hacker with a track record of identifying and responsibly
disclosing vulnerabilities including Information Disclosure, XSS, and SQL Injection in university and government
systems. A national finalist in the IDSECCONF 2024 CTF competition and a core team member of the TRI
Cybersecurity Community, responsible for mentoring members and delivering foundational cybersecurity trainings`,
  },

  interests: ["Muqsith", "Cybersecurity Enthusiast", "IoT Engineer"],

  skills: {
    categories: {
      frontend: {
        title: "Frontend Development",
        items: [
          { name: "React", level: 90, icon: "react" },
          { name: "Next.js", level: 85, icon: "next" },
          { name: "TypeScript", level: 80, icon: "typescript" },
          { name: "TailwindCSS", level: 90, icon: "tailwind" },
          { name: "HTML/CSS", level: 95 },
        ],
      },
      backend: {
        title: "Backend Development",
        items: [
          { name: "Node.js", level: 85, icon: "node" },
          { name: "Express", level: 80 },
          { name: "Python", level: 75, icon: "python" },
          { name: "MongoDB", level: 70, icon: "mongodb" },
          { name: "PostgreSQL", level: 65, icon: "postgresql" },
        ],
      },
      other: {
        title: "Other Skills",
        items: [
          { name: "Git", level: 85, icon: "git" },
          { name: "Docker", level: 70, icon: "docker" },
          { name: "AWS", level: 65, icon: "aws" },
          { name: "CI/CD", level: 60 },
          { name: "IoT", level: 75 },
        ],
      },
      cybersecurity: {
        title: "Cybersecurity",
        items: [
          { name: "Penetration Testing", level: 80 },
          { name: "Network Security", level: 75 },
          { name: "CTF", level: 85 },
          { name: "Ethical Hacking", level: 80 },
          { name: "Security Auditing", level: 70 },
        ],
      },
    },
  },

  experience: [
    {
      title: "Security Researcher",
      company: "Self-Employed",
      location: "Remote",
      startDate: "2025",
      endDate: "Present",
      description:
        "Conduct vulnerability research and responsible disclosure for university and Indonesian government CSIRT systems. Discovered and reported issues including Information Disclosure, XSS, LFI, and SQL Injection. Authored detailed technical reports and mitigation recommendations, and coordinated with security teams to ensure vulnerabilities were verified and responsibly patched.",
      technologies: [
        "XSS",
        "SQL Injection",
        "LFI",
        "Burp Suite",
        "Nmap",
        "Linux",
      ],
    },
    {
      title: "Cybersecurity Problem Setter",
      company: "IONIC 2025",
      location: "Surabaya, Indonesia",
      startDate: "2025-08",
      endDate: "2025-11",
      description:
        "Designed Jeopardy-style reverse engineering challenges for qualification rounds and developed a boot2root challenge leveraging CVE exploitation and common misconfigurations. Contributed to server and network setup, deployment, and security hardening to ensure a stable and secure competition environment.",
      technologies: [
        "Reverse Engineering",
        "CVE Exploitation",
        "Linux",
        "Networking",
      ],
    },
    {
      title: "Cybersecurity Community Lead",
      company: "TRI Cybersecurity Community (TCC)",
      location: "Surabaya, Indonesia",
      startDate: "2025-01",
      endDate: "Present",
      description:
        "Lead and organize CTF knowledge-sharing sessions focusing on cybersecurity and reverse engineering. Conduct training and live demos on topics such as binary analysis and web exploitation. Collaborate with members on vulnerability research and participate in external CTF competitions.",
      technologies: ["CTF", "Reverse Engineering", "Web Exploitation", "Linux"],
    },
  ],

  achievements: [
    {
      title: "Certificate of Appreciation – DIY Provincial Government",
      issuer: "DIY Provincial Government",
      date: "2025-11",
      description:
        "Recognized for ethically reporting a time-based Blind SQL Injection vulnerability on a public service system owned by the DIY Provincial Government.",
      url: "https://drive.google.com/file/d/1tG0YY4m9ZIshR1dTui5CvilfJtXlCOoh/view?usp=sharing",
    },
    {
      title: "Certificate of Appreciation – Airlangga University",
      issuer: "Universitas Airlangga (UNAIR)",
      date: "2025-10",
      description:
        "Awarded for responsible disclosure of an Information Disclosure vulnerability discovered on one of UNAIR’s subdomains.",
      url: "https://drive.google.com/file/d/1mM1Yi5wWFqwZ7bKI68LTwqTZ3tM0A41X/view?usp=sharing",
    },
    {
      title: "Finalist – Samsung Innovation Campus",
      issuer: "Samsung x Hacktiv8",
      date: "2025-05",
      description:
        "Selected as a finalist in the Samsung Innovation Campus program, focusing on IoT and AI prototyping with real-world problem solving and implementation.",
      url: "https://drive.google.com/file/d/1-RaecMu6ELzXctPS3S9i9eH1BjN_zyL_/view?usp=sharing",
    },
    {
      title: "Finalist – IDSECCONF 2024 CTF",
      issuer: "ITS Surabaya",
      date: "2024-11",
      description:
        "Achieved national finalist status in the IDSECCONF 2024 Capture the Flag competition, specializing in reverse engineering, binary exploitation, and web exploitation.",
      // no URL as requested
    },
    {
      title: "JuaraGCP Season 11",
      date: "2025-03",
      issuer: "Google Cloud",
      description:
        "Chosen as one of the participants of #JuaraGCP 2025, an exclusive Google Cloud program designed for Indonesian developers. Through this program, I gained access to Google Cloud Skills Boost, completing hands-on labs in AI/ML, Data, Security, and Cloud computing, while engaging with industry experts and a supportive community.",
    },
    {
      title: "Web Fundamentals Certification",
      issuer: "TryHackMe",
      date: "2025-09",
      description:
        "Completed training covering OWASP Top 10, SQL Injection, XSS, IDOR, File Inclusion, Race Conditions, and authentication bypass using hands-on labs.",
      url: "https://drive.google.com/file/d/1_3UZpYs7noj2uT-4xfPI-TynWtfu-YJc/view?usp=sharing",
    },
    {
      title: "CompTIA Pentest+ (TryHackMe Path)",
      issuer: "TryHackMe",
      date: "2025-11",
      description:
        "Completed pentesting pathway covering methodologies, Active Directory attacks, post-exploitation, Metasploit, reconnaissance, and pivoting.",
      url: "https://drive.google.com/file/d/1-J5amqHa9WLbVeT_hN0G-ylRvrpkIeSx/view?usp=sharing",
    },
  ],

  keywords: [
    "Muqsith Barru Pamungkas",
    "Full Stack Developer",
    "Portfolio",
    "Next.js",
    "TypeScript",
    "TailwindCSS",
    "shadcn/ui",
    "Framer Motion",
    "Machine Learning",
    "AI",
  ],
  ogImage: "/og.png",
  theme: {
    default: "dark",
    allowSystem: true,
  },

  links: {
    website: "https://muqsith.me",
    github: "https://github.com/indonumberone",
    linkedin: "https://www.linkedin.com/in/muqsith-barru/",
    email: "mailto:contact@01muqsith@gmail.com",
  },

  social: [
    {
      label: "GitHub",
      url: "https://github.com/indonumberone",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/muqsith-barru/",
      icon: "linkedin",
    },
    {
      label: "Website",
      url: "https://muqsith.me",
      icon: "globe",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/muqsithb/",
      icon: "instagram",
    },
  ],

  navigation: [
    { label: "Home", href: "/" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Achievements", href: "#achievements" },
    { label: "Projects", href: "#projects" },
    { label: "Posts", href: "#posts" },
    { label: "Contact", href: "#contact" },
  ],

  seo: {
    title: "Muqsith Barru Pamungkas",
    description:
      "Full Stack developer creating useful & delightful web experiences. Exploring ML & AI.",
    keywords: [
      "Muqsith Barru Pamungkas",
      "Full Stack Developer",
      "Portfolio",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "shadcn/ui",
      "Framer Motion",
      "Machine Learning",
      "Cybersecurity",
      "Web Development",
      "IoT",
      "Cloud Computing",
      "DevOps",
      "CTF Player",
      "Ethical Hacking",
      "Penetration Testing",
      "Bug Bounty",
      "AI",
    ],
    canonical: "https://muqsith.me",
    image: "/og.png",
    imageAlt:
      "Muqsith Barru Pamungkas - Cybersecurity Enthusiast, IoT Engineer",
    locale: "en-US",
    type: "website",
    robots: "index,follow",
    themeColor: "#0f172a",
  },
};

export function buildMetadata(overrides: Partial<Metadata> = {}): Metadata {
  const { seo, siteName, domain } = siteConfig;

  const base: Metadata = {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    authors: [{ name: siteConfig.author, url: siteConfig.links.website }],
    metadataBase: new URL(`https://${domain}`),
    alternates: { canonical: seo.canonical ?? `https://${domain}` },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: seo.canonical ?? `https://${domain}`,
      siteName,
      images: seo.image ? [seo.image] : [],
      type: seo.type ?? "website",
      locale: seo.locale,
    },
    other: {
      robots: seo.robots,
      "theme-color": seo.themeColor,
      "og:image:alt": seo.imageAlt,
    },
  } as Metadata;

  return { ...base, ...overrides };
}

export type { Metadata };
