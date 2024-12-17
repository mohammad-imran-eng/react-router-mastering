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
import ProductDetails from './components/ProductDetails';
import UserProfile from './components/UserProfile';
import UserOrder from './components/UserOrder';
import ProtectedRoute from './Routes/ProtectedRoute';

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
          path: '/userprofile',
          element: <UserProfile />
        },
        {
          path: '/dashboard',
          element: <ProtectedRoute />,
          children: [
            {
              path: 'user/profile',
              element: <UserProfile />
            },
            {
              path: 'user/orders',
              element: <UserOrder />
            }
          ]
        },
        {
          path: '/',
          element: <Product />
        },
        {
          path: '/signin',
          element: <SignIn />
        },
        {
          path: '/signout',
          element: <SignIn />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/product/:id',
          element: <ProductDetails />
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
