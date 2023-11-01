import React from 'react'
import { Outlet } from 'react-router-dom'
import MainNavigation from '../components/MainNavigation'

const RootLayout = () => {
  return (
    <>
        <MainNavigation />
        <main className='container mx-auto px-10 py-5'>
            <Outlet />
        </main>
    </>
  )
}

export default RootLayout