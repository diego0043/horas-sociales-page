import { Link } from "react-router-dom";
import { AnimationHomeMaterial } from "./AnimationHomeMaterial";

export const MaterialHome = () => {
  return (
    <>
      <div className="container-fluid games-home  fixed-games-home fix-m-btn m-fix-mobile row">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 container-text-game-home">
          <div className="text-game-home">
            <div className="title-home fix-title-m">
              ¿Buscas <span className="text-red">material</span> de apoyo para
              tus clases? ¡Estás en el <span className="text-red">lugar</span>{" "}
              correcto!
            </div>
            <h2 className="subtitle-home-game fix-title-p">
              Explora un mundo de aprendizaje digital diseñado para estudiantes
              de cuarto grado
            </h2>
            <Link
              to="/material"
              className="btn btn-lg btn-block btn-home-material d-none d-md-block d-lg-block d-xl-block"
            >
              Ver material
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 animation-material">
          <AnimationHomeMaterial />
        </div>
        <Link
          to="/material"
          className="btn btn-lg btn-block btn-home-material d-block d-md-none d-lg-none d-xl-none"
        >
          Ver material
        </Link>
      </div>
    </>
  );
};
