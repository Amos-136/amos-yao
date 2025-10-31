import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Globe, Linkedin, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations";

const Collaborations = () => {
  const { language } = useLanguage();

  const companies = [
    {
      name: "Wilson Group Services",
      sector: getTranslation(language, 'collaborations.wilson.sector'),
      role: getTranslation(language, 'collaborations.wilson.role'),
      links: [
        { icon: Globe, url: "https://www.goafricaonline.com/ci/828017-wilson-group-services-transit-abidjan-cote-ivoire", label: "Site Web" },
        { icon: Linkedin, url: "https://ci.linkedin.com/company/wilson-group-services", label: "LinkedIn" },
        { icon: Facebook, url: "https://www.facebook.com/wilsongroupeservices/?locale=fr_FR", label: "Facebook" },
      ],
      logo: "🚛"
    },
    {
      name: "SNEPPCI (Yopougon)",
      sector: getTranslation(language, 'collaborations.sneppci.sector'),
      role: getTranslation(language, 'collaborations.sneppci.role'),
      links: [
        { icon: Facebook, url: "https://www.facebook.com/groups/317448615571359?locale=fr_FR", label: "Facebook" },
      ],
      logo: "🎓"
    },
    {
      name: "Skin Society Abidjan",
      sector: getTranslation(language, 'collaborations.skin.sector'),
      role: getTranslation(language, 'collaborations.skin.role'),
      links: [
        { icon: Globe, url: "https://skin-society.com/", label: "Site Web" },
        { icon: Facebook, url: "https://www.facebook.com/SkinSocietyOfficiel/", label: "Facebook" },
        { icon: Instagram, url: "https://www.instagram.com/skinsociety_ci/", label: "Instagram" },
      ],
      logo: "💆"
    },
    {
      name: "GF Print (Abidjan)",
      sector: getTranslation(language, 'collaborations.gfprint.sector'),
      role: getTranslation(language, 'collaborations.gfprint.role'),
      links: [
        { icon: Instagram, url: "https://www.instagram.com/gfprintci/", label: "Instagram" },
        { icon: Facebook, url: "https://www.facebook.com/profile.php?id=61578964517202", label: "Facebook" },
      ],
      logo: "🖨️"
    },
  ];

  return (
    <section id="collaborations" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {getTranslation(language, 'collaborations.title')}{" "}
            <span className="text-primary">{getTranslation(language, 'collaborations.subtitle')}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {getTranslation(language, 'collaborations.description')}
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {companies.map((company, index) => (
            <Card 
              key={index}
              className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6">
                {/* Company Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="text-5xl flex-shrink-0" role="img" aria-label={`Logo ${company.name}`}>
                    {company.logo}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {company.name}
                    </h3>
                    <Badge variant="secondary" className="mb-2">
                      {company.sector}
                    </Badge>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  <span className="font-semibold text-foreground">
                    {getTranslation(language, 'collaborations.role.label')}:
                  </span>{" "}
                  {company.role}
                </p>

                {/* Social Links */}
                <div className="flex flex-wrap gap-2">
                  {company.links.map((link, linkIndex) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={linkIndex}
                        variant="outline"
                        size="sm"
                        className="hover-scale"
                        onClick={() => window.open(link.url, '_blank')}
                        aria-label={`${link.label} de ${company.name}`}
                      >
                        <Icon className="h-4 w-4 mr-2" />
                        {link.label}
                      </Button>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ExternalLink className="mr-2 h-5 w-5" />
            {getTranslation(language, 'collaborations.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Collaborations;
