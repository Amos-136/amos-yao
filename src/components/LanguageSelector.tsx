import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center gap-2">
      <Globe className="h-4 w-4 text-muted-foreground" />
      <div className="flex gap-1">
        <Button
          variant={language === 'fr' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('fr')}
          className={`h-8 px-2 text-xs ${language === 'fr' ? 'bg-primary' : ''}`}
        >
          🇫🇷 FR
        </Button>
        <Button
          variant={language === 'en' ? 'default' : 'ghost'}
          size="sm"
          onClick={() => setLanguage('en')}
          className={`h-8 px-2 text-xs ${language === 'en' ? 'bg-primary' : ''}`}
        >
          🇬🇧 EN
        </Button>
      </div>
    </div>
  );
};

export default LanguageSelector;
