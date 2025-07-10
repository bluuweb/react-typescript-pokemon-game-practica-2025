interface Props {
  wins: number;
  losses: number;
  effectiveness: number;
}

const PokemonStats = ({ wins, losses, effectiveness }: Props) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-4">
      <div className="p-4 bg-gray-200">
        <h2 className="text-xl font-bold text-center">Estadísticas del Juego</h2>
      </div>
      <div className="p-4 text-center">
        <p className="text-lg">Victorias: {wins}</p>
        <p className="text-lg">Derrotas: {losses}</p>
        <p className="text-lg">Efectividad: {effectiveness.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default PokemonStats;