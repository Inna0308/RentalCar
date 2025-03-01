import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import FormRental from "../../components/FormRental/FormRental";

import { selectCurrentCar } from "../../redux/car/selectors";

import { getCity, getCountry } from "../../utils/address";

import { fetchCarById } from "../../redux/car/operations";

import sprite from "../../assets/icon/sprite.svg";

import styles from "./CarDetails.module.css";

const CarDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const currentCar = useSelector(selectCurrentCar);

  useEffect(() => {
    dispatch(fetchCarById(id));
  }, [id, dispatch]);

  return (
    <div>
      {currentCar && (
        <div className={styles.carContainer}>
          <div className={styles.carBloc1}>
            <img src={currentCar.img} alt={`${currentCar.brand} ${currentCar.model}`} className={styles.carImg} />
            <FormRental />
          </div>

          <div className={styles.carBloc2}>
            <p className={styles.carName}>
              {currentCar.brand} {currentCar.model}, {currentCar.year}
            </p>

            <div className={styles.carSpan}>
              <p className={styles.carText}>
                {getCity(currentCar.address)}, {getCountry(currentCar.address)}
              </p>
              <p className={styles.carText}>Mileage: {currentCar.mileage} km</p>
            </div>

            <p className={styles.carPrice}>${currentCar.rentalPrice}</p>
            <p className={styles.carDesc}>{currentCar.description}</p>

            <p className={styles.carTitleText}>Rental Conditions:</p>
            <div className={styles.carList}>
              {currentCar.rentalConditions.map((condition, index) => (
                <p key={index} className={styles.carText}>
                  <svg width="16" height="16" className={styles.carSvg}>
                    <use href={`${sprite}#icon-check-circle`}></use>
                  </svg>
                  {condition}
                </p>
              ))}
            </div>

            <p className={styles.carTitleText}>Car Specifications:</p>
            <div className={styles.carList}>
              <div className={styles.carDetails}>
                <svg width="16" height="16" className={styles.carSvg}>
                  <use href={`${sprite}#icon-calendar`}></use>
                </svg>
                <p className={styles.carText}>Year: {currentCar.year}</p>
              </div>
              <div className={styles.carDetails}>
                <svg width="16" height="16" className={styles.carSvg}>
                  <use href={`${sprite}#icon-car`}></use>
                </svg>
                <p className={styles.carText}>Type: {currentCar.type}</p>
              </div>
              <div className={styles.carDetails}>
                <svg width="16" height="16" className={styles.carSvg}>
                  <use href={`${sprite}#icon-fuel-pump`}></use>
                </svg>
                <p className={styles.carText}>Fuel Consumption: {currentCar.fuelConsumption}</p>
              </div>
              <div className={styles.carDetails}>
                <svg width="16" height="16" className={styles.carSvg}>
                  <use href={`${sprite}#icon-gear`}></use>
                </svg>
                <p className={styles.carText}>Engine Size: {currentCar.engineSize}</p>
              </div>
            </div>

            <p className={styles.carTitleText}>Accessories and functionalities:</p>
            <div className={styles.carList}>
              {[...currentCar.accessories, ...currentCar.functionalities].map((item, index) => (
                <p key={index} className={styles.carText}>
                  <svg width="16" height="16" className={styles.carSvg}>
                    <use href={`${sprite}#icon-check-circle`}></use>
                  </svg>
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CarDetails;
