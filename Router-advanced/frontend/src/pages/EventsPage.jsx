import { useEffect, useState } from "react";
import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if (data.isError) {
  //   return <p>{data.message}</p>;
  // }

  const events = data.events;
  
  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/events");
  if (!response.ok) {
    // throw new Error(response.statusText);
    // return { isError: true, message: response.statusText };
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: response.status,
    // });
    throw json({ message: "Could not fetch events" }, { status: response.status });
  } else {
    return response;
  }
}