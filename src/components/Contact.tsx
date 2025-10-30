import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Facebook, Instagram, MessageCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations";

const contactInfo = [
  {
    icon: Mail,
    label: "email",
    value: "kouassiamos111@gmail.com",
    href: "mailto:kouassiamos111@gmail.com",
  },
  {
    icon: Phone,
    label: "phone",
    value: "0150898203 / 0584461293",
    href: "tel:0150898203",
  },
  {
    icon: MapPin,
    label: "location",
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
  {
    icon: MessageCircle,
    name: "WhatsApp",
    href: "https://wa.me/2250150898203",
  },
];

const Contact = () => {
  const { language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const contactSchema = z.object({
    name: z.string().trim().min(2, getTranslation(language, 'contact.form.error.name.min')).max(100, getTranslation(language, 'contact.form.error.name.max')),
    email: z.string().trim().email(getTranslation(language, 'contact.form.error.email.invalid')).max(255, getTranslation(language, 'contact.form.error.email.max')),
    phone: z.string().trim().optional(),
    message: z.string().trim().min(10, getTranslation(language, 'contact.form.error.message.min')).max(1000, getTranslation(language, 'contact.form.error.message.max')),
  });
  
  type ContactFormData = z.infer<typeof contactSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: data.name,
            email: data.email,
            phone: data.phone || null,
            message: data.message,
          }
        ]);

      if (error) throw error;

      toast({
        title: getTranslation(language, 'contact.form.success.title'),
        description: getTranslation(language, 'contact.form.success.desc'),
      });

      reset();
    } catch (error) {
      toast({
        title: getTranslation(language, 'contact.form.error.title'),
        description: getTranslation(language, 'contact.form.error.desc'),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 gradient-hero">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {getTranslation(language, 'contact.title')} <span className="text-gradient">{getTranslation(language, 'contact.subtitle')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {getTranslation(language, 'contact.description')}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <span className="animate-pulse">🟢</span>
            {getTranslation(language, 'contact.available')}
          </div>
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
                      <p className="text-sm text-muted-foreground mb-1">{getTranslation(language, `contact.info.${contact.label.toLowerCase()}`)}</p>
                      <p className="font-semibold">{contact.value}</p>
                    </div>
                  </a>
                </Card>
              );
            })}
          </div>

          {/* Contact Form */}
          <Card className="p-8 gradient-card border-border animate-fade-in-right">
            <h3 className="text-2xl font-semibold mb-6 text-primary">{getTranslation(language, 'contact.form.title')}</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <Label htmlFor="name">{getTranslation(language, 'contact.form.name')} *</Label>
                <Input
                  id="name"
                  {...register("name")}
                  placeholder={getTranslation(language, 'contact.form.name.placeholder')}
                  className="mt-1"
                />
                {errors.name && (
                  <p className="text-destructive text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="email">{getTranslation(language, 'contact.form.email')} *</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  placeholder={getTranslation(language, 'contact.form.email.placeholder')}
                  className="mt-1"
                />
                {errors.email && (
                  <p className="text-destructive text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div>
                <Label htmlFor="phone">{getTranslation(language, 'contact.form.phone')}</Label>
                <Input
                  id="phone"
                  type="tel"
                  {...register("phone")}
                  placeholder={getTranslation(language, 'contact.form.phone.placeholder')}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="message">{getTranslation(language, 'contact.form.message')} *</Label>
                <Textarea
                  id="message"
                  {...register("message")}
                  placeholder={getTranslation(language, 'contact.form.message.placeholder')}
                  className="mt-1 min-h-[120px]"
                />
                {errors.message && (
                  <p className="text-destructive text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <Button 
                type="submit" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-blue"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>{getTranslation(language, 'contact.form.sending')}</>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    {getTranslation(language, 'contact.form.send')}
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border">
              <h4 className="text-sm font-semibold mb-3">{getTranslation(language, 'contact.social.title')}</h4>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.slice(0, 4).map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 p-3 bg-secondary hover:bg-primary/20 rounded-lg transition-all duration-300 hover:glow-blue group text-sm"
                    >
                      <Icon className="h-4 w-4 text-primary group-hover:scale-110 transition-transform" />
                      <span className="font-medium">{social.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </Card>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow-blue transition-all hover:glow-blue-strong"
            onClick={() => {
              const form = document.querySelector('form');
              if (form) {
                requestAnimationFrame(() => {
                  form.scrollIntoView({ behavior: 'smooth', block: 'center' });
                });
                setTimeout(() => {
                  const firstInput = form.querySelector('input') as HTMLInputElement;
                  if (firstInput) firstInput.focus();
                }, 500);
              }
            }}
          >
            <Mail className="mr-2 h-5 w-5" />
            {getTranslation(language, 'contact.cta.contact')}
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
            onClick={() => window.open('https://wa.me/2250150898203', '_blank')}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            {getTranslation(language, 'contact.cta.whatsapp')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
