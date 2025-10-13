import Layout from './components/Layout'
import AuthRequired from './components/AuthRequired'
import Home from './pages/Home'
import Login from './pages/Login'
import About from './pages/About'
import Vans from './pages/Vans/Vans'
import VanDetail from './pages/Vans/VanDetail'
import HostLayout from './components/HostLayout'
import Dashboard from './pages/Host/Dashboard'
import Income from './pages/Host/Income'
import Reviews from './pages/Host/Reviews'
import HostVans from './pages/Host/HostVans'
import NotFound from './pages/NotFound'
import HostVanDetailLayout from './components/HostVanDetailLayout'
import HostVanDetailInfo from './pages/Host/HostVanDetail/HostVanDetailInfo'
import HostVanDetailPricing from './pages/Host/HostVanDetail/HostVanDetailPricing'
import HostVanDetailPhotos from './pages/Host/HostVanDetail/HostVanDetailPhotos'
import './App.css'


import { BrowserRouter, Routes, Route } from 'react-router'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route element={<AuthRequired />}>
            <Route path="host" element={<HostLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="income" element={<Income />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="vans" element={<HostVans />} />
              <Route path="vans/:id" element={<HostVanDetailLayout />}>
                <Route index element={<HostVanDetailInfo />} />
                <Route path="pricing" element={<HostVanDetailPricing />} />
                <Route path="photos" element={<HostVanDetailPhotos />} />
              </Route>
            </Route>
          </Route>
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
