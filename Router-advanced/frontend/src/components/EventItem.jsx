import React from 'react';
import classes from './EventItem.module.css';
import { Link, useSubmit } from 'react-router-dom';

const EventItem = ({ event }) => {
  const submit = useSubmit();
  function startDeleteHandler() {
    if (window.confirm('Are you sure you want to delete this event?')) {
      submit(null, { method: 'DELETE' });
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1 className='text-2xl font-bold'>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
