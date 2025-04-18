import { MagnifyingGlass } from "react-loader-spinner";

import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#0B44CD"
      />
    </div>
  );
}
