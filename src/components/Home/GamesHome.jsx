import { Link } from "react-router-dom";
import { AnimationHomeGames } from "./AnmiationHomeGames";
import { AnimationHomeGameMobile } from "./AnimationHomeGameMobile";
export const GamesHome = () => {
  return (
    <>
      <div id="games-home-red" className="container-fluid fixed-games-home m-fix-mobile row">
        <div className="d-none d-md-none d-lg-flex d-xl-flex col-12 col-md-6 col-lg-6 col-xl-6 container-animation-gamesH">
          <AnimationHomeGames />
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 container-text-game-home">
          <div className="text-game-home">
            <div className="title-home title-home-game-mobile">
              <span className="text-blue-home">Muchos</span> juegos para
              aprender y <span className="text-red-home">divertirse</span> como{" "}
              <span className="text-blue-home">nunca </span>
              antes.
            </div>
            <h2 className="subtitle-home-game">
              Explora un mundo de aprendizaje digital diseñado para estudiantes
              de cuarto grado
            </h2>
          </div>
          <Link
            to="/juegos"
            className="d-none d-md-none d-lg-block d-xl-block btn btn-lg btn-block btn-home-game"
          >
            Ir a juegos
          </Link>
        </div>
        <div className="d-flex d-md-flex d-lg-none d-xl-none col-12 col-md-6 col-lg-6 col-xl-6 container-animation-gamesH">
          <AnimationHomeGameMobile />
        </div>
        <Link
          to="/juegos"
          className="d-block d-md-block d-lg-none d-xl-none btn btn-lg btn-block btn-home-game"
        >
          Ir a juegos
        </Link>
      </div>
    </>
  );
};
