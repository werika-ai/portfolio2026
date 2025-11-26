import { useEffect } from "react";
import { useRoute, Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, ExternalLink, Calendar, User, Briefcase } from "lucide-react";
import { projects } from "@/lib/data";
import { useLanguage } from "@/lib/i18n";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import { Button } from "@/components/ui/button";

export default function ProjectDetail() {
  const [match, params] = useRoute("/project/:id");
  const [_, setLocation] = useLocation();
  const { t } = useLanguage();
  
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!match || !params) {
    return null;
  }

  const projectId = parseInt(params.id);
  const project = projects.find(p => p.id === projectId);
  
  if (!project) {
    setLocation("/404");
    return null;
  }

  const nextProject = projects.find(p => p.id === projectId + 1) || projects[0];
  const prevProject = projects.find(p => p.id === projectId - 1) || projects[projects.length - 1];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent/20 selection:text-accent">
      <Navbar />
      
      <main className="pt-24">
        {/* Hero Image */}
        <div className="w-full h-[50vh] md:h-[70vh] overflow-hidden relative">
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
          
          <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 bg-gradient-to-t from-black/80 to-transparent text-white">
            <div className="container mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="text-sm md:text-base font-mono text-accent mb-2 tracking-widest uppercase">
                  {project.category}
                </h2>
                <h1 className="text-4xl md:text-6xl font-bold">{project.title}</h1>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="py-16 md:py-24 bg-white border-b border-black/5">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              
              {/* Sidebar details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">{t.projectDetail.client}</h3>
                  <p className="text-lg font-medium">{project.client}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">{t.projectDetail.role}</h3>
                  <p className="text-lg font-medium">{project.role}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">{t.projectDetail.year}</h3>
                  <p className="text-lg font-medium">{project.year}</p>
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground mb-2">{t.skills.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-sm bg-secondary px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                <Button variant="outline" className="w-full gap-2 mt-4">
                  {t.projectDetail.visitLive} <ExternalLink size={16} />
                </Button>
              </div>

              {/* Main content */}
              <div className="md:col-span-3 space-y-16">
                <div>
                  <h3 className="text-2xl font-bold mb-6 pb-2 border-b">{t.projectDetail.overview}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{t.projectDetail.challenge}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.challenge}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{t.projectDetail.solution}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                </div>
                
                {project.results && (
                  <div className="bg-secondary/30 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4">{t.projectDetail.results}</h3>
                    <p className="text-xl text-foreground/80 font-medium leading-relaxed">
                      {project.results}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-secondary/10">
          <div className="container mx-auto px-6 space-y-8">
            {project.images.map((img, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className="rounded-xl overflow-hidden shadow-xl"
              >
                <img src={img} alt={`${project.title} screenshot ${index + 1}`} className="w-full" />
              </motion.div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 border-t border-black/5 bg-white">
          <div className="container mx-auto px-6">
            <div className="flex justify-between items-center">
              <Link href={`/project/${prevProject.id}`}>
                <a className="group flex items-center text-left">
                  <div className="mr-4 p-3 rounded-full bg-secondary group-hover:bg-accent group-hover:text-white transition-colors">
                    <ArrowLeft size={20} />
                  </div>
                  <div className="hidden md:block">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{t.projectDetail.prevProject}</p>
                    <p className="font-bold text-lg group-hover:text-accent transition-colors">{prevProject.title}</p>
                  </div>
                </a>
              </Link>

              <Link href={`/project/${nextProject.id}`}>
                <a className="group flex items-center text-right">
                  <div className="hidden md:block">
                    <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{t.projectDetail.nextProject}</p>
                    <p className="font-bold text-lg group-hover:text-accent transition-colors">{nextProject.title}</p>
                  </div>
                  <div className="ml-4 p-3 rounded-full bg-secondary group-hover:bg-accent group-hover:text-white transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
