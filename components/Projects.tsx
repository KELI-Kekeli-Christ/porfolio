"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Brain, Code, ExternalLink, Github } from "lucide-react";

const aiProjects = [
  {
    title: "Book Recommendation Engine",
    description: "Système de recommandation de livres utilisant l'algorithme KNN",
    technologies: ["Python", "KNN", "Machine Learning"],
    icon: Brain,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Cat and Dog Image Classifier",
    description: "Classification d'images de chats et chiens utilisant un réseau de neurones convolutif (CNN)",
    technologies: ["Python", "CNN", "TensorFlow", "Deep Learning"],
    icon: Brain,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Agent IA : Scraping LinkedIn",
    description: "Agent IA pour le scraping de profils LinkedIn et offres d'emploi",
    technologies: ["Python", "IA", "Web Scraping", "Automation"],
    icon: Brain,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "SysCpu: Monitoring & Prediction",
    description: "Gestion de la mémoire et du CPU avec alertes par mail/Telegram et prédiction ML des valeurs futures",
    technologies: ["Python", "Machine Learning", "Monitoring", "Telegram API"],
    icon: Brain,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Chatbot CV & Lettres de motivation",
    description: "Chatbot de génération de CV et lettres de motivation utilisant l'API Gemini",
    technologies: ["Python", "Gemini API", "NLP", "Chatbot"],
    icon: Brain,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Analyse de données de ventes",
    description: "Analyse approfondie de données de ventes avec visualisations et insights",
    technologies: ["Python", "Data Analysis", "Pandas", "Visualization"],
    icon: Brain,
    color: "from-indigo-500 to-blue-500",
  },
];

const devProjects = [
  {
    title: "Réseau social étudiant",
    description: "Réseau social dédié aux étudiants de mon université avec Express et Next.js",
    technologies: ["Express.js", "Next.js", "React", "Node.js"],
    icon: Code,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Clone de eBay",
    description: "Plateforme de ventes aux enchères (projet CS50W – Harvard)",
    technologies: ["Django", "Python", "JavaScript", "HTML/CSS"],
    icon: Code,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Site gestion auto-école",
    description: "Système complet de gestion : inscriptions, plannings et paiements",
    technologies: ["Web Development", "Database", "Backend"],
    icon: Code,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Site gestion biens locatifs",
    description: "Plateforme de gestion de biens locatifs avec suivi des locations",
    technologies: ["Web Development", "Database Management"],
    icon: Code,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "App mobile pharmaceutique",
    description: "Application mobile pour commandes et livraisons pharmaceutiques",
    technologies: ["Flutter", "Mobile Development", "API Integration"],
    icon: Code,
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Gestion d'hôtel",
    description: "Application desktop (Java) et web (Laravel et Vue) pour la gestion d'hôtel",
    technologies: ["Java", "Laravel", "Vue.js", "Desktop & Web"],
    icon: Code,
    color: "from-indigo-500 to-blue-500",
  },
  {
    title: "Scripts Fedora sécurité",
    description: "Scripts bash pour l'installation d'outils de sécurité sur Fedora",
    technologies: ["Bash", "Linux", "Security Tools", "Automation"],
    icon: Code,
    color: "from-red-500 to-pink-500",
  },
  {
    title: "Site de vote en temps réel",
    description: "Plateforme de vote en temps réel avec mise à jour instantanée",
    technologies: ["Real-time", "Web Development", "WebSocket"],
    icon: Code,
    color: "from-teal-500 to-cyan-500",
  },
  {
    title: "Mise en place OpenStack",
    description: "Configuration et déploiement d'une infrastructure cloud OpenStack",
    technologies: ["OpenStack", "Cloud Computing", "Infrastructure"],
    icon: Code,
    color: "from-gray-500 to-slate-500",
  },
];

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={ref}
      className="section-padding bg-gray-950"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Mes <span className="text-gradient">projets</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto mb-8" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Des projets innovants alliant Intelligence Artificielle et développement
          </p>
        </motion.div>

        {/* AI Projects Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <Brain className="text-purple-400" size={32} />
            <span>Projets d'Intelligence Artificielle</span>
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aiProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all hover:scale-105 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}
                >
                  <project.icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2 text-primary-400">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Development Projects Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl font-bold mb-8 flex items-center gap-3"
          >
            <Code className="text-blue-400" size={32} />
            <span>Projets de Développement</span>
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {devProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="group bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-primary-500/50 transition-all hover:scale-105 cursor-pointer"
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center mb-4`}
                >
                  <project.icon className="text-white" size={24} />
                </div>
                <h4 className="text-xl font-bold mb-2 text-primary-400">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded border border-gray-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

