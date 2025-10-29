import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Youtube } from "lucide-react";

const projects = [
  {
    title: "Atlantique Services Dépannage",
    description: "Site web professionnel pour une entreprise de services techniques et de dépannage informatique.",
    tags: ["Web Design", "React", "Hébergement"],
    link: "https://github.com/Amos-136",
    youtubeId: "",
  },
  {
    title: "Menorah Wi-Fi Zone",
    description: "Portail captif personnalisé pour zone Wi-Fi communautaire avec gestion des utilisateurs.",
    tags: ["Réseaux", "Authentication", "Firebase"],
    link: "https://github.com/Amos-136",
    youtubeId: "",
  },
  {
    title: "Bot Telegram Emploi",
    description: "Plateforme automatisée de gestion d'offres d'emploi avec génération de CV et lettres de motivation.",
    tags: ["Python", "Bot", "Automatisation", "API"],
    link: "https://github.com/Amos-136",
    youtubeId: "",
  },
  {
    title: "Calculatrice Python",
    description: "Interface graphique moderne avec thème sombre minimaliste et fonctionnalités avancées.",
    tags: ["Python", "Tkinter", "UI/UX"],
    link: "https://github.com/Amos-136",
    youtubeId: "",
  },
  {
    title: "Outil d'analyse IP",
    description: "Intégration avec ipinfo.io, Shodan, AbuseIPDB et Google Maps pour des rapports détaillés.",
    tags: ["Cybersécurité", "API", "Python"],
    link: "https://github.com/Amos-136",
    youtubeId: "",
  },
  {
    title: "Transcripteur & Résumeur vidéo",
    description: "Outil de transcription automatique avec résumé intelligent et export PDF/Word.",
    tags: ["IA", "Python", "Traitement NLP"],
    link: "https://github.com/Amos-136",
    youtubeId: "",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Mes <span className="text-gradient">projets</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Une sélection de projets qui illustrent mon expertise technique et ma créativité.
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
                      title={`${project.title} - Démonstration vidéo`}
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
