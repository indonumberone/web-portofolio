// Please note Some data Below are Just Placeholder for now due to active development
import type { Metadata } from "next";

export type SocialLink = {
  label: string;
  url: string;
  icon?: string; // name for icon library if needed later
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
  domain: "muqsith.com",
  author: "Muqsith Barru",
  author_img: "/img/profile.jpg",
  description:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  about:
    "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  aboutContent: {
    name: "Muqsith Barru Pamungkas",
    body: "I am a passionate Full Stack Developer and Cybersecurity Enthusiast with a knack for creating innovative web solutions. With a strong foundation in both frontend and backend technologies, I thrive on building seamless user experiences while ensuring robust security measures. My journey in tech is driven by curiosity and a commitment to continuous learning, allowing me to stay ahead in the ever-evolving landscape of web development and cybersecurity.",
  },

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
      title: "Senior Full Stack Developer",
      company: "Tech Solutions Inc.",
      location: "Jakarta, Indonesia",
      startDate: "2022-01",
      endDate: "Present",
      description:
        "Lead development of enterprise web applications using React, Next.js, and Node.js. Implemented CI/CD pipelines and improved application performance by 40%.",
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
    },
    {
      title: "Full Stack Developer",
      company: "Digital Innovations",
      location: "Surabaya, Indonesia",
      startDate: "2020-03",
      endDate: "2021-12",
      description:
        "Developed and maintained multiple client websites and applications. Created RESTful APIs and integrated third-party services.",
      technologies: ["JavaScript", "React", "Express", "MongoDB", "Docker"],
    },
    {
      title: "Junior Web Developer",
      company: "Creative Web Agency",
      location: "Bandung, Indonesia",
      startDate: "2018-06",
      endDate: "2020-02",
      description:
        "Built responsive websites for clients across various industries. Collaborated with designers to implement UI/UX improvements.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "WordPress", "MySQL"],
    },
  ],

  achievements: [
    {
      title: "1st Place - National Cybersecurity Championship",
      date: "2023-11",
      issuer: "Indonesia Cybersecurity Association",
      description:
        "Won first place in the annual national CTF competition, demonstrating expertise in web exploitation, cryptography, and reverse engineering.",
    },
    {
      title: "AWS Certified Solutions Architect",
      date: "2022-05",
      issuer: "Amazon Web Services",
      description:
        "Professional certification validating expertise in designing distributed systems on AWS.",
      url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    },
    {
      title: "Best Web Application Award",
      date: "2021-08",
      issuer: "Indonesia Digital Innovation Forum",
      description:
        "Received award for developing an innovative IoT monitoring dashboard that reduced operational costs by 30%.",
    },
    {
      title: "Open Source Contributor",
      issuer: "Various Projects",
      description:
        "Active contributor to several open-source projects including security tools and React component libraries.",
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
    website: "https://muqsith.com",
    github: "https://github.com/indonumberone",
    linkedin: "https://www.linkedin.com/feed/",
    email: "mailto:contact@muqsithbarrupamungkas@gmail.com",
  },

  social: [
    {
      label: "GitHub",
      url: "https://github.com/indonumberone",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com//",
      icon: "linkedin",
    },
    {
      label: "Website",
      url: "https://muqsith.com",
      icon: "globe",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/flyingcat121/",
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
    canonical: "https://muqsith.com",
    image: "/og.png",
    imageAlt:
      "Muqsith Barru Pamungkas - IoT ,Full Stack Developer, Cybersecurity Enthusiast",
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
