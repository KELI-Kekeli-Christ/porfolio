"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden section-padding pt-32"
    >
      {/* Animated Background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(59, 130, 246, 0.3), transparent 50%)`,
        }}
      />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-500/10 text-primary-400 text-sm font-medium border border-primary-500/20">
              Développeur IA & Software Engineer
            </span>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-gradient">KELI Kekeli Christ</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed"
          >
            Spécialisé en{" "}
            <span className="text-primary-400 font-semibold">
              Intelligence Artificielle
            </span>{" "}
            et développement web/mobile. Cofondateur de{" "}
            <span className="text-primary-400 font-semibold">
              Codeurs Pro
            </span>{" "}
            (600+ membres)
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto"
          >
            Master 1 en Intelligence Artificielle — Université d'Avignon
            <br />
            Passionné par l'innovation technologique et le développement de
            solutions IA concrètes
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-6 mb-12"
          >
            <Link
              href="mailto:christdev9@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-all hover:scale-105"
            >
              <Mail size={20} />
              Contactez-moi
            </Link>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-all hover:scale-105 border border-gray-700"
            >
              <Github size={20} />
              GitHub
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-all hover:scale-105 border border-gray-700"
            >
              <Linkedin size={20} />
              LinkedIn
            </Link>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-sm text-gray-500">Découvrez mon travail</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <ArrowDown className="text-primary-400" size={24} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

