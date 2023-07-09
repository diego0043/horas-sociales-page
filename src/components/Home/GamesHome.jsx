import img1 from "../../assets/SVG/DrawKit Vector Illustration Influencer & Content Creator Illustrations (1).svg";
import img2 from "../../assets/SVG/DrawKit Vector Illustration Influencer & Content Creator Illustrations (2).svg";
import img3 from "../../assets/SVG/DrawKit Vector Illustration Influencer & Content Creator Illustrations (3).svg";
import img4 from "../../assets/SVG/DrawKit Vector Illustration Influencer & Content Creator Illustrations (5).svg";
export const GamesHome = () => {
  return (
    <>
      <div className="container-fluid games-home">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 images-carousel">
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="3000">
                <img src={img1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-carousel-dif">
                  <h5 className="title-carousel">INVESTIGAMOS NOTICIAS</h5>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={img2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-carousel-dif">
                  <h5 className="title-carousel">LEEMOS LAS NARRACIONES</h5>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={img3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-carousel-dif">
                  <h5 className="title-carousel">INVESTIGAMOS ACRÓSTICOS</h5>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="3000">
                <img src={img4} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block text-carousel-dif">
                  <h5 className="title-carousel">CONOZCAMOS LOS MITOS</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 container-text-game-home">
          <div className="text-game-home">
            <div className="title-home">
              Muchos juegos para aprender y divertirse como nunca antes.
            </div>
            <h2 id="games-home-red" className="subtitle-home-game">
              Explora un mundo de aprendizaje digital diseñado para estudiantes
              de cuarto grado
            </h2>
            <button className="btn btn-danger btn-lg btn-block btn-home">
              Ir a juegos
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
