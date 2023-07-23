/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import { useState } from "react";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
export const CardMaterial = ({ id, title, description, games, image }) => {
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();

  const handleData = () => {
    const objectActual = [{ id, title, description, games, image }];
    setInfo(objectActual);
    localStorage.setItem("objectActual", JSON.stringify(objectActual));
    navigate(`/material/unidad_${id}`);
    /* Nos moveremos con react router a la unidad seleccionada */
  };

  return (
    <>
      <div className="container-card shadow-sm animate__animated animate__slideInRight">
        <div className="row container">
          <div className="col-7">
            <div className="row">
              <span className="title-card">{title}</span>
            </div>
            <div className="row d-none d-md-block d-lg-block d-xl-block">
              <span className="p-card">{description}</span>
            </div>
          </div>
          <div className="col-5 container-img">
            <button onClick={handleData} className="btn-card fix-btn-material">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                fill="currentColor"
                className="d-none d-md-block d-lg-block d-xl-block"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="d-block d-md-none d-lg-none d-xl-none"
                viewBox="0 0 16 16"
              >
                <path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z" />
              </svg>
              <span className="d-block d-md-none d-lg-none d-xl-none">
                Ver material
              </span>
            </button>
            <img src={image} className="img-fluid img-card" />
          </div>
        </div>
      </div>
    </>
  );
};
