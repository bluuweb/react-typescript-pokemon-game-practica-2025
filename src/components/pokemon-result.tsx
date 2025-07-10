import { GameState } from "../hooks/use-game-manager";
import { useState, useEffect } from "react";

interface Props {
  loadNewPokemon: () => void;
  gameState: GameState;
}

const PokemonResult = ({ loadNewPokemon, gameState }: Props) => {
  const [showFlash, setShowFlash] = useState(false);

  useEffect(() => {
    if (gameState !== GameState.Playing) {
      setShowFlash(true);
      const timer = setTimeout(() => {
        setShowFlash(false);
      }, 500); // Duración de la animación
      return () => clearTimeout(timer);
    }
  }, [gameState]);

  if (gameState === GameState.Playing) {
    return null; // No result to show while playing
  }

  return (
    <div className="relative">
      {showFlash && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-48 h-48 bg-yellow-300 rounded-full animate-flash opacity-0"></div>
        </div>
      )}
      <div
        className={`p-4 rounded-lg text-center mt-4 ${gameState === GameState.Correct ? "bg-green-100 border border-green-400 text-green-700" : "bg-red-100 border border-red-400 text-red-700"}`}
      >
        {gameState === GameState.Correct ? (
          <h2 className="text-2xl font-bold mb-2">
            ¡Correcto!
          </h2>
        ) : (
          <h2 className="text-2xl font-bold mb-2">
            ¡Incorrecto!
          </h2>
        )}
        <button
          className="px-6 py-2 bg-gray-800 text-white font-semibold rounded-md hover:bg-gray-700 transition-colors duration-300"
          onClick={loadNewPokemon}
        >
          Volver a jugar
        </button>
      </div>
    </div>
  );
};
export default PokemonResult;
