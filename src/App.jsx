import { useState } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/auth/login'
import Signup from './pages/auth/signup'
import Dashboard from './pages/layout'
import Home from './pages/home'
import Activity from './pages/activity/index'
import Help from './pages/help/index'
import Settings from './pages/settings/index'
import Send from './pages/send/index'
import Wallet from './pages/wallet/index'
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
      {
        path: '/activity',
        element: <Activity />,
      },
      {
        path: '/help',
        element: <Help />
      },
      {
        path: '/settings',
        element: <Settings />
      },
      {
        path: '/wallet',
        element: <Wallet />
      },
      {
        path: '/send',
        element: <Send />
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
