"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site.config";
import Image from "next/image";

const skillIcons: Record<string, string> = {
  react: "/logo/reactjs-svgrepo-com.svg",
  "next.js": "/logo/nextjs-fill-svgrepo-com.svg",
  typescript: "/logo/typescript-official-svgrepo-com.svg",
  tailwindcss: "/logo/tailwind-svgrepo-com.svg",
  "html/css": "/logo/css-3-svgrepo-com.svg",
  "node.js": "/logo/nodejs-1-logo-svgrepo-com.svg",
  express: "/logo/express-svgrepo-com.svg",
  python: "/logo/python-svgrepo-com.svg",
  mongodb: "/logo/mongodb-logo-svgrepo-com.svg",
  postgresql: "/logo/postgresql-svgrepo-com.svg",
  git: "/logo/git-svgrepo-com.svg",
  docker: "/logo/docker-svgrepo-com.svg",
  aws: "/logo/gcp-svgrepo-com.svg", // Menggunakan GCP sebagai cloud alternative
  "ci/cd": "/logo/git-svgrepo-com.svg", // Fallback ke git
  iot: "/logo/arduino-svgrepo-com.svg",
  "penetration testing": "/logo/burpsuite-security-software-svgrepo-com.svg",
  "network security": "/logo/linux-svgrepo-com.svg",
  ctf: "/logo/linux-svgrepo-com.svg", // Fallback ke linux
  "ethical hacking": "/logo/linux-svgrepo-com.svg", // Fallback ke linux
  "security auditing": "/logo/burpsuite-security-software-svgrepo-com.svg",
  // Additional skills yang mungkin ada
  javascript: "/logo/javascript-svgrepo-com.svg",
  java: "/logo/java-logo-svgrepo-com.svg",
  firebase: "/logo/firebase-svgrepo-com.svg",
  flutter: "/logo/flutter-svgrepo-com.svg",
  nginx: "/logo/nginx-svgrepo-com.svg",
  rust: "/logo/rust-svgrepo-com.svg",
  html: "/logo/html-5-svgrepo-com.svg",
  linux: "/logo/linux-svgrepo-com.svg",
};

// Get all skills as a flat array for the marquee
const allSkills = Object.values(siteConfig.skills.categories).flatMap(
  (category) =>
    category.items.map((skill) => ({
      name: skill.name,
      icon:
        skillIcons[skill.name.toLowerCase()] ||
        skillIcons[skill.icon?.toLowerCase() || ""] ||
        null,
    }))
);

// Duplicate skills for seamless loop
const marqueeSkills = [...allSkills, ...allSkills];

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I&apos;ve worked with throughout my career
          </p>
        </motion.div>

        {/* Skills Marquee - Logo Only */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />

          {/* Marquee container */}
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-12 items-center min-w-max"
              animate={{
                x: [0, -60 * allSkills.length],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 40,
                  ease: "linear",
                },
              }}
            >
              {marqueeSkills.map((skill, index) => (
                <div
                  key={`${skill.name}-${index}`}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className="flex items-center justify-center p-6 rounded-xl transition-all duration-300 hover:bg-muted/30 hover:scale-110">
                    {skill.icon ? (
                      <div className="relative w-16 h-16 transition-transform duration-300 group-hover:scale-110">
                        <Image
                          src={skill.icon}
                          alt={skill.name}
                          width={64}
                          height={64}
                          className="object-contain filter transition-all duration-300 group-hover:brightness-110 dark:brightness-90 dark:group-hover:brightness-100"
                        />
                      </div>
                    ) : (
                      <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/10">
                        <span className="text-lg font-bold text-primary">
                          {skill.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
