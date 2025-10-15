import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { GameGrid } from "@/components/GameGrid";
import { featuredGames, newGames, trendingGames } from "@/data/games";
import heroImage from "@/assets/hero-gaming.jpg";
import logoArlequim from "@/assets/logo-arlequim.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="ml-64 flex-1">
          {/* Hero Section */}
          <section
            className="relative h-[400px] bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            <img 
              src={logoArlequim} 
              alt="Arlequim Logo" 
              className="absolute top-8 left-8 h-64 w-auto z-10"
            />
            <div className="relative container h-full flex flex-col justify-end pb-12 px-8">
              <h1 className="text-5xl font-bold text-foreground mb-4">
                Aprender nunca foi tão divertido!
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Jogue, crie e explore com a Arlequim no Minecraft Education! 🚀
              </p>
            </div>
          </section>

          {/* Game Grids */}
          <div className="container space-y-12 py-12 px-8">
            <GameGrid games={featuredGames} title="🔥 Jogos em Destaque" />
            <GameGrid games={trendingGames} title="📈 Trending Agora" />
            <GameGrid games={newGames} title="✨ Jogos Novos" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
