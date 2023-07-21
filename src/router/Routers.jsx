import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "../../src/pages/Home";
import Tours from "../../src/pages/Home";
import TourDetails from "../../src/pages/Home";
import Login from "../../src/pages/Home";
import Register from "../../src/pages/Home";
import SearchList from "../../src/pages/Home";

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={Home} />
      <Route path="/tours" element={Tours} />
      <Route path="/tours/:id" element={TourDetails} />
      <Route path="/login" element={Login} />
      <Route path="/" element={Register} />
      <Route path="/tours/search" element={SearchList} />
    </Routes>
  );
};

export default Routers;
