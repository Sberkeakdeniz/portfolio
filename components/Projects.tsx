"use client"

import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "AI Integrated Filmpire Film Database",
      description: "A modern film database with a clean UI and a responsive design.You can use voice commands to search for movies, changing the theme of the website.",
      technologies: ["React.js"],
      link: "https://filmpireberkeakdeniz.netlify.app/",
      image: "/images/projects/filmpire.png"
    },
    {
      title: "Uber Clone App",
      description: "React native app with a futuristic design. You can order a car, and the car will come to you.",
      technologies: ["React Native", "Nativewind(TailwindCSS)", "Google Maps API"],
      link: "https://github.com/Sberkeakdeniz/SBA_Ryde",
      image: "/images/projects/uber-clone.jpg"
    },
    {
      title: "Carepulse patient management system",
      description: "A web-based patient management system for a hospital.",
      technologies: ["Next.js", "TailwindCSS", "Appwrite"],
      link: "#",
      image: "/images/projects/carepulse.jpg"
    },
    {
      title: "Student Internship Management System",
      description: "A java Desktop application for managing student internship forms.",
      technologies: ["Java Core", "Swing", "JDBC", "Threads", "SQLite", "Apache POI", "Socket Programming"],
      link: "https://github.com/Sberkeakdeniz/SE360",
      image: "/images/projects/internship.jpg"
    },
    {
      title: "Truth or Dare Mobile Game",
      description: "A mobile game with a clean UI and a responsive design. You can play with your friends at parties or play with your partner to spice up your relationship. In AppStore and Google Play Store soon.",
      technologies: ["React Native", "Nativewind(TailwindCSS)", "Expo"],
      link: "#",
      image: "/images/projects/truthordare.png"
    }
  ]

  return (
    <section id="projects" className="container py-24 sm:py-32">
      <motion.h2 
        className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card text-card-foreground border-secondary card-hover h-full flex flex-col">
              <div className="relative aspect-[3/2] w-full overflow-hidden rounded-t-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  priority={index < 2}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-primary">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full button-glow">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

