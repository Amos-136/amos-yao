import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/contexts/LanguageContext";
import { getTranslation } from "@/translations";

const skillCategories = [
  {
    category: "Cybersécurité",
    skills: [
      "Tests de pénétration",
      "Audit de sécurité",
      "Réseaux avancés",
      "Pivoting",
      "Évasion de détection",
      "Analyse de vulnérabilités",
    ],
  },
  {
    category: "Développement",
    skills: [
      "Python",
      "JavaScript/TypeScript",
      "React",
      "Node.js",
      "API REST",
      "Tkinter",
      "Bot Development",
    ],
  },
  {
    category: "Systèmes & Réseaux",
    skills: [
      "Windows",
      "macOS",
      "Linux",
      "Configuration réseau",
      "Routeurs & Switchs",
      "Portails captifs",
    ],
  },
  {
    category: "Cloud & Databases",
    skills: [
      "Supabase",
      "Firebase",
      "Hébergement web",
      "SSL/TLS",
      "PostgreSQL",
      "Cloud Storage",
    ],
  },
  {
    category: "Design & Création",
    skills: [
      "Infographie",
      "Adobe Suite",
      "UI/UX Design",
      "Montage vidéo",
      "Animation",
      "Voix off",
    ],
  },
  {
    category: "Marketing & Communication",
    skills: [
      "Marketing digital",
      "Réseaux sociaux",
      "Création de contenu",
      "TikTok",
      "Facebook",
      "Instagram",
    ],
  },
];

const languages = [
  { name: "Français", level: "Excellent" },
  { name: "Anglais", level: "Intermédiaire" },
];

const Skills = () => {
  const { language } = useLanguage();
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            {getTranslation(language, 'skills.title')} <span className="text-gradient">{getTranslation(language, 'skills.subtitle')}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {getTranslation(language, 'skills.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card 
              key={index}
              className="p-6 gradient-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-lg font-semibold mb-4 text-primary">
                {getTranslation(language, `skills.category.${category.category.toLowerCase().replace(' & ', '').replace('systèmes & réseaux', 'systems').replace('cloud & databases', 'cloud').replace('design & création', 'design').replace('marketing & communication', 'marketing').replace('développement', 'development').replace('cybersécurité', 'cybersecurity')}`)}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex}
                    variant="secondary"
                    className="bg-secondary hover:bg-primary/20 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Languages section */}
        <Card className="p-8 gradient-card border-border animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6 text-center text-primary">{getTranslation(language, 'skills.languages.title')}</h3>
          <div className="flex justify-center gap-8">
            {languages.map((lang, index) => (
              <div key={index} className="text-center">
                <p className="font-semibold text-lg mb-1">{getTranslation(language, `skills.languages.${lang.name.toLowerCase()}`)}</p>
                <Badge variant="outline" className="border-primary/50 text-primary">
                  {getTranslation(language, `skills.languages.level.${lang.level.toLowerCase()}`)}
                </Badge>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Skills;
