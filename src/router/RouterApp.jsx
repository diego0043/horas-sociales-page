import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { GamePage } from "../pages/GamePage";
import { GameListPage } from "../pages/GameListPage";
import { ErrorPage } from "../pages/ErrorPage";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/juegos" element={<GamePage />} />
      <Route path="/juegos/:unidad" element={<GameListPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
