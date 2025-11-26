import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import financeImg from "@assets/generated_images/finance_dashboard_ui_mockup.png";
import travelImg from "@assets/generated_images/travel_app_ui_mockup.png";
import ecommerceImg from "@assets/generated_images/e-commerce_ui_mockup.png";
import { useState } from "react";

const categories = ["All", "UI/UX", "Motion", "Web Design"];

const projects = [
  {
    id: 1,
    title: "FinTech Dashboard",
    category: "UI/UX",
    image: financeImg,
    size: "large", // spans 2 columns
    tags: ["Figma", "React", "Chart.js"]
  },
  {
    id: 2,
    title: "Wanderlust App",
    category: "Mobile",
    image: travelImg,
    size: "small",
    tags: ["iOS", "SwiftUI", "Prototyping"]
  },
  {
    id: 3,
    title: "Vogue E-Commerce",
    category: "Web Design",
    image: ecommerceImg,
    size: "small",
    tags: ["Shopify", "Design System", "Conversion"]
  },
  {
    id: 4,
    title: "Neon Banking",
    category: "UI/UX",
    image: financeImg, // Reusing for mockup
    size: "small",
    tags: ["App Design", "Dark Mode"]
  },
  {
    id: 5,
    title: "Urban Fashion",
    category: "Web Design",
    image: ecommerceImg, // Reusing for mockup
    size: "large",
    tags: ["Webflow", "Animation", "Branding"]
  }
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category.includes(activeCategory) || p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-sm font-mono text-accent mb-2 uppercase tracking-widest">Selected Works</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Featured Projects</h3>
          </div>
          
          <div className="flex space-x-2 mt-6 md:mt-0 overflow-x-auto pb-2 md:pb-0">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm transition-all whitespace-nowrap ${
                  activeCategory === cat 
                    ? "bg-foreground text-background" 
                    : "bg-white text-muted-foreground hover:bg-white/80 border border-transparent hover:border-black/5"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[400px]">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer ${
                project.size === "large" ? "md:col-span-2" : "md:col-span-1"
              }`}
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
                    View Case Study <ArrowUpRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
