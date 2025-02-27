import Cars from "../components/Cars/Cars";
import Filters from "../components/Filters/Filters";

import globalStyles from "../components/App/App.module.css";

const CatalogPage = () => {
  return (
    <div className={globalStyles.container}>
      <Filters />
      <Cars />
    </div>
  );
};

export default CatalogPage;
