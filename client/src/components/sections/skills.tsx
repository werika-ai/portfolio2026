import { motion } from "framer-motion";
import { Figma, PenTool, Code, Layout, Bot, Github, GitBranch, Image } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Skills() {
  const { t } = useLanguage();

  const skills = [
    {
      category: t.skills.categories.design,
      items: [
        { name: "Figma", icon: Figma },
        { name: "Photoshop", icon: Image },
        { name: "Illustrator", icon: PenTool }
      ]
    },
    {
      category: t.skills.categories.aiTools,
      items: [
        { name: "Figma Make", icon: Layout },
        { name: "Lovable", icon: Bot },
        { name: "V0", icon: Code }
      ]
    },
    {
      category: t.skills.categories.development,
      items: [
        { name: "HTML/SASS", icon: Code },
        { name: "React/TypeScript", icon: Code },
        { name: "Git/Github", icon: Github }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-accent mb-2 uppercase tracking-widest">{t.skills.eyebrow}</h2>
          <h3 className="text-3xl md:text-4xl font-bold">{t.skills.title}</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {skills.map((category, catIndex) => (
            <motion.div 
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.2 }}
            >
              <h4 className="text-xl font-bold mb-8 border-b pb-4">{category.category}</h4>
              <div className="space-y-4">
                {category.items.map((skill, index) => (
                  <div key={skill.name} className="group flex items-center p-3 bg-secondary/30 rounded-xl hover:bg-secondary transition-colors">
                    <div className="p-2 bg-white rounded-lg mr-3 text-muted-foreground group-hover:text-accent transition-colors shadow-sm">
                      <skill.icon size={20} />
                    </div>
                    <span className="font-medium text-lg">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
