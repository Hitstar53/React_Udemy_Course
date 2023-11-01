import React from 'react'

const ErrorPage = () => {
  return (
    <div className="flex flex-col gap-4 h-screen items-center justify-center">
        <h1 className="text-4xl font-semibold">404 Page Not Found</h1>
        <p className="text-xl text-gray-400">
            Check your URL
        </p>
    </div>
  )
}

export default ErrorPage