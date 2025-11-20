import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Menu from './components/Menu';
import AboutUs from './components/AboutUs';
import Coffee from './components/Coffee';
import Sidesnbites from './components/Sidesnbites';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
  },

  {
    path: '/menu',
    element: (
      <>
        <Navbar />
        <Menu />
      </>
    ),
  },

  {
    path: '/menu/coffee',
    element: (
      <>
        <Navbar />
        <Coffee />
      </>
    ),
  },

  {
    path: '/menu/sidesnbites',
    element: (
      <>
        <Navbar />
        <Sidesnbites />
      </>
    ),
  },

  {
    path: '/aboutus',
    element: (
      <>
        <Navbar />
        <AboutUs />
      </>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
