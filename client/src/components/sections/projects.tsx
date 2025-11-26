import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { useLanguage } from "@/lib/i18n";
import { projects } from "@/lib/data";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-mono text-accent mb-2 uppercase tracking-widest">{t.projects.eyebrow}</h2>
            <h3 className="text-3xl md:text-4xl font-bold">{t.projects.title}</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link key={project.id} href={`/project/${project.id}`}>
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer h-[400px] block"
              >
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                  <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="text-white text-2xl font-bold mb-2">{project.title}</h4>
                    <p className="text-white/80 mb-4">{project.category}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs text-white/90 bg-white/20 px-2 py-1 rounded backdrop-blur-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button className="flex items-center text-white font-medium border-b border-white pb-1 hover:text-accent hover:border-accent transition-colors">
                      {t.projects.viewCase} <ArrowUpRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
