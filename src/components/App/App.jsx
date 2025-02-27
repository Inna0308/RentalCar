import { Route, Routes } from "react-router-dom";

import Header from "../Header/Header";
import HomePage from "../../pages/HomePage/HomePage";
import CatalogPage from "../../pages/CatalogPage";
import CarPage from "../../pages/CarPage";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/catalog/:id" element={<CarPage />} />
      </Routes>
    </div>
  );
}

export default App;
