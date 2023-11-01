import React from 'react'
import { Outlet } from "react-router-dom";
import EventsNavigation from '../components/EventsNavigation'

const EventLayout = () => {
  return (
    <>
      <EventsNavigation />
      <main className="container mx-auto px-10 py-5">
        <Outlet />
      </main>
    </>
  );
}

export default EventLayout