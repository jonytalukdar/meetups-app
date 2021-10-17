import React, { createContext } from 'react';
import { useState } from 'react/cjs/react.development';

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavoriteHandler: () => {},
  removeFavoriteHandler: () => {},
  isItemFavoriteHandler: () => {},
});

const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevsState) => {
      return { ...prevsState, favoriteMeetup };
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
    fovorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavoriteHandler,
    removeFavoriteHandler,
    isItemFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
