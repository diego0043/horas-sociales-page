import { useEffect, useState } from "react";
import { MaterialListTitles } from "./MaterialListTitles";
import { dataMaterial } from "../helpers/dataMaterial";

export const MaterialListContainer = () => {
  const [unidad, setUnidad] = useState([]);
  const data = JSON.parse(localStorage.getItem("objectActual"));
  const [{ title, description, id, image }] = data;

  const getDataUnitActual = (id) => {
    const dataUnitActual = dataMaterial.filter((unit) => unit.id === id);
    const [{ docs }] = dataUnitActual;
    setUnidad(docs);
  };

  useEffect(() => {
    getDataUnitActual(id);
  }, [id]);

  return (
    <>
      <div className="container fix-navbar">
        <div className="row">
          <MaterialListTitles
            title={title}
            description={description}
            id={id}
            image={image}
          />
        </div>

        <div>
            {JSON.stringify(unidad)}
        </div>

        {/* <div className="row container-cards-list">
          {unidad.map((game) => {
             return <GameListCard key={game.title} {...game} />; 
          })}
        </div> */}
      </div>
      <div className="fix-m-games-mobile d-block d-md-none d-lg-none d-xl-none"></div>
    </>
  );
};
