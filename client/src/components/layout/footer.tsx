import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-black/5 py-12 mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold tracking-tight">ALEX MORENO</h3>
            <p className="text-sm text-muted-foreground mt-2">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 flex justify-center md:justify-start">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">
              Available for freelance projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
