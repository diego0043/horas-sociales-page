import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const AnimationGame = () => {
  return (
    <Player
      autoplay
      loop
      src="https://assets2.lottiefiles.com/packages/lf20_sy6mqjxk.json"
      style={{ height: "400px", width: "400px" }}
    >
      <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
    </Player>
  )
}
