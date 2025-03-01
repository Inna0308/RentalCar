import CarDetails from "../components/CarDetails/CarDetails";

import globalStyles from "../components/App/App.module.css";

const CarPage = () => {
  return (
    <div className={globalStyles.container}>
      <CarDetails />
    </div>
  );
};

export default CarPage;
