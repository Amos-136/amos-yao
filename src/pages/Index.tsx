import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

const Index = () => {
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
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Yao Kouassi Amos. Tous droits réservés.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Conçu avec passion pour l'innovation et la créativité.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
