import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import PreLogin from './Pages/login.jsx'
import PreRegister from './Pages/register.jsx'
import Cards from './Pages/cards.jsx'
import Ngitung from './Pages/count.jsx'


const router = createBrowserRouter([
  {
    path : "/",
    element : <div>hallo pantek</div>
  },
  {
    path : "/login",
    element : <PreLogin />
  },
  {
    path : "/register",
    element : <PreRegister />
  },
  {
    path : "/kartu",
    element : <Cards />
  },
  {
    path : '/count',
    element : <Ngitung />
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
