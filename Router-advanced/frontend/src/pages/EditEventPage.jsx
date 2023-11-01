import React from 'react'
import { useRouteLoaderData } from 'react-router-dom'
import EventForm from '../components/EventForm'

const EditEventPage = () => {
  const { event } = useRouteLoaderData("event-detail")
  return (
    <EventForm event={event} method="patch" />
  )
}

export default EditEventPage