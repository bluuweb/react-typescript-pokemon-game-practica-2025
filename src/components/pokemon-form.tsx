import { useState } from "react";
import type { GameState } from "../hooks/use-game-manager";

interface Props {
  handlePokemonNameSubmit: (userInput: string) => void;
  gameState: GameState;
}

const PokemonForm = ({ handlePokemonNameSubmit, gameState }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) {
      console.log("Input is empty");
      return;
    }
    handlePokemonNameSubmit(inputValue.trim().toLowerCase());
    setInputValue(""); // Clear input after submission
  };

  return (
    <form
      className="flex my-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="¿Quién es ese Pokémon?"
        aria-label="¿Quién es ese Pokémon?"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        autoFocus
        disabled={gameState !== "playing"}
      />
      <button
        className="px-4 py-2 bg-gray-800 text-white font-semibold rounded-r-md hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        type="submit"
        disabled={!inputValue.trim() || gameState !== "playing"}
      >
        Jugar
      </button>
    </form>
  );
};
export default PokemonForm;
