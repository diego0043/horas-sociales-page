import { Player, Controls } from "@lottiefiles/react-lottie-player";
export const AnimationHomeMaterial = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets6.lottiefiles.com/packages/lf20_xY418y0j6x.json"
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
};
