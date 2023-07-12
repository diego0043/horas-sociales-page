import { AnimationError } from "./AnimationError";

export const ErrorComponent = () => {
  return (
    <>
      <div className="container-fluid container-error">
        <AnimationError />
      </div>
      <h2 className="error-title">Parece que algo salio mal</h2>
    </>
  );
};
