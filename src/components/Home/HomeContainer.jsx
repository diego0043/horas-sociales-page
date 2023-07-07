import { AnimationHome } from "./AnimationHome";
import { MessageHome } from "./MessageHome";

export const HomeContainer = () => {
  return (
    <>
      <div className="row container-fluid">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 container">
          <div className="container-text">
            <MessageHome />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 container">
          <div className="container-animation">
            <AnimationHome />
          </div>
        </div>
      </div>
    </>
  );
};
