import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { selectCars, selectIsLoading } from "../../redux/car/selectors";

import Loader from "../Loader/Loader";

import { getCity, getCountry } from "../../utils/address";

import styles from "./Cars.module.css";
import LoadMore from "../LoadMore/LoadMore";

const Cars = () => {
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);

  return (
    <>
      <div className={styles.carsContainer}>
        {cars.map((car) => (
          <div key={car.id} className={styles.carCard}>
            <img src={car.img} alt={car.brand} className={styles.carImage} />
            <div className={styles.carDetails}>
              <h3 className={styles.carsGeneral}>
                <p>
                  {car.brand}
                  <span className={styles.carsSpanModel}> {car.model}</span>, {car.year}
                </p>
                <p className={styles.carsPrice}>{car.rentalPrice}$</p>
              </h3>
              <div className={styles.carsAdditionally}>
                <span>{getCity(car.address)}</span>
                <span>{getCountry(car.address)}</span>
                <span>{car.rentalCompany}</span> <br />
                <span>{car.type}</span>
                <span>{car.mileage} km</span>
              </div>
            </div>
            <Link to={`/catalog/${car.id}`}>
              <button type="button" className={styles.carsBtn}>
                Read more
              </button>
            </Link>
          </div>
        ))}
      </div>

      {isLoading ? (
        <div className={styles.carsLoader}>
          <Loader />
        </div>
      ) : (
        cars.length > 0 && <LoadMore />
      )}
    </>
  );
};

export default Cars;
