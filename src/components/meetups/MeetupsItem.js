import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import Card from "../ui/Card";
import classes from "./MeetupsItem.module.css";
function MeetupsItem(props) {
  const favContext = useContext(FavoritesContext);
  const itemIsFavorites = favContext.itemIsFavorite(props.id);
  function toggleFavoritesStatusHandler() {
    if (itemIsFavorites) {
      favContext.removeFavorite(props.id);
    } else {
      favContext.addFavorite({
        id: props.id,
        Title: props.Title,
        Desc: props.Desc,
        image: props.image,
        Address: props.Address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.Title}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.Title}</h3>

          <address>{props.Address}</address>
          <p>{props.Desc}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoritesStatusHandler}>
            {itemIsFavorites ? "Remove from Fav" : "Add To Fav"}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default MeetupsItem;
