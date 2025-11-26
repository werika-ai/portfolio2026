import { motion } from "framer-motion";
import { Figma, PenTool, Code, Layout, Smartphone, Video } from "lucide-react";

const skills = [
  {
    category: "Design",
    items: [
      { name: "Figma", icon: Figma, level: 95 },
      { name: "Adobe XD", icon: Layout, level: 85 },
      { name: "Sketch", icon: PenTool, level: 80 }
    ]
  },
  {
    category: "Motion",
    items: [
      { name: "After Effects", icon: Video, level: 90 },
      { name: "Principle", icon: Smartphone, level: 75 },
      { name: "Lottie", icon: Code, level: 85 }
    ]
  },
  {
    category: "Development",
    items: [
      { name: "HTML/CSS", icon: Code, level: 95 },
      { name: "React/Tailwind", icon: Code, level: 80 },
      { name: "Framer", icon: Layout, level: 90 }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-accent mb-2 uppercase tracking-widest">Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold">Tools & Technologies</h3>
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
              <div className="space-y-8">
                {category.items.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-secondary rounded-lg mr-3 text-muted-foreground group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                        <skill.icon size={20} />
                      </div>
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-foreground group-hover:bg-accent transition-colors"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      />
                    </div>
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
