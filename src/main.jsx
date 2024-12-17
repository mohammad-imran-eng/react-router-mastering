import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import Navbar from './Layout/Navbar';

import './index.css'
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';

const router = createBrowserRouter([
  {
      path: '/',
      element: <Navbar />,
      children: [
        {
          path: '/about',
          element: <About />
        },
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/signin',
          element: <SignIn />
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/product',
          element: <Product />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
  },

  
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
