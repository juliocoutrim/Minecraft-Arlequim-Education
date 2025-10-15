import { GameCard } from "./GameCard";

interface Game {
  id: number;
  title: string;
  image: string;
  players?: number;
  tag?: string;
}

interface GameGridProps {
  games: Game[];
  title?: string;
}

export const GameGrid = ({ games, title }: GameGridProps) => {
  return (
    <section className="space-y-4">
      {title && <h2 className="text-2xl font-bold text-foreground">{title}</h2>}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            image={game.image}
            players={game.players}
            tag={game.tag}
          />
        ))}
      </div>
    </section>
  );
};
