/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
export const GameListTitles = ({ title, description, id, image }) => {
  return (
    <>
      <div className="row">
        <div className="col-7">
          <div className="title-game-list">
            UNIDAD {id} {title}
          </div>
          <div className="subtitle-game-list">{description}</div>
        </div>
        <div className="col-5">
          <img className="img-game-list" src={image} alt="" />
        </div>
      </div>
    </>
  );
};
