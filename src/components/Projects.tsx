import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Youtube } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations";

const projects = [
  {
    title: "Atlantique Services Dépannage",
    description: "Site web professionnel responsive pour entreprise de services techniques. Intégration de formulaires de contact, galerie de services, et système de prise de rendez-vous en ligne.",
    tags: ["React", "Tailwind", "Responsive", "Supabase"],
    link: "https://github.com/Amos-136/atlantique-services",
    youtubeId: "",
  },
  {
    title: "Menorah Wi-Fi Zone",
    description: "Portail captif sécurisé avec authentification multi-facteurs, gestion des sessions utilisateurs, limitation de bande passante et tableau de bord administrateur complet.",
    tags: ["Réseaux", "Authentication", "Firebase", "Security"],
    link: "https://github.com/Amos-136/menorah-wifi",
    youtubeId: "",
  },
  {
    title: "Bot Telegram Emploi",
    description: "Bot intelligent utilisant l'API Telegram pour la gestion automatisée d'offres d'emploi. Génération automatique de CV et lettres de motivation personnalisées avec IA.",
    tags: ["Python", "Telegram API", "AI", "Automation"],
    link: "https://github.com/Amos-136/telegram-job-bot",
    youtubeId: "",
  },
  {
    title: "Calculatrice Python Avancée",
    description: "Application desktop avec interface Tkinter moderne. Fonctionnalités : calculs scientifiques, historique des opérations, thème sombre/clair, raccourcis clavier.",
    tags: ["Python", "Tkinter", "UI/UX", "Desktop App"],
    link: "https://github.com/Amos-136/calculator-python",
    youtubeId: "",
  },
  {
    title: "Outil d'Analyse IP Cybersécurité",
    description: "Outil professionnel d'analyse d'adresses IP avec intégration multi-API (ipinfo.io, Shodan, AbuseIPDB). Génération de rapports de sécurité détaillés et géolocalisation sur Google Maps.",
    tags: ["Cybersécurité", "Python", "API Integration", "OSINT"],
    link: "https://github.com/Amos-136/ip-analyzer",
    youtubeId: "",
  },
  {
    title: "Transcripteur & Résumeur Vidéo IA",
    description: "Application de transcription automatique de vidéos utilisant l'IA. Génération de résumés intelligents, extraction de mots-clés, et export multi-format (PDF, Word, TXT).",
    tags: ["AI", "Python", "NLP", "OpenAI", "Video Processing"],
    link: "https://github.com/Amos-136/video-transcriber",
    youtubeId: "",
  },
];

const Projects = () => {
  const { language } = useLanguage();
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {getTranslation(language, 'projects.title')} <span className="text-gradient">{getTranslation(language, 'projects.subtitle')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {getTranslation(language, 'projects.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-blue animate-fade-in group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block space-y-4"
              >
                {project.youtubeId && (
                  <div className="relative aspect-video rounded-lg overflow-hidden mb-4 bg-secondary/50">
                    <iframe
                      src={`https://www.youtube.com/embed/${project.youtubeId}`}
                      title={`${project.title} - ${getTranslation(language, 'projects.demo')}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute inset-0 w-full h-full"
                    />
                    <div className="absolute top-2 right-2 bg-primary/90 p-1.5 rounded">
                      <Youtube className="h-4 w-4 text-primary-foreground" />
                    </div>
                  </div>
                )}
                
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
