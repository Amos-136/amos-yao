import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Code, Shield, CheckCircle } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Maintenance informatique",
    description: "Diagnostic et réparation de matériel, optimisation des performances, installation et configuration de logiciels.",
    features: [
      "Réparation matériel et logiciel",
      "Optimisation des systèmes",
      "Installation de logiciels",
      "Support technique",
    ],
  },
  {
    icon: Code,
    title: "Développement web",
    description: "Création de sites web modernes, applications web sur mesure, intégration API et hébergement sécurisé.",
    features: [
      "Sites vitrine et SaaS",
      "Applications web React",
      "Intégration Firebase/Supabase",
      "Hébergement et SSL",
    ],
  },
  {
    icon: Shield,
    title: "Cybersécurité",
    description: "Audit de sécurité, tests de pénétration, sécurisation des réseaux et formation aux bonnes pratiques.",
    features: [
      "Audit et tests de pénétration",
      "Sécurisation des réseaux",
      "Configuration firewall",
      "Formation sécurité",
    ],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Mes <span className="text-gradient">services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Des solutions techniques professionnelles adaptées à vos besoins.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-blue animate-fade-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-6 p-4 bg-primary/10 rounded-lg w-fit group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button 
                  className="w-full bg-primary hover:bg-primary/90"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Demander un devis
                </Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
