import React from 'react';
import MeetupForm from '../components/meetups/MeetupForm';

const NewMeetup = () => {
  const addMeetupHandler = (data) => {
    fetch(
      'https://portfolio-5220b-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  };

  return (
    <section>
      <h2>Add New Meetup</h2>
      <MeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetup;
