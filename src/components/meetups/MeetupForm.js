import React from 'react';
import Card from '../UI/Card';
import classes from './MeetupForm.module.css';

const MeetupForm = () => {
  return (
    <Card>
      <form className={classes.form}>
        <div className={classes.control}>
          <label htmlFor="title">Title</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Image</label>
          <input type="url" id="image" name="image" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            rows="4"
            required
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Add Meetup</button>
        </div>
      </form>
    </Card>
  );
};

export default MeetupForm;
