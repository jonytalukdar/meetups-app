import { createContext, useEffect, useState } from 'react';

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  console.log(userFavorites);

  function addFavoriteHandler(favoriteMeetup) {
    fetch(
      'https://portfolio-5220b-default-rtdb.asia-southeast1.firebasedatabase.app/favorites.json',
      {
        method: 'POST',
        body: JSON.stringify(favoriteMeetup),
        headers: {
          'Conent-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        setUserFavorites((prevUserFavorites) => {
          return [...prevUserFavorites, { id: data.name, ...favoriteMeetup }];
        });
      });
  }

  useEffect(() => {
    fetch(
      `https://portfolio-5220b-default-rtdb.asia-southeast1.firebasedatabase.app/favorites.json`
    )
      .then((response) => response.json())
      .then((data) => {
        const newData = [];

        for (const key in data) {
          const newFavorites = {
            id: key,
            ...data[key],
          };
          newData.push(newFavorites);
        }
        setUserFavorites(newData);
      });
  }, []);

  function removeFavoriteHandler(meetupId) {
    console.log(meetupId);

    fetch(
      `https://portfolio-5220b-default-rtdb.asia-southeast1.firebasedatabase.app/favorites/${meetupId}.json`,
      {
        method: 'DELETE',
      }
    ).then((response) => {
      setUserFavorites((prevUserFavorites) => {
        return prevUserFavorites.filter((meetup) => meetup.id !== meetupId);
      });
    });
  }

  function itemIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
