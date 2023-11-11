import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import Dashboard from './pages/dashboard'
import Home from './pages/home'
const router = createBrowserRouter([
  {
    path:'/auth/login',
    element: <Login />,
  },
  {
    path:'/auth/signup',
    element: <Signup />,
  },
  {
    path: '/',
    element: <Dashboard />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ]
  }
])

function App() {

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
