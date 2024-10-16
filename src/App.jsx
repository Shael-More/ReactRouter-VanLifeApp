import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  redirect,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans, { loader as vansLoader } from './pages/Vans/Vans';
import VanDetail, { loader as vanDetailLoader } from './pages/Vans/VanDetail';
import './server';
import Layout from './components/Layout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Dashboard from './pages/Host/Dashboard';
import HostLayout from './components/HostLayout';
import HostVans, { loader as hostVanLoader } from './pages/Host/HostVans';
import HostVanDetail, {
  loader as hostVanDetailLoader,
} from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVanPricing';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './components/ErrorPage';
import Login, {
  loader as loginLoader,
  action as loginAction,
} from './pages/Login';
import { requireAuth } from './utils';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      {/* below route are the child routes of parent route <Layout /> element */}

      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route
        path='login'
        element={<Login />}
        loader={loginLoader}
        action={loginAction}
      />
      <Route
        path='vans'
        element={<Vans />}
        loader={vansLoader}
        errorElement={<ErrorPage />}
      />
      <Route path='vans/:id' element={<VanDetail />} loader={vanDetailLoader} />

      {/* I want this whole routes as protected routes */}
      <Route path='host' element={<HostLayout />}>
        <Route
          index
          element={<Dashboard />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route
          path='income'
          element={<Income />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route
          path='reviews'
          element={<Reviews />}
          loader={async ({request}) => await requireAuth(request)}
        />
        <Route path='vans' element={<HostVans />} loader={hostVanLoader} />

        <Route
          path='vans/:id'
          element={<HostVanDetail />}
          loader={hostVanDetailLoader}
        >
          <Route
            index
            element={<HostVanInfo />}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route
            path='pricing'
            element={<HostVanPricing />}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route
            path='photos'
            element={<HostVanPhotos />}
            loader={async ({request}) => await requireAuth(request)}
          />
        </Route>
      </Route>

      {/* 404 Not Found Page - * catch all route if non match */}
      <Route path='*' element={<NotFoundPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
