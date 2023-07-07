import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { GamePage } from "../pages/GamePage";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/juegos" element={<GamePage />} />
    </Routes>
  );
};
