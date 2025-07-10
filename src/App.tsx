import ReactConfetti from "react-confetti";
import { useWindowSize } from "react-use";
import PokemonDisplay from "./components/pokemon-display";
import PokemonForm from "./components/pokemon-form";
import PokemonResult from "./components/pokemon-result";
import { GameState, useGameManager } from "./hooks/use-game-manager";
import PokemonStats from "./components/pokemon-stats";

const App = () => {
  const {
    loadNewPokemon,
    pokemon,
    error,
    isLoading,
    gameState,
    handlePokemonNameSubmit,
    wins,
    losses,
    effectiveness,
  } = useGameManager();

  const { width, height } = useWindowSize(); // para tamaño de la ventana

  if (error) {
    return <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">{error}</div>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      {gameState === GameState.Correct && (
        <ReactConfetti
          width={width}
          height={height}
          numberOfPieces={300}
          recycle={false}
        />
      )}
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
        <PokemonDisplay
          pokemon={pokemon}
          isLoading={isLoading}
          gameState={gameState}
        />
        <PokemonForm
          gameState={gameState}
          handlePokemonNameSubmit={handlePokemonNameSubmit}
        />
        <PokemonResult
          loadNewPokemon={loadNewPokemon}
          gameState={gameState}
        />
        <PokemonStats wins={wins} losses={losses} effectiveness={effectiveness} />
      </div>
    </div>
  );
};
export default App;
