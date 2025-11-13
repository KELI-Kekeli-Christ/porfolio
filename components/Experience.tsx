"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Data Analyste",
    company: "Yas Togo",
    location: "Togo",
    period: "Août 2025 (3 mois)",
    description: [
      "Analyse, nettoyage et optimisation des données SQL",
      "Administration PostgreSQL et automatisation des rapports",
    ],
    technologies: ["PostgreSQL", "SQL", "Data Analysis"],
    color: "border-blue-500",
  },
  {
    title: "Développeur IA",
    company: "New Brain Factory",
    location: "Lomé, Togo",
    period: "Avril–Juillet 2025",
    description: [
      "Conception de workflows d'automatisation et agents IA",
      "Chatbots de scrapping LinkedIn, d'emploi et d'informations publiques",
    ],
    technologies: ["Python", "IA", "Chatbots", "Web Scraping"],
    color: "border-purple-500",
  },
  {
    title: "Développeur Web",
    company: "La Meute du Digital",
    location: "Dakar, Sénégal",
    period: "Avril–Juillet 2025",
    description: [
      "Développement de sites WordPress et optimisation des performances",
      "Intégration de bases de données MariaDB et MySQL",
    ],
    technologies: ["WordPress", "MariaDB", "MySQL", "PHP"],
    color: "border-green-500",
  },
  {
    title: "Développeur Backend",
    company: "US & YOU LLC",
    location: "Lomé, Togo",
    period: "Juil–Oct 2024",
    description: [
      "Développement d'API REST avec Spring Boot et Nest.js",
      "Intégration de PostgreSQL et MariaDB pour applications web/mobiles",
    ],
    technologies: ["Spring Boot", "Nest.js", "PostgreSQL", "MariaDB", "REST API"],
    color: "border-orange-500",
  },
  {
    title: "Programmeur Python",
    company: "TDS Avenue Codforge",
    location: "Inde",
    period: "Juil–Août 2024",
    description: [
      "Développement d'applications de gestion de tâches et de contacts",
    ],
    technologies: ["Python", "Application Development"],
    color: "border-yellow-500",
  },
  {
    title: "Programmeur Python",
    company: "CodSoft",
    location: "Inde",
    period: "Juillet 2024",
    description: [
      "Création d'applications Todo et générateurs de mots de passe en Python",
    ],
    technologies: ["Python", "Application Development"],
    color: "border-red-500",
  },
  {
    title: "Freelance",
    company: "BASILEIA",
    location: "Remote",
    period: "Sept 2024–Janv 2025",
    description: [
      "Site de gestion d'auto-école : inscriptions, plannings et paiements",
    ],
    technologies: ["Web Development", "Database Management"],
    color: "border-indigo-500",
  },
];

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-padding bg-gradient-to-b from-gray-900 to-gray-950"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Expériences <span className="text-gradient">professionnelles</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8" />
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-primary-400 to-primary-500 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-start ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-950 z-10" />

                <div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                >
                  <div
                    className={`bg-gray-800/50 p-6 rounded-xl border-l-4 ${exp.color} hover:bg-gray-800 transition-all hover:scale-105`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary-400 mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-400 mb-2">
                          <Briefcase size={16} />
                          <span className="font-semibold">{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            {exp.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            {exp.period}
                          </div>
                        </div>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-gray-300 flex items-start gap-2"
                        >
                          <span className="text-primary-400 mt-1.5">▸</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-primary-500/10 text-primary-400 text-xs rounded border border-primary-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

