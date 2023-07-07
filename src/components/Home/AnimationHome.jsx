import { Player, Controls } from '@lottiefiles/react-lottie-player';
export const AnimationHome = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets8.lottiefiles.com/packages/lf20_sknsem5j.json"
      style={{ height: "300px", width: "300px" }}
    >
      <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
    </Player>
  );
};
