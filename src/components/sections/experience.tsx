"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site.config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section className="py-16 bg-muted/30">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            My journey and roles in the tech industry
          </p>
        </motion.div>

        <div className="space-y-8">
          {siteConfig.experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.startDate}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="relative bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-0 overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-primary via-primary/50 to-transparent" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-bl-full" />

                <CardHeader>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between flex-wrap gap-2">
                      <CardTitle className="text-xl font-bold text-primary">
                        {job.title}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="bg-primary/5 border-primary/20"
                      >
                        {job.startDate} - {job.endDate}
                      </Badge>
                    </div>
                    <div className="flex items-center text-muted-foreground gap-2">
                      <span className="font-semibold">{job.company}</span>
                      {job.location && (
                        <>
                          <span className="text-muted-foreground/50">•</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{job.location}</span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{job.description}</p>

                  {job.technologies && job.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs bg-muted/50 hover:bg-muted/70 transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}

          {/* Timeline connector */}
          <div className="hidden md:block relative h-16 w-px mx-auto">
            <div className="absolute inset-0 bg-gradient-to-b from-border to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
