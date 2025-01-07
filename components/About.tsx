"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="container py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="grid gap-12 md:grid-cols-2 md:gap-16 items-center"
      >
        <motion.div 
          className="flex items-center justify-center order-1 md:order-2"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary animate-float">
            <Image
              src="/profile.png"
              alt="Seralp Berke Akdeniz"
              fill
              priority
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="order-2 md:order-1">
          <motion.h2 
            className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            About Me
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            viewport={{ once: true }}
          >
            I'm a passionate full-stack engineer with 3+ years of experience in web and mobile development. 
            I specialize in building robust and scalable applications using modern technologies for both web and mobile platforms. 
          </motion.p>
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            viewport={{ once: true }}
          >
            My expertise spans across Next.js and React for web, React Native for cross-platform mobile apps, and SwiftUI for native iOS development.
            I have a strong background in building backend systems and APIs using Java(Core, Spring Boot), Node.js, Express.js, Firebase, Supabase, Appwrite, MySQL, PostgreSQL, MongoDB and more.
          </motion.p>
          <motion.p 
            className="text-muted-foreground text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
          >
            When I'm not coding, you can find me exploring new technologies (AI related news are my favorite these days), 
            contributing to open-source projects, playing my violin (I'm a professional violinist, have been playing for 17 years) 
            or enjoying gym activities to maintain a healthy work-life balance.
          </motion.p>
        </div>
      </motion.div>
    </section>
  )
}

