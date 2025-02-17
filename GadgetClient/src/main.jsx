import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Login from './Page/Login/Login';
import Register from './Page/Register/Register';
import ErrorPage from './Page/ErrorPage/ErrorPage.jsx';
import Home from './Page/Home/Home.jsx';
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import Practice from './Page/Practice/Practice.jsx';
import UpdatePage from './Page/Practice/UpdatePage.jsx';
import PrivateRouter from './Page/PrivateRoute/PrivateRoute.jsx';
import ServicesPage from './Page/ServicesPage/ServicesPage.jsx';
import AboutUs from './Page/AboutUs/AboutUs.jsx';
import NannyDashboard from './Page/NanyDashboard/NannyDashboard/NannyDashboard.jsx';
import NannyProfile from './Page/NanyDashboard/NannyProfile/NannyProfile.jsx';
import AddPost from './Page/NanyDashboard/AddPost/AddPost.jsx';
import MyPosts from './Page/NanyDashboard/MyPosts/MyPosts.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Practice",
        element: <Practice />,
      },
      {
        path: "/UpdatePage/:id",
        element: <PrivateRouter>
          <UpdatePage />
        </PrivateRouter>
      }
      , {
        path: "/ServicesPage",
        element: <ServicesPage />
      },
      {
        path: "/AboutUs",
        element: <AboutUs />
      }

    ],
  },
  {
    path: "/NannyDashboard",
    element: <NannyDashboard />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/NannyDashboard/NannyProfile",
        element: <NannyProfile />,
      },
      {
        path: "/NannyDashboard/MyPosts",
        element: <MyPosts />,
      },
      {
        path: "/NannyDashboard/AddPost",
        element: (
          <PrivateRouter>
            <AddPost />
          </PrivateRouter>
        ),
      },


    ],
  },

  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <RouterProvider router={router} />
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
