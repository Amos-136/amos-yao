import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Collaborations from "@/components/Collaborations";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import FloatingChat from "@/components/FloatingChat";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations";

const Index = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Services />
      <Projects />
      <Skills />
      <Collaborations />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Yao Kouassi Amos. {getTranslation(language, 'footer.rights')}
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            {getTranslation(language, 'footer.tagline')}
          </p>
        </div>
      </footer>

      {/* Floating components */}
      <FloatingWhatsApp />
      <FloatingChat />
    </div>
  );
};

export default Index;
