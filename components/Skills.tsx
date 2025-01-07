"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

export default function Skills() {
  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Java", "Swing", "Spring Boot",
    "Express", "MongoDB", "SQL", "Git", "AWS", "Docker", "Appwrite", "Supabase", "Firebase",
    "React Native", "SwiftUI", "iOS Development", "Cross Platform Development", "Web Development"
  ]

  return (
    <section id="skills" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <motion.h2 
          className="text-3xl font-bold tracking-tight sm:text-4xl mb-4 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          Skills
        </motion.h2>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Badge variant="outline" className="text-lg py-1 px-2 bg-secondary text-secondary-foreground hover:bg-secondary/80">
                {skill}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

