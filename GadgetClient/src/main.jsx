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
import PrivateRouter from './Page/PrivateRoute/PrivateRoute.jsx';
import ServicesPage from './Page/ServicesPage/ServicesPage.jsx';
import AboutUs from './Page/AboutUs/AboutUs.jsx';
import NannyDashboard from './Page/NanyDashboard/NannyDashboard/NannyDashboard.jsx';
import NannyProfile from './Page/NanyDashboard/NannyProfile/NannyProfile.jsx';
import AddPost from './Page/NanyDashboard/AddPost/AddPost.jsx';
import MyPosts from './Page/NanyDashboard/MyPosts/MyPosts.jsx';
import PostDetails from './Page/NanyDashboard/MyPosts/PostDetails.jsx';
import SettingsPosts from './Page/NanyDashboard/SettingsPosts/SettingsPosts.jsx';
import Updated from './Page/NanyDashboard/AddPost/Updated.jsx';
import ServicesCommentPage from './Page/ServicesPage/ServicesCommentPage.jsx';
import BidRequest from './Page/NanyDashboard/BidRequest/BidRequest.jsx';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ParentsBids from './Page/ParentsDashboard/ParentsBids/ParentsBids.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/ServicesPage",
        element: <ServicesPage/>
      },
      {
        path: "/ServicesCommentPage/:id",
        element: <ServicesCommentPage/>
      },
      {
        path: "/AboutUs",
        element: <AboutUs/>
      }

    ],
  },
  {
    path: "/NannyDashboard",
    element: <NannyDashboard/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/NannyDashboard/NannyProfile",
        element: (
          <PrivateRouter>
            <NannyProfile/>,
          </PrivateRouter>
        )
      },
      {
        path: "/NannyDashboard/MyPosts",
        element: (
          <PrivateRouter>
            <MyPosts/>,
          </PrivateRouter>
        )
      },
      {
        path: "/NannyDashboard/AddPost",
        element: (
          <PrivateRouter>
            <AddPost/>
          </PrivateRouter>
        ),
      },
      {
        path: "/NannyDashboard/PostDetails/:id",
        element: (
          <PrivateRouter>
            <PostDetails/>
          </PrivateRouter>
        ),
      },
      {
        path: "/NannyDashboard/SettingsPosts",
        element: (
          <PrivateRouter>
            <SettingsPosts/>
          </PrivateRouter>
        ),
      },
      {
        path: "/NannyDashboard/Updated/:id",
        element: (
          <PrivateRouter>
            <Updated/>
          </PrivateRouter>
        ),
      },
      {
        path: "/NannyDashboard/BidRequest",
        element: (
          <PrivateRouter>
            <BidRequest />
          </PrivateRouter>
        ),
      },
      {
        path: "/NannyDashboard/ParentsBids",
        element: (
          <PrivateRouter>
            <ParentsBids />
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

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <HelmetProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </HelmetProvider>
    </AuthProvider>
  </StrictMode>,
)
