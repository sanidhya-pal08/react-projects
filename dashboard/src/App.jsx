import React from 'react'

import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import Settings from './components/Settings'
import User from './components/User'
import Orders from './components/Orders'
import Layout1 from './components/Layout1'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout1 />,
    children: [
      { index: true, element: <Dashboard /> }, 
      { path: "settings", element: <Settings /> },
      { path: "user", element: <User /> },
      { path: "orders", element: <Orders /> }
    ]
  }
])
const App = () => {
  return <RouterProvider router={router}/>
      
 
}

export default App

