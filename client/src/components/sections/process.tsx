import { motion } from "framer-motion";
import { Search, Lightbulb, PenTool, TestTube, Rocket } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      title: t.process.steps.discovery.title,
      description: t.process.steps.discovery.description,
      icon: Search
    },
    {
      id: 2,
      title: t.process.steps.ideation.title,
      description: t.process.steps.ideation.description,
      icon: Lightbulb
    },
    {
      id: 3,
      title: t.process.steps.design.title,
      description: t.process.steps.design.description,
      icon: PenTool
    },
    {
      id: 4,
      title: t.process.steps.testing.title,
      description: t.process.steps.testing.description,
      icon: TestTube
    },
    {
      id: 5,
      title: t.process.steps.delivery.title,
      description: t.process.steps.delivery.description,
      icon: Rocket
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-accent mb-2 uppercase tracking-widest">{t.process.eyebrow}</h2>
          <h3 className="text-3xl md:text-4xl font-bold">{t.process.title}</h3>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-secondary -translate-y-1/2 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div 
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 mx-auto group-hover:bg-accent group-hover:text-white transition-colors relative">
                  <step.icon size={20} />
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent text-white text-xs rounded-full flex items-center justify-center font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                    {step.id}
                  </div>
                </div>
                <h4 className="text-lg font-bold mb-2 text-center">{step.title}</h4>
                <p className="text-sm text-muted-foreground text-center">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
