import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/RootLayout'
import HomePage from './pages/HomePage'
import EventLayout from './pages/EventLayout'
import EventsPage, {loader as eventsloader} from './pages/EventsPage'
import EventDetailPage, { loader as eventdetailloader, action as deleteEventAction } from './pages/EventDetailPage'
import NewEventPage from './pages/NewEventPage'
import { action as manipulateEventAction } from './components/EventForm'
import EditEventPage from './pages/EditEventPage'
import ErrorPage from './pages/ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {
        path: 'events',
        element: <EventLayout />,
        children: [
          {index: true, element: <EventsPage />, loader: eventsloader},
          {path: 'new', element: <NewEventPage />, action: manipulateEventAction},
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventdetailloader,
            children: [
              {index: true, element: <EventDetailPage />, action: deleteEventAction},
              {path: 'edit', element: <EditEventPage />, action: manipulateEventAction},
            ],
          },
        ],
      },
    ],
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App