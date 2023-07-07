import { AnimationGame } from "./AnimationGame";
import { GamesList } from "./GamesList";

export const GameContainer = () => {
  return (
    <>
      <div className="row container-fluid">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 container">
          <div className="container-animation-game">
            <p className="text-center text-secondary">
              Descubre el poder de aprender mientras te diviertes. Nuestros
              juegos educativos hacen que adquirir conocimiento sea emocionante
              y entretenido.
            </p>
            <AnimationGame />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 container">
          <div className="container-text-game">
            <GamesList />
          </div>
        </div>
      </div>
    </>
  );
};
