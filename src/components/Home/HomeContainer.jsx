import { AnimationHome } from "./AnimationHome";
import { GamesHome } from "./GamesHome";
import { MaterialHome } from "./MaterialHome";
import { MessageHome } from "./MessageHome";

export const HomeContainer = () => {
  return (
    <>
      <div className="row container-fluid">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 container">
          <div className="d-none d-md-block d-lg-block d-xl-block container-text">
            <MessageHome />
          </div>
          <div className="d-block d-md-none d-lg-none d-xl-none container-animation">
            <AnimationHome />
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6 container">
          <div className="d-none d-md-block d-lg-block d-xl-block container-animation">
            <AnimationHome />
          </div>
          <div className="d-block d-md-none d-lg-none d-xl-none container-text">
            <MessageHome />
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <GamesHome /> 
      </div>
      <div className="container-fluid">
        <MaterialHome /> 
      </div>
    </>
  );
};
