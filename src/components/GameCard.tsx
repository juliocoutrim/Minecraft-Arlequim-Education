import { Users } from "lucide-react";
import { Card } from "@/components/ui/card";

interface GameCardProps {
  title: string;
  image: string;
  players?: number;
  tag?: string;
  onClick?: () => void;
}

export const GameCard = ({ title, image, players, tag, onClick }: GameCardProps) => {
  return (
    <Card
      className="group relative overflow-hidden bg-card border-border cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {tag && (
          <div className="absolute top-2 right-2 bg-gradient-to-r from-secondary to-primary px-3 py-1 rounded-full text-xs font-bold text-primary-foreground">
            {tag}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-1">{title}</h3>
        {players && (
          <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{players.toLocaleString()} jogando</span>
          </div>
        )}
      </div>
    </Card>
  );
};
