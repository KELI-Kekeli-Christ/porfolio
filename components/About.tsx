"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Users, Target, Code } from "lucide-react";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: Users,
      value: "600+",
      label: "Membres Codeurs Pro",
      color: "text-blue-400",
    },
    {
      icon: Brain,
      value: "Master 1",
      label: "Intelligence Artificielle",
      color: "text-purple-400",
    },
    {
      icon: Code,
      value: "10+",
      label: "Projets IA & Web",
      color: "text-green-400",
    },
    {
      icon: Target,
      value: "8+",
      label: "Certifications",
      color: "text-orange-400",
    },
  ];

  return (
    <section
      id="about"
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
            À <span className="text-gradient">propos</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-primary-400">
              Mon parcours
            </h3>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Développeur logiciel spécialisé en web et mobile, passionné par
              l'intelligence artificielle et l'innovation technologique.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
              Cofondateur de{" "}
              <span className="text-primary-400 font-semibold">
                Codeurs Pro
              </span>
              , une communauté de 600+ membres dédiée à l'excellence technique
              et au partage de savoir.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Mon ambition : approfondir mes compétences en IA pour développer
              des solutions concrètes liées aux défis technologiques
              contemporains.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all hover:scale-105"
              >
                <stat.icon
                  className={`${stat.color} mb-4`}
                  size={32}
                />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-primary-600/10 to-purple-600/10 p-8 rounded-2xl border border-primary-500/20"
        >
          <h4 className="text-2xl font-bold mb-4 text-center">
            Formation académique
          </h4>
          <div className="grid md:grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-primary-400 font-semibold text-lg mb-2">
                Master 1 en Intelligence Artificielle
              </div>
              <div className="text-gray-400">Université d'Avignon</div>
            </div>
            <div>
              <div className="text-primary-400 font-semibold text-lg mb-2">
                Licence en Génie Logiciel
              </div>
              <div className="text-gray-400">
                Université Catholique de l'Afrique de l'Ouest
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

