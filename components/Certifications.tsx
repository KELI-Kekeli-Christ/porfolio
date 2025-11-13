"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Award, Calendar, GraduationCap } from "lucide-react";

const certifications = {
  ai: [
    {
      title: "Supervised Machine Learning: Regression and Classification",
      issuer: "Stanford University",
      date: "2024",
      icon: GraduationCap,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "AI Programming with Python",
      issuer: "Udacity",
      date: "Mars 2025",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Specialization Google Data Analytics",
      issuer: "Google",
      date: "Oct 2024",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Mining Quality Prediction Using Machine & Deep Learning",
      issuer: "Coursera",
      date: "Juil 2025",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Supervised Machine Learning: Regression & Classification",
      issuer: "DeepLearning.AI",
      date: "Avr 2024",
      icon: GraduationCap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Comprendre les bases de l'Intelligence Artificielle",
      issuer: "Microsoft",
      date: "Mai 2023",
      icon: GraduationCap,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "Introduction à R pour les Data Scientists",
      issuer: "OpenClassrooms",
      date: "2024",
      icon: GraduationCap,
      color: "from-teal-500 to-cyan-500",
    },
    {
      title: "Évaluer les performances d'un modèle de Machine Learning",
      issuer: "OpenClassrooms",
      date: "Sept 2024",
      icon: GraduationCap,
      color: "from-pink-500 to-rose-500",
    },
  ],
  development: [
    {
      title: "Introduction à la technologie (CS50T)",
      issuer: "Harvard University",
      date: "Oct 2023",
      icon: GraduationCap,
      color: "from-red-500 to-orange-500",
    },
    {
      title: "Bases UX Design",
      issuer: "Google",
      date: "Août 2024",
      icon: GraduationCap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Introduction à Scratch (CS50S)",
      issuer: "Harvard University",
      date: "2024",
      icon: GraduationCap,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Git et contrôle de version",
      issuer: "OpenClassrooms",
      date: "Août 2023",
      icon: GraduationCap,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Introduction à Python, SQL, HTML et CSS",
      issuer: "OpenClassrooms",
      date: "2022",
      icon: GraduationCap,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Introduction à Postman",
      issuer: "Postman",
      date: "2024",
      icon: GraduationCap,
      color: "from-indigo-500 to-blue-500",
    },
    {
      title: "La modélisation de données relationnelles",
      issuer: "Microsoft Learn",
      date: "2023",
      icon: GraduationCap,
      color: "from-teal-500 to-cyan-500",
    },
  ],
};

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="certifications"
      ref={ref}
      className="section-padding bg-gradient-to-b from-gray-950 to-gray-900"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un parcours d'apprentissage continu dans l'IA, le Data et le développement
          </p>
        </motion.div>

        {/* AI Certifications */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold mb-8 flex items-center gap-3 text-purple-400"
          >
            <Award size={28} />
            <span>Certifications IA & Data</span>
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.ai.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all hover:scale-105 group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <cert.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2 text-primary-400">
                  {cert.title}
                </h4>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <span>{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development Certifications */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold mb-8 flex items-center gap-3 text-blue-400"
          >
            <Award size={28} />
            <span>Autres Certifications Développement</span>
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.development.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all hover:scale-105 group"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cert.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <cert.icon className="text-white" size={24} />
                </div>
                <h4 className="text-lg font-bold mb-2 text-primary-400">
                  {cert.title}
                </h4>
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                  <span>{cert.issuer}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-xs">
                  <Calendar size={14} />
                  <span>{cert.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

