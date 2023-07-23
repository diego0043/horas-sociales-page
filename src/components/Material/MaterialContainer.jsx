import { AnimationMaterial } from "./AnimationMaterial";
import { MaterialList } from "./MaterialList";
export const MaterialContainer = () => {
  return (
    <>
      <div className="row container-fluid fix-navbar">
        <div className="col-12 col-md-5 col-lg-5 col-xl-5 container">
          <div className="container-animation-game">
            <p className="text-center text-secondary fix-material">
              ¡Despierta tu curiosidad y déjate llevar por el fascinante
              universo de la lectura! Aqui encontraras materiales educativos que
              te ayudarán a aprender de forma divertida y entretenida.
            </p>
            <AnimationMaterial />
          </div>
        </div>
        <div className="col-12 col-md-7  col-lg-7 col-xl-7  container">
          <div className="container-text-game">
            {" "}
            <MaterialList />
          </div>
        </div>
      </div>
    </>
  );
};
