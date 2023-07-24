import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import animationData from "../../assets/animations/Animation - 1689137864811.json";
export const AnimationHomeGameMobile = () => {
  const animationContainer = useRef(null);

  useEffect(() => {
    // Inicializar la animación al montar el componente
    lottie.loadAnimation({
      container: animationContainer.current,
      animationData: animationData,
      loop: true, // Opcional: Establece si la animación debe repetirse en bucle
      autoplay: true, // Opcional: Establece si la animación debe iniciar automáticamente
    });

    // Limpiar la animación al desmontar el componente
    return () => {
      lottie.destroy();
    };
  }, []);

  return <div ref={animationContainer} />;
};
