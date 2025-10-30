import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingWhatsApp = () => {
  const whatsappNumber = "2250150898203"; // Remplace par ton numéro complet
  const whatsappMessage = encodeURIComponent("Bonjour, je vous contacte depuis votre portfolio !");

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="icon"
      className="fixed bottom-24 right-6 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-300 z-50 animate-pulse bg-[#25D366] hover:bg-[#20BA5A] text-white"
      aria-label="Contacter sur WhatsApp"
    >
      <MessageCircle className="w-6 h-6 fill-current" />
    </Button>
  );
};

export default FloatingWhatsApp;
