import { Link } from "react-router-dom";

import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.content}>
        <h1 className={styles.homeTitle}>Find your perfect rental car</h1>
        <p className={styles.homeText}>Reliable and budget-friendly rentals for any journey</p>
        <Link to="/catalog">
          <button className={styles.homeBtn}>View Catalog</button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
