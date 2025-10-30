import { Card } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations";

const testimonials = [
  {
    name: "Jean-Marc Kouadio",
    role: "Directeur Technique - Entreprise Tech Solutions",
    content: "Amos a démontré une grande rigueur dans la sécurisation de notre infrastructure réseau. Son expertise en cybersécurité nous a permis d'identifier et corriger plusieurs vulnérabilités critiques.",
    rating: 5,
  },
  {
    name: "Marie-Claire Diaby",
    role: "Responsable IT - StartUp Innovante",
    content: "Excellent développeur web ! Il a créé notre site vitrine en React avec une interface moderne et responsive. Son professionnalisme et sa réactivité sont remarquables.",
    rating: 5,
  },
  {
    name: "Patrick Nze",
    role: "Gérant - Atlantique Services Dépannage",
    content: "Amos est un technicien polyvalent et fiable. Il diagnostique rapidement les problèmes et apporte toujours des solutions efficaces. Un vrai atout pour notre équipe.",
    rating: 5,
  },
  {
    name: "Sylvie Koné",
    role: "Chef de projet - Agence Digital",
    content: "Collaboration très professionnelle sur plusieurs projets web. Amos maîtrise parfaitement les technologies modernes et respecte toujours les délais.",
    rating: 5,
  },
];

const Testimonials = () => {
  const { language } = useLanguage();
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {getTranslation(language, 'testimonials.title')} <span className="text-gradient">{getTranslation(language, 'testimonials.subtitle')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {getTranslation(language, 'testimonials.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-8 gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-blue animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-6">
                <Quote className="h-10 w-10 text-primary/30" />
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>

              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground mb-4">
            {getTranslation(language, 'testimonials.cta')}
          </p>
          <a
            href="https://www.linkedin.com/in/kouassi-yao-456121247"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 font-medium underline-offset-4 hover:underline"
          >
            {getTranslation(language, 'testimonials.linkedin')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
