import React from 'react';
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import './server';
import Layout from './components/Layout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Dashboard from './pages/Host/Dashboard';
import HostLayout from './components/HostLayout';
import HostVans from './pages/Host/HostVans';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanInfo from './pages/Host/HostVanInfo';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVanPricing';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          {/* below route are the child routes of parent route <Layout /> element */}
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='vans' element={<Vans />} />
          <Route path='vans/:id' element={<VanDetail />} />

          <Route path='host' element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path='income' element={<Income />} />
            <Route path='reviews' element={<Reviews />} />
            <Route path='vans' element={<HostVans />} />
            
            <Route path='vans/:id' element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />}/>
              <Route path='pricing' element={<HostVanPricing />}/> 
              <Route path='photos' element={<HostVanPhotos />} />
            </Route>

            
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
