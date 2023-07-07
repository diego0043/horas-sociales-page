import { AnimationHome } from "./AnimationHome";

export const HomeContainer = () => {
  return (
    <>
      <div className="row container">
        <div className="col-12 col-md-6 col-lg-6 col-xl-6"></div>
        <div className="col-12 col-md-6 col-lg-6 col-xl-6">
            <AnimationHome />
        </div>
      </div>
    </>
  );
};
