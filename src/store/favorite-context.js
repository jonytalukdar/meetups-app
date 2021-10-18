import React, { createContext, useEffect } from 'react';
import { useState } from 'react/cjs/react.development';

export const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {},
});

const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  console.log(userFavorites);

  const addFavoriteHandler = (favoriteMeetup) => {
    fetch(
      'https://portfolio-5220b-default-rtdb.asia-southeast1.firebasedatabase.app/favorites.json',
      {
        method: 'POST',
        body: JSON.stringify(favoriteMeetup || null),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );

    setUserFavorites((prevState) => {
      return [...prevState, favoriteMeetup];
    });
  };

  const fetchFavorites = async () => {
    const response = await fetch(
      'https://portfolio-5220b-default-rtdb.asia-southeast1.firebasedatabase.app/favorites.json'
    );

    const data = await response.json();

    const newData = [];
    // convert object to arry
    for (const key in data) {
      const favorites = {
        id: key,
        ...data[key],
      };

      newData.push(favorites);
    }

    setUserFavorites(newData);
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  const removeFavoriteHandler = (id) => {
    fetch(
      `https://portfolio-5220b-default-rtdb.asia-southeast1.firebasedatabase.app/${id}.json`,
      {
        method: 'DELETE',
      }
    );

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
