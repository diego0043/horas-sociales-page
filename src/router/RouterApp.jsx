import { Route, Routes } from "react-router-dom";
import {
  HomePage,
  GamePage,
  GameListPage,
  ErrorPage,
  MaterialPage,
} from "../pages/index";
import { MaterialListPage } from "../pages/MaterialListPage";

export const RouterApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/juegos" element={<GamePage />} />
      <Route path="/juegos/:unidad" element={<GameListPage />} />
      <Route path="/material" element={<MaterialPage />} />
      <Route path="/material/:unidad" element={<MaterialListPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
