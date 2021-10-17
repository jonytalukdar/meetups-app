import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetip) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {},
});

const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevsState) => {
      return [...prevsState, favoriteMeetup];
    });
  };

  const removeFavoriteHandler = (id) => {
    setUserFavorites((prevState) => {
      return prevState.filter((meetup) => meetup.id !== id);
    });
  };

  const isItemFavoriteHandler = (id) => {
    return userFavorites.some((meetup) => meetup.id === id);
  };

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    isFavorite: isItemFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
