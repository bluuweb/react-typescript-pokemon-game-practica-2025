interface Props {
  wins: number;
  losses: number;
  effectiveness: number;
}

const PokemonStats = ({ wins, losses, effectiveness }: Props) => {
  return (
    <div className="card mt-4">
      <div className="card-header">
        <h2 className="text-center">Estadísticas del Juego</h2>
      </div>
      <div className="card-body text-center">
        <p className="card-text">Victorias: {wins}</p>
        <p className="card-text">Derrotas: {losses}</p>
        <p className="card-text">Efectividad: {effectiveness.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default PokemonStats;