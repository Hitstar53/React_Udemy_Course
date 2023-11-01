import React from 'react'
import { useSelector } from 'react-redux'

import Counter from './components/Counter'
import Header from './components/Header'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'
import './App.css'

const App = () => {
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  return (
    <div>
      <React.Fragment>
        <Header />
        {!isAuth && <Auth />}
        {isAuth && <UserProfile />}
        <Counter />
      </React.Fragment>
    </div>
  )
}

export default App