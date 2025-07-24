import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Layout from '../components/Layout';
import HeroSection from '../components/HeroSection';
import Blogs from '../components/Blogs';
import AboutMe from '../components/AboutMe';
import ProjectSection from '../components/ProjectSection';
import ContactMe from '../components/ContactMe';

import NotFound from '../components/NotFound';

import { HelmetProvider } from 'react-helmet-async';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <><HeroSection /><AboutMe /><ProjectSection /><ContactMe /></> },
      { path: 'blogs', element: <Blogs /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
