import { Player, Controls } from '@lottiefiles/react-lottie-player';

export const AnimationMaterial = () => {
  return (
    <Player
      autoplay
      loop
      src="https://lottie.host/bcabfbd9-9218-4fa8-ab9a-e1391e499a67/sJwLjnvPcq.json"
    >
      <Controls visible={false} buttons={["play", "repeat", "frame", "debug"]} />
    </Player>
  )
}
