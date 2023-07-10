import { GameListCard } from "./GameListCard";
import { GameListTitles } from "./GameListTitles";
import { dataGames } from "../helpers/dataGames";
import { useEffect, useState } from "react";

export const GameListContainer = () => {
  const [unidad, setUnidad] = useState([]);
  const data = JSON.parse(localStorage.getItem("objectActual"));
  const [{ title, description, id, image }] = data;

  const getDataUnitActual = (id) => {
    const dataUnitActual = dataGames.filter((unit) => unit.id === id);
    const [{ games }] = dataUnitActual;
    setUnidad(games);
  };

  useEffect(() => {
    getDataUnitActual(id);
  }, [id]);

  return (
    <>
      <div className="container fix-navbar">
        <div className="row">
          <GameListTitles
            title={title}
            description={description}
            id={id}
            image={image}
          />
        </div>

        <div className="row container-cards-list">
          {unidad.map((game) => {
            return <GameListCard key={game.title} {...game} />;
          })}
        </div>
      </div>
      <div className="fix-m-games-mobile d-block d-md-none d-lg-none d-xl-none"></div>
    </>
  );
};
