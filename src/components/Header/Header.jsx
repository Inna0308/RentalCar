import { NavLink } from "react-router-dom";

import clsx from "clsx";

import sprite from "../../assets/icon/sprite.svg";

import styles from "./Header.module.css";

const buildClassName = ({ isActive }) => clsx(styles.link, isActive && styles.active);

const Header = () => {
  return (
    <header>
      <div className={styles.header}>
        <NavLink to="/">
          <svg width="104" height="16">
            <use href={`${sprite}#icon-Logo`}></use>
          </svg>
        </NavLink>

        <nav>
          <NavLink className={buildClassName} to="/">
            Home
          </NavLink>
          <NavLink className={buildClassName} to="/catalog" end>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
