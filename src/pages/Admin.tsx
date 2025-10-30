import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Loader2, LogOut, Users, Briefcase, Star, Wrench, Code } from "lucide-react";

const Admin = () => {
  const { user, isAdmin, loading, signOut } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      navigate("/auth");
    }
  }, [user, isAdmin, loading, navigate]);

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  const adminSections = [
    {
      title: "Profil",
      description: "Gérer les informations du portfolio",
      icon: Users,
      path: "/admin/profile",
    },
    {
      title: "Projets",
      description: "Gérer les projets",
      icon: Briefcase,
      path: "/admin/projects",
    },
    {
      title: "Témoignages",
      description: "Gérer les témoignages",
      icon: Star,
      path: "/admin/testimonials",
    },
    {
      title: "Services",
      description: "Gérer les services",
      icon: Wrench,
      path: "/admin/services",
    },
    {
      title: "Compétences",
      description: "Gérer les compétences",
      icon: Code,
      path: "/admin/skills",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Panneau d'administration</h1>
          <Button onClick={handleSignOut} variant="outline">
            <LogOut className="mr-2 h-4 w-4" />
            Déconnexion
          </Button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2">
            Bienvenue, {user?.email}
          </h2>
          <p className="text-muted-foreground">
            Gérez le contenu de votre portfolio depuis ce panneau.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminSections.map((section) => {
            const Icon = section.icon;
            return (
              <Card
                key={section.path}
                className="p-6 hover:border-primary/50 transition-colors cursor-pointer"
                onClick={() => navigate(section.path)}
              >
                <div className="mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{section.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {section.description}
                </p>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default Admin;
