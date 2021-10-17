import React from 'react';
import classes from './MeetupForm.module.css';

const MeetupForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" name="address" />
      </div>
      <div className={classes.control}>
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description"></textarea>
      </div>
      <div className={classes.actions}>
        <button>Add Meetup</button>
      </div>
    </form>
  );
};

export default MeetupForm;
