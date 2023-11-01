import React from 'react'
import { useRouteError } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const ErrorPage = () => {
  const error = useRouteError()
  let title = 'An error occurred'
  let message = 'Please try again later'
  if (error.status === 404) {
    title = 'Page not found'
    message = error.data.message || 'The page you requested could not be found'
    // message = JSON.parse(error.data).message
  }
  return (
    <>
      <MainNavigation />
      <div className="flex flex-col gap-4 h-[calc(100vh-96px)] items-center justify-center">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <p className="text-xl text-gray-400">
            {message}
          </p>
      </div>
    </>
  )
}

export default ErrorPage