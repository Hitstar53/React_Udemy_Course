import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { uiActions } from './store/UISlice'
import { sendCartData, fetchCartData } from './store/cartActions'
import Cart from './components/Cart/Cart'
import Layout from './components/Layout/Layout'
import Products from './components/Shop/Products'
import Notification from './components/UI/Notification'
import './App.css'

let loadNumber = 1

const App = () => {
  const showCart = useSelector((state) => state.ui.showCart)
  const cart = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (loadNumber <= 2) {
      loadNumber++
      return
    }
    if (cart.changed) {
      dispatch(
        sendCartData({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        })
      )
    }
  }, [cart, dispatch])
      
  return (
    <React.Fragment>
      {notification && (
        <Notification
        status={notification.status}
        title={notification.title}
        message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </React.Fragment>
  )
}

export default App