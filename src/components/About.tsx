import { Card } from "@/components/ui/card";
import { Code, Shield, Palette, Bot, Globe, Sparkles } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations";

const About = () => {
  const { language } = useLanguage();
  
  const expertiseAreas = [
    {
      icon: Shield,
      titleKey: "about.expertise.cybersecurity",
      descKey: "about.expertise.cybersecurity.desc",
    },
    {
      icon: Code,
      titleKey: "about.expertise.python",
      descKey: "about.expertise.python.desc",
    },
    {
      icon: Globe,
      titleKey: "about.expertise.web",
      descKey: "about.expertise.web.desc",
    },
    {
      icon: Bot,
      titleKey: "about.expertise.automation",
      descKey: "about.expertise.automation.desc",
    },
    {
      icon: Palette,
      titleKey: "about.expertise.design",
      descKey: "about.expertise.design.desc",
    },
    {
      icon: Sparkles,
      titleKey: "about.expertise.marketing",
      descKey: "about.expertise.marketing.desc",
    },
  ];
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {getTranslation(language, 'about.title')} <span className="text-gradient">{getTranslation(language, 'about.subtitle')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {getTranslation(language, 'about.description')}
          </p>
        </div>

        <div className="space-y-12">
          {/* Bio section */}
          <Card className="p-8 gradient-card border-border animate-scale-in">
            <h3 className="text-2xl font-semibold mb-4 text-primary">{getTranslation(language, 'about.journey.title')}</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {getTranslation(language, 'about.journey.p1')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {getTranslation(language, 'about.journey.p2')}
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {getTranslation(language, 'about.journey.p3')} <span className="text-primary font-semibold">NYS Africa</span>{getTranslation(language, 'about.journey.p3b')} <span className="text-primary font-semibold">Atlantique Services Dépannage</span>.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">{getTranslation(language, 'about.education.title')}</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">🎓</span>
                  <div>
                    <p className="font-semibold text-foreground">NYS Africa</p>
                    <p className="text-sm text-muted-foreground">Certificat en sécurité informatique</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">🎓</span>
                  <div>
                    <p className="font-semibold text-foreground">CELIA Treichville</p>
                    <p className="text-sm text-muted-foreground">3e Année Brevet de technicien en électronique et informatique appliquée</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">🎓</span>
                  <div>
                    <p className="font-semibold text-foreground">Lycée moderne BAD d'Ayamé</p>
                    <p className="text-sm text-muted-foreground">BEPC</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Expertise grid */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-center">{getTranslation(language, 'about.expertise.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {expertiseAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <Card 
                    key={index}
                    className="p-6 gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-blue animate-fade-in group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold mb-2">{getTranslation(language, area.titleKey)}</h4>
                    <p className="text-sm text-muted-foreground">{getTranslation(language, area.descKey)}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Additional activities */}
          <Card className="p-8 gradient-card border-border animate-fade-in">
            <h3 className="text-2xl font-semibold mb-4 text-primary">{getTranslation(language, 'about.activities.title')}</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>{getTranslation(language, 'about.activities.1')} <strong>Sagesse Biblique</strong> {getTranslation(language, 'about.activities.1b')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>{getTranslation(language, 'about.activities.2')} <strong>L'univers des tout-petits</strong> {getTranslation(language, 'about.activities.2b')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>{getTranslation(language, 'about.activities.3')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>{getTranslation(language, 'about.activities.4')} <strong>DO SHOP</strong> {getTranslation(language, 'about.activities.4b')}</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span>{getTranslation(language, 'about.activities.5')}</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
