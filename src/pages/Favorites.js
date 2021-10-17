import React, { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
import { FavoritesContext } from '../store/favorite-context';

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  let content;

  if (favorites.length === 0) {
    content = <h2>You got no favorite meetup. add some ?</h2>;
  } else {
    content = (
      <section>
        <h2>My Favorites</h2>
        {favorites.length === 0 && <h2>No Favorite Meetups</h2>}
        <MeetupList meetups={favorites} />
      </section>
    );
  }

  return <>{content}</>;
};

export default Favorites;
