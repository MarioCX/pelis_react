// routes.js
import React from "react";
import { Route, Routes } from "react-router-dom";

import ShowList from "../components/ShowList/showList";
import ShowDetail from "../components/ShowDetail/showDetail";
import SearchResults from "../components/SearchResults/sarchResults";


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ShowList />} />
      <Route path="/detalle/:id" element={<ShowDetail />} />
      <Route path="/search/:term" element={<SearchResults />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
