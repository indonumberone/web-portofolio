"use client";

import { motion, useInView } from "motion/react";
import { siteConfig } from "@/config/site.config";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Coffee } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export function AboutContent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-16 bg-background">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative max-w-md mx-auto">
              {/* Background Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-2xl" />

              {/* Main Image */}
              <div className="relative aspect-square rounded-2xl overflow-hidden border-2 border-primary/20 shadow-xl">
                <Image
                  src={siteConfig.author_img}
                  alt={siteConfig.aboutContent.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="space-y-6 order-1 lg:order-2"
          >
            {/* Header */}
            <div className="space-y-4">
              <span className="text-primary text-sm font-semibold uppercase tracking-wide">
                About Me
              </span>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Hi, I&apos;m{" "}
                <span className="text-primary">
                  {siteConfig.aboutContent.name}
                </span>
              </h2>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>{siteConfig.aboutContent.body}</p>
            </div>

            {/* Quick Info */}
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Indonesia</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
