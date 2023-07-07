import { CardGame } from "./CardGame";
import { dataGames } from "./helpers/dataGames";
export const GamesList = () => {
  return (
    <div className="container-games-list">
      {dataGames.map((unit) => {
        return <CardGame key={unit.id} {...unit} />;
      })}
    </div>
  );
};
