"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skillCategories = [
  {
    title: "Langages de programmation",
    skills: [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript",
      "C/C++",
      "PHP",
      "HTML/CSS",
      "Bash",
      "Flutter",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Frameworks & Bibliothèques",
    skills: [
      "Django",
      "Next.js",
      "TensorFlow",
      "Laravel",
      "Spring Boot",
      "Nest.js",
      "Express.js",
      "React",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Bases de données",
    skills: [
      "MySQL",
      "PostgreSQL",
      "Oracle",
      "MariaDB",
      "MongoDB",
    ],
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Data & Intelligence Artificielle",
    skills: [
      "Excel",
      "R Studio",
      "DataGrip",
      "MATLAB",
      "Machine Learning",
      "Deep Learning",
      "IA générative",
    ],
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Outils & Méthodologies",
    skills: [
      "Git",
      "Agile",
      "Postman",
      "Docker",
      "Linux",
      "Leadership",
      "Communication",
    ],
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Langues",
    skills: ["Français (C2)", "Anglais (B1)"],
    color: "from-indigo-500 to-blue-500",
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="section-padding bg-gray-900"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Compétences <span className="text-gradient">techniques</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Un éventail de technologies maîtrisées pour créer des solutions
            innovantes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all hover:scale-105"
            >
              <h3
                className={`text-xl font-bold mb-4 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
              >
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      duration: 0.3,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    className="px-3 py-1.5 bg-gray-700/50 rounded-full text-sm text-gray-300 hover:bg-primary-500/20 hover:text-primary-400 transition-all cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

