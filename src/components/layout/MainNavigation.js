import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-context";
import classes from "./MainNavigation.module.css";
function MainNavigation() {
  const favoritesContext = useContext(FavoritesContext);
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups </div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meet ups</Link>
          </li>
          <li>
            <Link to="/favorite">
              Favorites MeetUps
              <span className={classes.badge}>
                {favoritesContext.totalFavorites}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/newMeetUps"> New Meet ups</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
