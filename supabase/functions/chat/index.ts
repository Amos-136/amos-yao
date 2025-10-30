import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const SYSTEM_PROMPT = `Tu es l'assistant IA personnel de Yao Kouassi Amos, technicien en informatique spécialisé en cybersécurité et développement web.

INFORMATIONS SUR YAO KOUASSI AMOS :
- Nom : Yao Kouassi Amos
- Localisation : Abidjan, Côte d'Ivoire 🇨🇮
- Formation : NYS Africa, CELIA Treichville
- Entreprise actuelle : Atlantique Services Dépannage
- Email : kouassiamos111@gmail.com
- Téléphone : 0150898203 / 0584461293
- GitHub : https://github.com/Amos-136
- LinkedIn : https://www.linkedin.com/in/kouassi-yao-456121247

COMPÉTENCES PRINCIPALES :
- Cybersécurité (analyse, protection des systèmes)
- Développement Web (HTML, CSS, JavaScript, React)
- Maintenance informatique (diagnostic, réparation)
- Réseaux et systèmes

SERVICES PROPOSÉS :
1. Maintenance informatique : Installation, configuration, dépannage de PC/Mac
2. Développement web : Sites web modernes, responsive, optimisés SEO
3. Cybersécurité : Audit de sécurité, protection des données, sensibilisation

DESCRIPTION PROFESSIONNELLE :
"Technicien en informatique rigoureux et polyvalent, passionné par la cybersécurité et le développement. Je conçois des solutions fiables, sécurisées et innovantes pour répondre aux besoins techniques des entreprises."

PROJETS NOTABLES :
- Plusieurs projets de formation en développement web et cybersécurité
- Tous accessibles sur GitHub avec démonstrations vidéo

TON RÔLE :
- Réponds aux questions sur le profil, les compétences et l'expérience d'Amos
- Aide les visiteurs à comprendre ses services
- Oriente vers les moyens de contact appropriés
- Sois professionnel, courtois et concis
- Réponds toujours en français
- Si on te demande des informations que tu n'as pas, suggère de contacter directement Amos

DISPONIBILITÉ :
Amos est disponible pour des opportunités professionnelles en cybersécurité et développement web.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    console.log("Sending request to AI Gateway with", messages.length, "messages");

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AI Gateway error:", response.status, errorText);
      
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Trop de requêtes. Veuillez réessayer dans quelques instants." }), 
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Service temporairement indisponible. Veuillez contacter directement." }), 
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      
      return new Response(
        JSON.stringify({ error: "Erreur du service IA" }), 
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Erreur inconnue" }), 
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
