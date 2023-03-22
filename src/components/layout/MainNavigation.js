import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>Great Qoutes</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/qoutes" activeClassName={classes.active}>
              All Quotes
            </NavLink>
          </li>

          <li>
            <NavLink to="/new-qoute" activeClassName={classes.active}>
              New Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
