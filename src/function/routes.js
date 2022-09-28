import React from 'react'
import { Routes, Route } from "react-router-dom";
import App from "../App";


import HomePage from '../pages/Home';
import ServicePage from '../pages/services';
import ContactusPage from '../pages/Contactus';




const ConfigRoutes = () => {
  return (
    <>
        <Routes> 
            <Route path="/" element={<App />} />
            <Route path="/home" element={<HomePage />}  />
            <Route path="/services" element={<ServicePage />} />
            <Route path="/contactus" element={<ContactusPage />} />

``
        
        </Routes>
    </>
  )
}

export default ConfigRoutes