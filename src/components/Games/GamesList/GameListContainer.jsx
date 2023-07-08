import { GameListCard } from "./GameListCard";
import { GameListTitles } from "./GameListTitles";

export const GameListContainer = () => {
  const data = JSON.parse(localStorage.getItem("objectActual"));
  const [{ title, description, id, image, games }] = data;

  return (
    <>
      <div className="container fix-navbar">
        <div className="row">
          <GameListTitles
            title={title}
            description={description}
            id={id}
            image={image}
          />
        </div>
        <div className="row container-cards-list">
          {games.map((game) => {
            return <GameListCard key={game.title} {...game} />;
          })}
        </div>
      </div>
    </>
  );
};
