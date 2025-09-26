"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site.config";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Award, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";

export function AchievementsSection() {
  return (
    <section className="py-16 bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
            Achievements & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Recognition, certifications, and milestones from my professional
            journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="group h-full flex flex-col bg-gradient-to-br from-background/80 to-background/40 backdrop-blur-sm border-0 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <CardHeader className="relative pb-2">
                  <div className="flex items-center justify-between mb-2">
                    <Award className="h-5 w-5 text-primary" />
                    {achievement.date && (
                      <Badge
                        variant="outline"
                        className="text-xs bg-background/80 backdrop-blur-sm"
                      >
                        <Calendar className="h-3 w-3 mr-1" />
                        {achievement.date}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {achievement.title}
                  </CardTitle>
                  {achievement.issuer && (
                    <p className="text-sm text-muted-foreground">
                      Issued by {achievement.issuer}
                    </p>
                  )}
                </CardHeader>

                <CardContent className="flex-1 flex flex-col justify-between space-y-4">
                  {achievement.description && (
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  )}

                  {achievement.url && (
                    <div className="pt-2 mt-auto">
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full group"
                      >
                        <Link
                          href={achievement.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          View Certificate
                          <ExternalLink className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
