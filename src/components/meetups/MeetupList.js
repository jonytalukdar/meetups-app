import React from 'react';
import MeetupItem from './MeetupItem';
import classes from './MeetupLIst.module.css';
const MeetupList = ({ meetups }) => {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup, index) => {
        return <MeetupItem key={index} meetup={meetup} />;
      })}
    </ul>
  );
};

export default MeetupList;
