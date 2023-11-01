import React from 'react'
import RootLayout from './pages/Root'
import ErrorPage from './pages/ErrorPage'
import Home from './pages/home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import { createBrowserRouter, RouterProvider, createRoutesFromElements } from 'react-router-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'

//approach 2
// const routes = createRoutesFromElements(
//   <Route>
//     <Route path='/' element={<Home />} />,
//     <Route path='/products' element={<Products />} />
//   </Route>
// )

// const router = createBrowserRouter(routes)

//approach 1
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {index: true, element: <Home />},
      {path: 'products', element: <Products />},
      {path: 'products/:productId', element: <ProductDetail />}
    ],
    errorElement: <ErrorPage />
  },
])

const App = () => {
  return (
    <RouterProvider router={router} />
    // Approach (old)
    // <Router>
    //   <Routes>
    //     <Route path='/' element={<Home />} />
    //     <Route path='/products' element={<Products />} />
    //   </Routes>
    // </Router>
  );
}

export default App