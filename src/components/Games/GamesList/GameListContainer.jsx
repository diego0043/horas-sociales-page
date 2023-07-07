import { GameListTitles } from "./GameListTitles";

export const GameListContainer = () => {
  const data = JSON.parse(localStorage.getItem("objectActual"));
  const [{ title, description, id, image /* , games */ }] = data;

  return (
    <>
      <div className="container">
        <div className="row">
          <GameListTitles
            title={title}
            description={description}
            id={id}
            image={image}
          />
        </div>
        <div className="row">
            
        </div>
      </div>
    </>
  );
};
