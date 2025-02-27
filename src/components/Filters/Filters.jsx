import Select from "react-select";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchCarBrends, fetchCars } from "../../redux/car/operations";

import { setFilter } from "../../redux/filters/slice.js";

import { selectBrands } from "../../redux/car/selectors";
import { selectFilter, selectMileageFrom, selectMileageTo } from "../../redux/filters/selectors.js";

import { customStylesBrand } from "../../utils/selectBrand.js";
/* import { customStylesPrice } from "../../utils/selectPrice.js"; */

import styles from "./Filters.module.css";

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
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      console.log("Mileage From:", value);
      dispatch(setFilter({ mileageFrom: value }));
    }
  };

  const handleMileageToChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      console.log("Mileage To:", value);
      dispatch(setFilter({ mileageTo: value }));
    }
  };

  useEffect(() => {
    dispatch(fetchCarBrends());
    dispatch(fetchCars({}));
  }, [dispatch]);

  /*   const priceOptions = Array.from({ length: (150 - 30) / 10 + 1 }, (_, i) => {
    const value = 30 + i * 10;
    return { label: `${value}`, value };
  }); */

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
          />
        </div>
        {/* <div>
          <p className={styles.filterTitle}>Price/ 1 hour</p>
          <Select
            options={priceOptions}
            styles={customStylesPrice}
            placeholder="Choose a price"
            onChange={(e) => dispatch(setFilter({ price: e.value }))}
          />
        </div> */}
        <div>
          <p className={styles.filterTitle}>Car mileage / km</p>
          <div className={styles.mileageInputs}>
            <input
              type="text"
              value={mileageFrom}
              onChange={handleMileageFromChange}
              className={styles.mileageFrom}
              placeholder="From"
            />
            <input
              type="text"
              value={mileageTo}
              onChange={handleMileageToChange}
              className={styles.mileageTo}
              placeholder="To"
            />
          </div>
        </div>
        <button type="button" className={styles.filterBtn} onClick={handleSearch}>
          Search
        </button>
      </div>
    </>
  );
};

export default Filters;
