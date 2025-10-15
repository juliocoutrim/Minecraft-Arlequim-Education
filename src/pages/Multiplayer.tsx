import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { GameGrid } from "@/components/GameGrid";
import { multiplayerGames } from "@/data/games";

const Multiplayer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="ml-64 flex-1">
          <div className="container py-12 px-8">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-foreground mb-2">Jogos Multiplayer</h1>
              <p className="text-muted-foreground">
                Jogue com amigos ou faça novos amigos online
              </p>
            </div>
            <GameGrid games={multiplayerGames} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Multiplayer;
