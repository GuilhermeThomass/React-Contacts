import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import ErrorPage from './pages/ErrorPage'
import NavBar from './pages/Navbar'
import ContactPage from './pages/ContactPage'
import NewContactPage from './pages/NewContactPage'

const router = createBrowserRouter([{
  path: '/',
  element: <NavBar/>,
  errorElement: <ErrorPage/>,
  children:[
    {
      path:'/contact/:id',
      element:<ContactPage/>
    },
    {
      path:'/contact/new',
      element: <NewContactPage/>
    }
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)