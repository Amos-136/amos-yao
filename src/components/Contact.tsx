import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kouassiamos111@gmail.com",
    href: "mailto:kouassiamos111@gmail.com",
  },
  {
    icon: Phone,
    label: "Téléphone",
    value: "0150898203 / 0584461293",
    href: "tel:0150898203",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "Abidjan, Côte d'Ivoire 🇨🇮",
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/Amos-136",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/kouassi-yao-456121247",
  },
  {
    icon: Facebook,
    name: "Facebook",
    href: "https://www.facebook.com/share/19kHSxbc43/",
  },
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=rbtb6k3",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Restons <span className="text-gradient">connectés</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            N'hésitez pas à me contacter pour toute opportunité de collaboration ou simplement pour échanger.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact info */}
          <div className="space-y-6 animate-fade-in-left">
            {contactInfo.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 gradient-card border-border hover:border-primary/50 transition-all duration-300 hover:glow-blue group"
                >
                  <a 
                    href={contact.href}
                    className="flex items-start gap-4"
                  >
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                      <p className="font-semibold">{contact.value}</p>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>

          {/* Social links */}
          <Card className="p-8 gradient-card border-border animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-primary">Réseaux sociaux</h3>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-secondary hover:bg-primary/20 rounded-lg transition-all duration-300 hover:glow-blue group"
                  >
                    <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    <span className="font-medium">{social.name}</span>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground italic text-center">
                "D'après mes échanges avec ChatGPT, je suis un profil polyvalent, curieux et créatif, 
                impliqué dans la cybersécurité, le web et la création numérique."
              </p>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-fade-in">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-blue transition-all hover:glow-blue-strong"
            onClick={() => window.location.href = 'mailto:kouassiamos111@gmail.com'}
          >
            <Mail className="mr-2 h-5 w-5" />
            Envoyez-moi un message
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
