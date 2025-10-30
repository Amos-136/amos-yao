import { Button } from "@/components/ui/button";
import { Github, Linkedin, Facebook, Instagram, Mail, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen gradient-hero flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile photo */}
          <div className="flex justify-center lg:justify-start animate-fade-in-left">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-lg blur-3xl animate-pulse"></div>
              <img 
                src={profilePhoto}
                alt="Yao Kouassi Amos - Étudiant en cybersécurité et développeur web spécialisé en Python, React et sécurité informatique basé à Abidjan, Côte d'Ivoire"
                className="relative rounded-lg w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[32rem] object-cover border-4 border-primary/30 glow-blue-strong animate-float"
                fetchPriority="high"
                loading="eager"
                width="384"
                height="512"
              />
            </div>
          </div>

          {/* Text content */}
          <div className="space-y-6 animate-fade-in-right">
            <div className="space-y-2">
              <p className="text-primary text-sm font-semibold tracking-wider uppercase">
                Étudiant en Cybersécurité 🇨🇮
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
                Yao Kouassi <span className="text-gradient">Amos</span>
              </h1>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Technicien en informatique rigoureux et polyvalent, passionné par la cybersécurité et le développement. 
              Je conçois des solutions fiables, sécurisées et innovantes pour répondre aux besoins techniques des entreprises.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground glow-blue transition-all hover:glow-blue-strong"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Mail className="mr-2 h-4 w-4" />
                Me contacter
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Voir mes projets
              </Button>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-secondary hover:bg-secondary/80"
                onClick={() => window.open('#', '_blank')}
              >
                <Download className="mr-2 h-4 w-4" />
                Télécharger mon CV
              </Button>
            </div>

            {/* Social links */}
            <div className="flex gap-4 pt-6">
              <a 
                href="https://github.com/Amos-136" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all hover:glow-blue"
                aria-label="Profil GitHub de Yao Kouassi Amos"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/kouassi-yao-456121247" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all hover:glow-blue"
                aria-label="Profil LinkedIn de Yao Kouassi Amos"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://www.facebook.com/share/19kHSxbc43/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all hover:glow-blue"
                aria-label="Profil Facebook de Yao Kouassi Amos"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=rbtb6k3" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-secondary hover:bg-primary transition-all hover:glow-blue"
                aria-label="Profil Instagram de Yao Kouassi Amos"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
