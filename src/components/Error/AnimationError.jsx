import { Player, Controls } from "@lottiefiles/react-lottie-player";
export const AnimationError = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets6.lottiefiles.com/packages/lf20_F3k8xS.json"
        style={{ height: "400px", width: "400px" }}
    >
      <Controls
        visible={false}
        buttons={["play", "repeat", "frame", "debug"]}
      />
    </Player>
  );
};
