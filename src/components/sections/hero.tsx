"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site.config";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Announcement,
  AnnouncementTitle,
  AnnouncementTag,
} from "@/components/ui/announcement";
import { ArrowRight, Download, ArrowUpRightIcon } from "lucide-react";
import { TypingMotion } from "./TypingMotion";
import Image from "next/image";

export function HeroSection() {
  // Array minat/interests untuk typing animation
  const interests = [
    "Muqsith",
    "IoT Developer",
    "Full Stack Developer",
    "Cybersecurity Enthusiast",
  ];

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden z-10"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 pointer-events-none select-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] pointer-events-none select-none" />

      <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left order-2 lg:order-1"
          >
            {/* Announcement Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex justify-center lg:justify-start"
            >
              <Announcement>
                <AnnouncementTag>New</AnnouncementTag>
                <AnnouncementTitle>
                  Portfolio 2025 is here
                  <ArrowUpRightIcon className="ml-1 h-3 w-3" />
                </AnnouncementTitle>
              </Announcement>
            </motion.div>

            {/* Main Heading */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight"
              >
                Hello, I&apos;m{" "}
              </motion.h1>

              {/* Typing Animation */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-muted-foreground"
              >
                {" "}
                <span className="text-primary font-bold">
                  <TypingMotion roles={interests} />
                </span>
              </motion.div>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-base sm:text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Building secure, scalable solutions and exploring the frontiers of
              technology. From web applications to cybersecurity research, I
              turn ideas into reality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                asChild
                size="lg"
                className="group bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 text-base font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Link
                  href="/cv/Muqsith_Barru_CV.pdf"
                  download="Muqsith_Barru_CV.pdf"
                >
                  <Download className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />
                  Download CV
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                size="lg"
                className="group border-border/60 bg-background/50 backdrop-blur-sm px-8 py-4 text-base font-medium hover:bg-background/80 hover:border-primary/50 transition-all duration-300 w-full sm:w-auto"
              >
                <Link href={`${siteConfig.links.email}`}>
                  Get in Touch
                  <ArrowUpRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Logo/Avatar */}
          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Avatar/Logo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                {/* Animated Background Circles */}
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-xl"
                />

                <motion.div
                  animate={{
                    rotate: -360,
                    scale: [1.1, 1, 1.1],
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute inset-4 rounded-full bg-gradient-to-l from-secondary/30 via-primary/30 to-secondary/30 blur-lg"
                />

                {/* Profile Image */}
                <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl bg-background">
                  <Image
                    src={siteConfig.author_img}
                    alt="Muqsith Barru Pamungkas"
                    width={400}
                    height={400}
                    className="object-cover w-full h-full"
                    priority
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
                </div>

                {/* Floating Elements */}
                <motion.div
                  animate={{
                    y: [-10, 10, -10],
                    rotate: [0, 5, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-primary to-primary/60 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-2xl">💻</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [10, -10, 10],
                    rotate: [0, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-secondary to-secondary/60 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-lg">🔒</span>
                </motion.div>

                <motion.div
                  animate={{
                    y: [-5, 15, -5],
                    x: [-5, 5, -5],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                  }}
                  className="absolute top-8 -left-8 w-10 h-10 bg-gradient-to-r from-accent to-accent/60 rounded-full flex items-center justify-center shadow-lg"
                >
                  <span className="text-sm">⚡</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Floating Elements */}
      <div className="absolute left-1/4 top-1/4 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none select-none" />
      <div className="absolute right-1/4 bottom-1/4 h-40 w-40 sm:h-64 sm:w-64 rounded-full bg-secondary/10 blur-3xl pointer-events-none select-none" />
    </motion.section>
  );
}
