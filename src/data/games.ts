import gameRacing from "@/assets/game-racing.jpg";
import gameAdventure from "@/assets/game-adventure.jpg";
import gameAction from "@/assets/game-action.jpg";
import gamePuzzle from "@/assets/game-puzzle.jpg";
import gameSports from "@/assets/game-sports.jpg";
import gameMultiplayer from "@/assets/game-multiplayer.jpg";

export const featuredGames = [
  { id: 1, title: "Corrida Neon", image: gameRacing, players: 12543, tag: "Popular" },
  { id: 2, title: "Aventura Mística", image: gameAdventure, players: 8932, tag: "Novo" },
  { id: 3, title: "Guerra Total", image: gameAction, players: 15234, tag: "Trending" },
  { id: 4, title: "Quebra-Cabeça Mágico", image: gamePuzzle, players: 6721 },
  { id: 5, title: "Super Basquete", image: gameSports, players: 9876, tag: "Atualizado" },
];

export const newGames = [
  { id: 6, title: "Batalha Espacial", image: gameAction, players: 3421, tag: "Novo" },
  { id: 7, title: "Mundo Fantástico", image: gameAdventure, players: 2876 },
  { id: 8, title: "Pista de Fogo", image: gameRacing, players: 4532, tag: "Novo" },
  { id: 9, title: "Arena PvP", image: gameMultiplayer, players: 7654, tag: "Novo" },
  { id: 10, title: "Desafio Mental", image: gamePuzzle, players: 1987 },
];

export const trendingGames = [
  { id: 11, title: "Champions League", image: gameSports, players: 23456, tag: "Top" },
  { id: 12, title: "Força Especial", image: gameAction, players: 18765, tag: "Top" },
  { id: 13, title: "Aventura Épica", image: gameAdventure, players: 16543 },
  { id: 14, title: "Velocidade Máxima", image: gameRacing, players: 14321, tag: "Top" },
  { id: 15, title: "Cooperativo Online", image: gameMultiplayer, players: 11234 },
];

export const multiplayerGames = [
  { id: 16, title: "Battle Royale 3D", image: gameMultiplayer, players: 34567, tag: "Popular" },
  { id: 17, title: "Equipe vs Equipe", image: gameAction, players: 21098 },
  { id: 18, title: "Corrida Multiplayer", image: gameRacing, players: 18976, tag: "Novo" },
  { id: 19, title: "Futebol Online", image: gameSports, players: 27654 },
  { id: 20, title: "Co-op Adventure", image: gameAdventure, players: 15432 },
];
