import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/car/operations";
import styles from "./LoadMore.module.css";
import { selectFilter } from "../../redux/filters/selectors";
import { selectPage } from "../../redux/car/selectors";

const LoadMore = () => {
  const dispatch = useDispatch();
  const page = useSelector(selectPage);
  const filter = useSelector(selectFilter);

  const handleLoadMore = () => {
    dispatch(fetchCars({ filters: filter, page }));
  };

  return (
    <div>
      <button type="button" className={styles.carsBtnLoadMore} onClick={handleLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
