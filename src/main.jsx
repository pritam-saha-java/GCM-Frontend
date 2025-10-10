import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import App from './App';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import Login from './components/LoginForm';
import './index.css';
import SetMeal from './components/SetMeal';
import About from './components/About';
import FAQ from './components/FAQ';
import Affiliate from './components/Affiliate';
import PrivecyPolicy from './components/PrivecyPolicy';
import TermsOfService from './components/TermsOfService';
import WhatIsCryptocurrency from './components/WhatIsCryptocurrency';
import Management from './components/Management';
import Members from './components/Members';
import Events from './components/Events';
import Contacts from './components/Contacts';
import LiveStream from './components/LiveStream';
import LiveScores from './components/LiveScores';
import OurClients from './components/OurClients';
import Gallery from './components/Gallery';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Toaster position="top-right" reverseOrder={false} />

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/setmeal" element={<SetMeal />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/affiliate" element={<Affiliate />} />
        <Route path="/privacy-policy" element={<PrivecyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/what-is-cryptocurrency" element={<WhatIsCryptocurrency />} />
        <Route path="/management" element={<Management />} />
        <Route path="/members" element={<Members />} />
        <Route path="/event" element={<Events />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/live-stream" element={<LiveStream />} />
        <Route path="/live-scoring" element={<LiveScores />} />
        <Route path="/our-clients" element={<OurClients />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
