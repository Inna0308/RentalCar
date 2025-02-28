import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectCars, selectIsLoading } from "../../redux/car/selectors";

import { fetchCars } from "../../redux/car/operations";

import Loader from "../Loader/Loader";

import styles from "./Cars.module.css";

const Cars = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const cars = useSelector(selectCars);

  console.log("isLoading:", isLoading);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  function getCity(address) {
    const parts = address.split(",");

    const city = parts[1].trim();

    return city;
  }

  function getCountry(address) {
    const parts = address.split(",");

    const country = parts[2].trim();

    return country;
  }

  return (
    <>
      <div className={styles.carsContainer}>
        {isLoading ? (
          <div className={styles.carsLoader}>
            <Loader />
          </div>
        ) : (
          cars.map((car) => (
            <div key={car.id} className={styles.carCard}>
              <img src={car.img} alt={car.brand} className={styles.carImage} />
              <div className={styles.carDetails}>
                <h3 className={styles.carsGeneral}>
                  <span>{car.brand} </span>
                  <span className={styles.carsSpanModel}>{car.model}</span>
                  <span>, </span>
                  <span>{car.year}</span>
                  <span className={styles.carsSpanPrice}>{car.rentalPrice}$</span>
                </h3>
                <div className={styles.carsAdditionally}>
                  <span>{getCity(car.address)}</span>
                  <span>{getCountry(car.address)}</span>
                  <span>{car.rentalCompany}</span> <br />
                  <span>{car.type}</span>
                  <span>{car.mileage} km</span>
                </div>
              </div>
              <button type="button" className={styles.carsBtn}>
                Read more
              </button>
            </div>
          ))
        )}
      </div>
      {!isLoading && (
        <button type="button" className={styles.carsBtnLoadMore}>
          Load More
        </button>
      )}
    </>
  );
};

export default Cars;
