"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="container flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl mb-4">
          Hi, I'm <span className="gradient-text">Seralp Berke Akdeniz</span>
        </h1>
        <h2 className="text-2xl font-bold text-muted-foreground sm:text-3xl md:text-4xl lg:text-5xl mb-6">
          Full-Stack & Mobile Engineer
        </h2>
        <motion.p 
          className="mt-4 max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I build efficient, scalable, and user-friendly web and mobile applications. 
          From responsive websites to cutting-edge mobile apps, I bring ideas to life across platforms.
        </motion.p>
        <motion.div 
          className="mt-8 flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Button asChild size="lg" className="button-glow">
            <a href="#contact">Contact Me</a>
          </Button>
          <Button variant="outline" size="lg" asChild className="button-glow">
            <a href="#projects">View Projects</a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}

