/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const CardGame = ({ id, title, description, games, image }) => {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();

  const handleData = () => {
    const objectActual = [{ id, title, description, games, image }];
    setInfo(objectActual);
    localStorage.setItem("objectActual", JSON.stringify(objectActual));
    navigate(`/juegos/unidad_${id}`);
    /* Nos moveremos con react router a la unidad seleccionada */
  };

  return (
    <>
      <div className="container-card shadow-sm">
        <div className="row container">
          <div className="col-7">
            <div className="row">
              <span className="title-card">{title}</span>
            </div>
            <div className="row">
              <span className="p-card">{description}</span>
            </div>
          </div>
          <div className="col-5 container-img">
            <button onClick={handleData} className="btn-card">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="bi bi-arrow-right"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </button>
            <img src={image} className="img-fluid img-card" />
          </div>
        </div>
      </div>
    </>
  );
};
