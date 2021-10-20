import React, { useContext } from 'react';
import { FavoritesContext } from '../../store/favorite-context';
import Card from '../UI/Card';
import classes from './MeetupItem.module.css';
const MeetupItem = ({ meetup }) => {
  const { id, image, title, description, address } = meetup;

  const { addFavorite, removeFavorite, isFavorite } =
    useContext(FavoritesContext);

  const isItemFavorite = isFavorite(id);

  console.log(isItemFavorite);

  const toggleFavoriteHandler = () => {
    if (isItemFavorite) {
      removeFavorite(id);
    } else {
      addFavorite(meetup);
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteHandler}>
            {isItemFavorite ? 'Remove From Favorite' : 'Add To Favorite'}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
