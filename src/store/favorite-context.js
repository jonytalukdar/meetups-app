import React, { createContext, useCallback, useState } from 'react';
import { useEffect } from 'react/cjs/react.development';

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

  const addFavoriteHandler = useCallback((favoriteMeetup) => {
    fetch(
      'https://portfolio-5220b-default-rtdb.asia-southeast1.firebasedatabase.app/favorites.json',
      {
        method: 'POST',
        body: JSON.stringify(favoriteMeetup),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setUserFavorites((prevUserFavorites) => {
          return [...prevUserFavorites, { id: data.name, ...favoriteMeetup }];
        });
      });
  }, []);

  // const fetchFavorites = () => {};

  useEffect(() => {
    fetch(
      'https://portfolio-5220b-default-rtdb.asia-southeast1.firebasedatabase.app/favorites.json'
    )
      .then((response) => response.json())
      .then((data) => {
        const newData = [];

        for (const key in data) {
          const newFavorite = {
            id: key,
            ...data[key],
          };
          newData.push(newFavorite);
        }

        setUserFavorites(newData);
      });
  }, [addFavoriteHandler, setUserFavorites]);

  const removeFavoriteHandler = (id) => {
    console.log(id);
    fetch(
      `https://portfolio-5220b-default-rtdb.asia-southeast1.firebasedatabase.app/favorites/${id}.json`,
      {
        method: 'DELETE',
      }
    ).then((response) => {
      setUserFavorites((prevState) => {
        return prevState.filter((meetup) => meetup.id !== id);
      });
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
