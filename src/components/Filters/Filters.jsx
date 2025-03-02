import Select from "react-select";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCarBrends, fetchCars } from "../../redux/car/operations";

import { setFilter } from "../../redux/filters/slice.js";

import { selectBrands } from "../../redux/car/selectors";
import { selectFilter, selectMileageFrom, selectMileageTo } from "../../redux/filters/selectors.js";

import { customStylesBrand } from "../../utils/selectBrand.js";

import styles from "./Filters.module.css";

const formatNumber = (value) => {
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Filters = () => {
  const dispatch = useDispatch();

  const brand = useSelector(selectBrands);
  const filter = useSelector(selectFilter);
  const mileageFrom = useSelector(selectMileageFrom);
  const mileageTo = useSelector(selectMileageTo);

  const handleSearch = () => {
    dispatch(fetchCars(filter));
  };

  const handleMileageFromChange = (e) => {
    let value = e.target.value.replace(/[^\d]/g, "");
    value = formatNumber(value);
    dispatch(setFilter({ mileageFrom: value }));
  };

  const handleMileageToChange = (e) => {
    let value = e.target.value.replace(/[^\d]/g, "");
    value = formatNumber(value);
    dispatch(setFilter({ mileageTo: value }));
  };

  useEffect(() => {
    dispatch(fetchCarBrends());
    dispatch(fetchCars({}));
  }, [dispatch]);

  const clearAllFilters = () => {
    dispatch(setFilter({ brand: "Choose a brand", price: "Choose a price", mileageFrom: "", mileageTo: "" }));
    dispatch(fetchCars({}));
  };

  return (
    <>
      <div className={styles.filterContainer}>
        <div>
          <p className={styles.filterTitle}>Car brand</p>
          <Select
            options={brand.map((brand) => ({ label: brand, value: brand }))}
            styles={customStylesBrand}
            placeholder="Choose a brand"
            onChange={(e) => dispatch(setFilter({ brand: e.value }))}
            value={filter.brand ? { label: filter.brand, value: filter.brand } : null}
          />
        </div>
        <div>
          <p className={styles.filterTitle}>Car mileage / km</p>
          <div className={styles.mileageInputs}>
            <input
              type="text"
              value={`From ${mileageFrom}`}
              onChange={handleMileageFromChange}
              className={styles.mileageFrom}
              placeholder="From"
            />
            <input
              type="text"
              value={`To ${mileageTo}`}
              onChange={handleMileageToChange}
              className={styles.mileageTo}
              placeholder="To"
            />
          </div>
        </div>
        <button type="button" className={styles.filterBtn} onClick={handleSearch}>
          Search
        </button>
        <button type="button" className={styles.resetBtn} onClick={clearAllFilters}>
          Reset
        </button>
      </div>
    </>
  );
};

export default Filters;
