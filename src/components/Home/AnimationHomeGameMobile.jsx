import { Player, Controls } from "@lottiefiles/react-lottie-player";
export const AnimationHomeGameMobile = () => {
  return (
    <Player
      autoplay
      loop
      src="https://lottie.host/7cfc705d-e140-4a54-b516-677ae70f4380/9jPqZvulAy.json"
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
};
