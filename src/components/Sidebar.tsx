import { Home, Users, Gamepad2, Sword, Dumbbell } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";

const mainSections = [
  { icon: Home, label: "Página Inicial", href: "/" },
  { icon: Users, label: "Multiplayer", href: "/multiplayer" },
];

const categories = [
  { icon: Gamepad2, label: "Ação", href: "/categoria/acao" },
  { icon: Sword, label: "Aventura", href: "/categoria/aventura" },
  { icon: Dumbbell, label: "Casual", href: "/categoria/casual" },
];

export const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 border-r border-border bg-card">
      <ScrollArea className="h-full py-6">
        <div className="space-y-6 px-3">
          <div>
            <nav className="space-y-1">
              {mainSections.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div>
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase text-muted-foreground">
              Gêneros
            </h3>
            <nav className="space-y-1">
              {categories.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </ScrollArea>
    </aside>
  );
};
