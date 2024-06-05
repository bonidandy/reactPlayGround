import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Home from './pages/home.jsx';
import Product from './pages/product.jsx';
import SignUpPage from './pages/register.jsx';
import LoginPage from './pages/login.jsx';
import LoginBackupCode from './components/fragments/codelamalogin.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path:"/signup",
    element: <SignUpPage/>
  },
  {
    path:"/product",
    element:<Product/>
  },
  {
    path:"/login",
    element:<LoginPage/>
  },
  {
    path:"codelamalogin",
    element:<LoginBackupCode/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
