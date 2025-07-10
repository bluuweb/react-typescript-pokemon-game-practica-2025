import { GameState } from "../hooks/use-game-manager";
import type { Pokemon } from "../types/pokemon.interface";
import Spinner from "./spinner";

interface Props {
  pokemon: Pokemon | null;
  isLoading: boolean;
  gameState: GameState;
}

const PokemonDisplay = ({ pokemon, isLoading, gameState }: Props) => {
  const showAnswer = gameState !== GameState.Playing;
  const image = pokemon?.image;
  const name = pokemon?.name;

  console.log(name);

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 bg-gray-200">
        <h1 className="text-2xl font-bold text-center">
          {showAnswer ? name?.toUpperCase() : "¿Quién es ese Pokémon?"}
        </h1>
      </div>
      <div className="p-4 flex justify-center items-center min-h-[300px]">
        {isLoading ? (
          <Spinner />
        ) : (
          <img
            src={image}
            alt="Pokémon"
            className={`max-h-[300px] transition-all duration-500 ease-in-out ${showAnswer ? "filter-none opacity-100" : "filter brightness-0 opacity-100"}`}

          />
        )}
      </div>
    </div>
  );
};
export default PokemonDisplay;
