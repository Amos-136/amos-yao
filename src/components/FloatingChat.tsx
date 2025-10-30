import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Bonjour ! Comment puis-je vous aider ?", sender: "bot", time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputMessage,
        sender: "user",
        time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputMessage("");

      // Réponse automatique simulée
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "Merci pour votre message ! Je reviendrai vers vous rapidement.",
          sender: "bot",
          time: new Date().toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <>
      {/* Fenêtre de chat */}
      {isOpen && (
        <Card className="fixed bottom-32 right-6 w-80 sm:w-96 h-[500px] flex flex-col shadow-2xl z-50 animate-scale-in border-border">
          {/* Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold">Support Chat</h3>
                <p className="text-xs opacity-90">En ligne</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-foreground/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-card">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-70 mt-1">{message.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t border-border bg-card">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Écrivez votre message..."
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon" className="shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Bulle flottante */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform z-50 animate-float"
        aria-label="Ouvrir le chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>
    </>
  );
};

export default FloatingChat;
