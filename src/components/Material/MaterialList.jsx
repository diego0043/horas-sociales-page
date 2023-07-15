import { CardMaterial } from "./CardMaterial";
import { dataGames } from "../Games/helpers/dataGames";
export const MaterialList = () => {
  return (
    <div className="container-games-list row">
      {dataGames.map((unit) => {
        return <CardMaterial key={unit.id} {...unit} />;
      })}
    </div>
  );
};
