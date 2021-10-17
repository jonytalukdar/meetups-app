import { useEffect, useState } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'This is a first meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
  {
    id: 'm2',
    title: 'This is a second meetup',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg',
    address: 'Meetupstreet 5, 12345 Meetup City',
    description:
      'This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!',
  },
];

const AllMeetups = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [meetups, setMeetups] = useState([]);

  const fetchMeetups = async () => {
    setIsLoading(true);
    const response = await fetch(
      'https://portfolio-5220b-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
    );

    const data = await response.json();

    const newData = [];
    // convert object to arry
    for (const key in data) {
      const meetup = {
        id: key,
        ...data[key],
      };

      newData.push(meetup);
    }

    setMeetups(newData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchMeetups();
  }, []);

  if (isLoading) {
    return (
      <section style={{ textAlign: 'center' }}>
        <h2>Loading...</h2>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      {meetups.length === 0 ? (
        <h2>No Meetup Found</h2>
      ) : (
        <MeetupList meetups={meetups} />
      )}
    </section>
  );
};

export default AllMeetups;
