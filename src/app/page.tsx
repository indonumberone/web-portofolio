import { HeroSection } from "@/components/sections/hero";
import { AboutContent } from "@/components/sections/about-content";
import { ProjectsGrid } from "@/components/sections/projects-grid";
import { PostsGrid } from "@/components/sections/posts-grid";
import { ContactCard } from "@/components/sections/contact-card";
import { SkillsSection } from "@/components/sections/skills";
import { ExperienceSection } from "@/components/sections/experience";
import { AchievementsSection } from "@/components/sections/achievements";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section id="about" className="bg-muted/30">
        <AboutContent />
      </section>

      <section id="skills" className="py-16 bg-background">
        {/* Skills Section */}
        <SkillsSection />
      </section>
      <section id="experience" className="py-16 bg-muted/30">
        {/* Experience Section */}
        <ExperienceSection />
      </section>
      <section id="achievements" className="py-16 bg-background">
        {/* Achievements Section */}
        <AchievementsSection />
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
              Featured Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A collection of projects that showcase my skills in development
            </p>
          </div>
          <Suspense fallback={<ProjectsLoading />}>
            <ProjectsGrid />
          </Suspense>
        </div>
      </section>

      {/* Posts Section */}
      <section id="posts" className="py-16 bg-muted/30">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
              Latest Articles
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              My thoughts on technology and development
            </p>
          </div>
          <Suspense fallback={<PostsLoading />}>
            <PostsGrid />
          </Suspense>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together
            </p>
          </div>
          <ContactCard />
        </div>
      </section>
    </main>
  );
}

function ProjectsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-64 bg-muted/30 rounded-lg animate-pulse" />
      ))}
    </div>
  );
}

function PostsLoading() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-80 bg-muted/30 rounded-lg animate-pulse" />
      ))}
    </div>
  );
}
