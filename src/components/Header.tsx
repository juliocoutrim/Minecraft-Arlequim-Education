import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import logoAvatar from "@/assets/logo-avatar-arlequim.png";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center px-4">
        <div className="flex items-center gap-2">
          <img src={logoAvatar} alt="Arlequim Avatar" className="h-10 w-10" />
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Game Hub Arlequim
          </span>
        </div>

        <div className="ml-8 flex-1 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar jogos..."
              className="pl-10 bg-card border-border focus-visible:ring-primary"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
