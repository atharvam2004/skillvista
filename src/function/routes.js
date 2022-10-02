import React from "react";
import { Routes, Route } from "react-router-dom";
import App from "../App";

import ServicePage from "../pages/services";
import ContactusPage from "../pages/Contactus";
import TermsPage from "../pages/termsconditions";

import ProjectsPage from "../pages/Ourprojects";

const ConfigRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contactus" element={<ContactusPage />} />
        <Route path="/terms" element={<TermsPage />} />
        {/* <Route path="/projects" element={<ProjectsPage />} /> */}
        ``
      </Routes>
    </>
  );
};

export default ConfigRoutes;
