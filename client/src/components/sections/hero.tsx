import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import avatarImage from "@assets/generated_images/professional_designer_avatar.png";
import { useEffect, useState } from "react";

const roles = ["UI/UX Designer", "Motion Designer", "Creative Developer"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(currentRole.substring(0, text.length + (isDeleting ? -1 : 1)));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-2/3 h-2/3 bg-accent/5 rounded-full blur-3xl translate-x-1/4 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-accent/3 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-sm md:text-base font-mono text-accent mb-4 tracking-widest uppercase">
            Hello, I'm
          </h2>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-4 leading-tight">
            ALEX MORENO
          </h1>
          
          <div className="h-8 mb-6 text-xl md:text-2xl text-muted-foreground font-light">
            I am a <span className="text-foreground font-medium">{text}</span>
            <span className="animate-pulse">|</span>
          </div>
          
          <p className="text-muted-foreground max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
            Designing digital experiences that impact. I combine minimalist aesthetics 
            with functional problem-solving to create products people love.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
            <Button 
              onClick={scrollToProjects}
              className="rounded-full px-8 py-6 text-base bg-foreground hover:bg-accent transition-all duration-300"
            >
              View My Work
            </Button>
            <Button 
              variant="ghost" 
              className="rounded-full px-8 py-6 text-base hover:bg-secondary/50"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Contact Me
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-96">
            <div className="absolute inset-0 rounded-full border-2 border-black/5 animate-[spin_10s_linear_infinite]" />
            <div className="absolute inset-4 rounded-full border border-accent/20 animate-[spin_15s_linear_infinite_reverse]" />
            <img 
              src={avatarImage} 
              alt="Alex Moreno" 
              className="absolute inset-8 w-[calc(100%-64px)] h-[calc(100%-64px)] object-cover rounded-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={scrollToProjects}
      >
        <ArrowDown className="text-muted-foreground/50" />
      </motion.div>
    </section>
  );
}
