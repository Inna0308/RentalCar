import styles from "./LoadMore.module.css";

const LoadMore = () => {
  return (
    <div>
      <button type="button" className={styles.carsBtnLoadMore}>
        Load More
      </button>
    </div>
  );
};

export default LoadMore;
