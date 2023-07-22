import { Player, Controls } from "@lottiefiles/react-lottie-player";
export const AnimationHomeGames = () => {
  return (
    <Player
      autoplay
      loop
      src="https://lottie.host/c6d7d725-163a-4f1e-9731-0b12c585261e/juByZQHdiW.json"
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
};
