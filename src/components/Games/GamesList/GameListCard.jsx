/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line react/prop-types
export const GameListCard = ({ title, description, image, link }) => {

  //cambiar clase de imagen css cuando sea unidad 4 y 6 
  
  return (
    <>
      <div className="container-card-list container row shadow">
        <div className="col-5 col-md-5 col-lg-6 col-xl-6">
          <img className="img-container" src={image} alt={title} />
        </div>
        <div className="col-7 col-md-7 col-lg-6 col-xl-6">
          <span className="title-goGame">{title}</span>
          <p className="description-goGame">{description}</p>
          <a
            className="btn btn-goGame"
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Jugar{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-right"
              viewBox="0 0 16 16"
            >
              <path d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z" />
            </svg>
          </a>
        </div>
      </div>
    </>
  );
};
