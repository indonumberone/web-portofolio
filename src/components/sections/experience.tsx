"use client";

import { motion } from "motion/react";
import { siteConfig } from "@/config/site.config";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building2 } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 bg-muted/30">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
            My Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A journey through my experiences, showcasing my growth, skills, and
            contributions in the tech industry.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Central Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-transparent hidden lg:block" />

          {/* Experience Items */}
          <div className="space-y-16">
            {siteConfig.experience.map((job, index) => {
              const isEven = index % 2 === 0;
              const isLeft = isEven;

              return (
                <motion.div
                  key={`${job.company}-${job.startDate}`}
                  initial={{
                    opacity: 0,
                    x: isLeft ? -100 : 100,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                    scale: 1,
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{
                    duration: 0.8,
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 100,
                  }}
                  className={`relative flex items-center ${
                    isLeft ? "lg:justify-start" : "lg:justify-end"
                  } justify-center`}
                >
                  {/* Timeline Dot - Always in center on desktop */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 z-20 hidden lg:block">
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.2 + 0.3,
                        type: "spring",
                        stiffness: 200,
                      }}
                      className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20 border-4 border-background"
                    >
                      <Building2 className="w-8 h-8 text-primary-foreground" />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full lg:w-5/12 ${
                      isLeft ? "lg:pr-16" : "lg:pl-16"
                    }`}
                  >
                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        rotateY: isLeft ? 2 : -2,
                      }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="relative bg-background/90 backdrop-blur-sm rounded-2xl p-6 border border-border/50 shadow-xl hover:shadow-2xl transition-all duration-500"
                    >
                      {/* Decorative elements */}
                      <div
                        className={`absolute top-0 ${
                          isLeft ? "right-0" : "left-0"
                        } w-24 h-24 bg-gradient-to-br from-primary/10 to-transparent ${
                          isLeft
                            ? "rounded-bl-3xl rounded-tr-2xl"
                            : "rounded-br-3xl rounded-tl-2xl"
                        }`}
                      />

                      {/* Arrow pointing to timeline dot on desktop */}
                      <div
                        className={`absolute top-8 ${
                          isLeft ? "-right-4" : "-left-4"
                        } hidden lg:block`}
                      >
                        <div
                          className={`w-0 h-0 border-t-8 border-b-8 border-transparent ${
                            isLeft
                              ? "border-l-8 border-l-background/90"
                              : "border-r-8 border-r-background/90"
                          }`}
                        />
                      </div>

                      {/* Mobile Timeline Dot */}
                      <div className="flex items-center gap-4 lg:hidden mb-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center shadow-lg shadow-primary/20">
                          <Building2 className="w-6 h-6 text-primary-foreground" />
                        </div>
                      </div>

                      {/* Header */}
                      <div className="space-y-3 mb-4">
                        <div className="flex flex-col gap-2">
                          <motion.h3
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.4 }}
                            className="text-xl font-bold text-primary"
                          >
                            {job.title}
                          </motion.h3>
                          <motion.div
                            initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 + 0.5 }}
                          >
                            <Badge
                              variant="outline"
                              className="bg-primary/5 border-primary/20 text-primary text-xs w-fit"
                            >
                              <Calendar className="w-3 h-3 mr-1" />
                              {job.startDate} - {job.endDate}
                            </Badge>
                          </motion.div>
                        </div>

                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.6 }}
                          className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground"
                        >
                          <div className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            <span className="font-semibold">{job.company}</span>
                          </div>
                          {job.location && (
                            <>
                              <span className="hidden sm:inline text-muted-foreground/50">
                                •
                              </span>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                <span>{job.location}</span>
                              </div>
                            </>
                          )}
                        </motion.div>
                      </div>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.7 }}
                        className="text-muted-foreground mb-4 leading-relaxed"
                      >
                        {job.description}
                      </motion.p>

                      {/* Technologies */}
                      {job.technologies && job.technologies.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + 0.8 }}
                          className="space-y-3"
                        >
                          <h4 className="text-sm font-medium text-foreground">
                            Technologies Used:
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech, techIndex) => (
                              <motion.div
                                key={tech}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: index * 0.2 + 0.9 + techIndex * 0.1,
                                  type: "spring",
                                  stiffness: 200,
                                }}
                              >
                                <Badge
                                  variant="secondary"
                                  className="text-xs bg-muted/50 hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                                >
                                  {tech}
                                </Badge>
                              </motion.div>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Timeline End */}
          <motion.div
            initial={{ opacity: 0, scale: 0, rotate: -90 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: siteConfig.experience.length * 0.2,
              type: "spring",
              stiffness: 150,
            }}
            className="relative flex items-center justify-center mt-16"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center border-2 border-primary/30 shadow-lg">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-primary/60"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
