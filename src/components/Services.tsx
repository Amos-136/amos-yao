import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wrench, Code, Shield, CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations";

const getServices = (language: 'fr' | 'en') => [
  {
    icon: Wrench,
    title: getTranslation(language, 'services.maintenance.title'),
    description: getTranslation(language, 'services.maintenance.description'),
    features: [
      getTranslation(language, 'services.maintenance.feature1'),
      getTranslation(language, 'services.maintenance.feature2'),
      getTranslation(language, 'services.maintenance.feature3'),
      getTranslation(language, 'services.maintenance.feature4'),
    ],
  },
  {
    icon: Code,
    title: getTranslation(language, 'services.web.title'),
    description: getTranslation(language, 'services.web.description'),
    features: [
      getTranslation(language, 'services.web.feature1'),
      getTranslation(language, 'services.web.feature2'),
      getTranslation(language, 'services.web.feature3'),
      getTranslation(language, 'services.web.feature4'),
    ],
  },
  {
    icon: Shield,
    title: getTranslation(language, 'services.security.title'),
    description: getTranslation(language, 'services.security.description'),
    features: [
      getTranslation(language, 'services.security.feature1'),
      getTranslation(language, 'services.security.feature2'),
      getTranslation(language, 'services.security.feature3'),
      getTranslation(language, 'services.security.feature4'),
    ],
  },
];

const Services = () => {
  const { language } = useLanguage();
  const services = getServices(language);
  
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {getTranslation(language, 'services.title')} <span className="text-gradient">{getTranslation(language, 'services.subtitle')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {getTranslation(language, 'services.description')}
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
                  {getTranslation(language, 'services.quote')}
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
