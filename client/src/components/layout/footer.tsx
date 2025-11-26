import { Github, Linkedin, Dribbble } from "lucide-react";
// Importing Behance as a custom SVG component or using Lucide if available, but Lucide doesn't have Behance.
// I will simulate Behance with a text or check if Lucide added it recently. 
// Lucide version is 0.545.0, it might have it. Let's check. 
// If not, I'll use a placeholder or text. Actually, I'll just use a generic "Be" icon style or assume it exists.
// Checking lucide-react exports... it usually doesn't have brand icons.
// I will use a simple SVG for Behance.

const BehanceIcon = ({ size = 24, className = "" }: { size?: number, className?: string }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M8 11h6.5M17.5 14c1.2-.5 1.5-1.7 1.5-2.6 0-2.6-2.4-3.4-4-3.4h-6v10h6.4c2.3 0 3.6-1.5 3.1-3.2-.4-1.3-1.7-1.7-1-1.7" />
  </svg>
);

import { useLanguage } from "@/lib/i18n";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-secondary/30 border-t border-black/5 py-12 mt-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-bold tracking-tight">ALEX MORENO</h3>
            <p className="text-sm text-muted-foreground mt-2">
              © 2026 {t.footer.rights}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <BehanceIcon size={20} />
            </a>
            <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
              <Dribbble size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
