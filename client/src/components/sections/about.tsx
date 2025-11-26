import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@assets/generated_images/professional_designer_avatar.png";

export default function About() {
  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-16">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-2/5"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent translate-x-4 translate-y-4 rounded-2xl" />
              <img 
                src={avatarImage} 
                alt="Alex Moreno Portrait" 
                className="relative rounded-2xl w-full shadow-lg grayscale hover:grayscale-0 transition-all duration-500 z-10"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-3/5"
          >
            <h2 className="text-sm font-mono text-accent mb-2 uppercase tracking-widest">About Me</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Design with purpose and passion</h3>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Hi, I'm Alex Moreno. With over 5 years of experience in digital design, I've helped startups and 
                established brands create meaningful connections with their users through clean, intuitive interfaces 
                and engaging motion graphics.
              </p>
              <p>
                My philosophy is simple: Design should not only look good but work seamlessly. I believe in 
                minimalism as a tool for clarity, removing the unnecessary to focus on what truly matters.
              </p>
              <p>
                When I'm not pixel-pushing in Figma or keyframing in After Effects, you can find me exploring 
                architectural photography or experimenting with creative coding.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button className="rounded-full px-6 gap-2">
                <Download size={16} /> Download CV
              </Button>
              <div className="flex gap-4 items-center px-4">
                <a href="#" className="text-sm font-medium hover:text-accent transition-colors border-b border-transparent hover:border-accent">LinkedIn</a>
                <a href="#" className="text-sm font-medium hover:text-accent transition-colors border-b border-transparent hover:border-accent">Dribbble</a>
                <a href="#" className="text-sm font-medium hover:text-accent transition-colors border-b border-transparent hover:border-accent">Behance</a>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
