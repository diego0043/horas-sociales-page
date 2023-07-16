import { useEffect, useState } from "react";
import { MaterialListTitles } from "./MaterialListTitles";
import { dataMaterial } from "../helpers/dataMaterial";
import { MateriaListCard } from "./MaterialListCard";

export const MaterialListContainer = () => {
  const [unidad, setUnidad] = useState([]);
  const [titleMaterial, setTitleMaterial] = useState("");
  const data = JSON.parse(localStorage.getItem("objectActual"));
  const [{ title, description, id, image }] = data;

  const getDataUnitActual = (id) => {
    const dataUnitActual = dataMaterial.filter((unit) => unit.id === id);
    const [{ docs = [] } = {}] = dataUnitActual;
    const [{ name = "" } = ""] = dataUnitActual;
    setTitleMaterial(name);
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
        <div className="row container-fluid mt-5 mb-5 row-table shadow">
          <div className="col-7">
            <span className="">Nombre del archivo</span>
          </div>
          <div className="col-2 text-center">
            <span className="">Tipo de documento</span>
          </div>
          <div className="col-3 text-center">
            <span className="">Opciones</span>
          </div>
        </div>
        <div className="row">
          {unidad.map((unit) => {
             return <MateriaListCard key={unit.id} name={titleMaterial} {...unit} />; 
          })}
        </div>
      </div>
      <div className="fix-m-games-mobile d-block d-md-none d-lg-none d-xl-none"></div>
    </>
  );
};
