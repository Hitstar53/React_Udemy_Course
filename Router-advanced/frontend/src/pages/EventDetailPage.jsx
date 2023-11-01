import React from 'react'
import EventItem from '../components/EventItem'
import { json, useParams, useRouteLoaderData, redirect } from 'react-router-dom'

const EventDetailPage = () => {
  const { event } = useRouteLoaderData("event-detail")
  return (
    <EventItem event={event} />
  )
}

export default EventDetailPage

export async function loader({ params }) {
  const response = await fetch(`http://localhost:8080/events/${params.eventId}`)
  if (!response.ok) {
    throw json({ message: 'Could not fetch event' }, { status: response.status })
  } else {
    return response
  }
}

export async function action({ params, request }) {
  const response = await fetch(`http://localhost:8080/events/${params.eventId}`, {
    method: request.method,
  })
  if (!response.ok) {
    throw json({ message: 'Failed to delete event' })
  }
  return redirect('/events')
}