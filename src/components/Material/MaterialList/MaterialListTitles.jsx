/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export const MaterialListTitles = ({ title, description, id, image }) => {
    return (
      <>
        <div className="row">
          <div className="col-12 col-md-7 col-lg-7 col-xl-7">
            <div className="title-game-list">
              UNIDAD {id} {title}
            </div>
            <div className="subtitle-game-list">{description}</div>
          </div>
          <div className="col-12 col-md-5 col-lg-5 col-xl-5">
            <img className="img-game-list" src={image} alt="" />
          </div>
        </div>
      </>
    );
  };
  