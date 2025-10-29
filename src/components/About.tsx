import { Card } from "@/components/ui/card";
import { Code, Shield, Palette, Bot, Globe, Sparkles } from "lucide-react";
const expertiseAreas = [{
  icon: Shield,
  title: "Cybersécurité",
  description: "Audit, tests de pénétration, réseaux avancés, techniques d'évasion et pivoting"
}, {
  icon: Code,
  title: "Développement Python",
  description: "Création de bots, outils d'analyse, API et interfaces graphiques"
}, {
  icon: Globe,
  title: "Création web",
  description: "Sites vitrine, SaaS, hébergement, SSL, Supabase et Firebase Studio"
}, {
  icon: Bot,
  title: "Automatisation",
  description: "Bot Telegram, gestion de CV et offres d'emploi automatisées"
}, {
  icon: Palette,
  title: "Design & médias",
  description: "Logos, présentations, animations, voix off et contenu vidéo"
}, {
  icon: Sparkles,
  title: "Marketing digital",
  description: "Stratégies digitales, gestion de réseaux sociaux et création de contenu"
}];
const About = () => {
  return <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            À propos de <span className="text-gradient">moi</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            L'innovation, la sécurité et la créativité au service du numérique.
          </p>
        </div>

        <div className="space-y-12">
          {/* Bio section */}
          <Card className="p-8 gradient-card border-border animate-scale-in">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Mon parcours</h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Actuellement étudiant en cybersécurité à <span className="text-primary font-semibold">NYS Africa</span>, 
              je combine formation technique et expérience pratique en tant que technicien informatique chez 
              <span className="text-primary font-semibold"> Atlantique Services Dépannage</span>.
            </p>
          </Card>

          {/* Expertise grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">Domaines d'expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((area, index) => {
              const Icon = area.icon;
              return <Card key={index} className="p-6 gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-blue animate-fade-in group" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{area.title}</h4>
                    <p className="text-sm text-muted-foreground">{area.description}</p>
                  </Card>;
            })}
            </div>
          </div>

          {/* Additional activities */}
          <Card className="p-8 gradient-card border-border animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Activités & Centres d'intérêt</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Créateur du compte TikTok <strong>Sagesse Biblique</strong> (citations et paroles spirituelles)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Fondateur du compte <strong>L'univers des tout-petits</strong> (contenus éducatifs pour enfants)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Gérant d'un salon de coiffure</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Administrateur de la page Facebook <strong>DO SHOP</strong> (vente de parfums)</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>Passions : Photographie, Lecture, Voyage, Sport</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>;
};
export default About;