// App.jsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import ShowList from "./assets/components/ShowList/showList";
import ShowDetail from "./assets/components/ShowDetail/showDetail";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<ShowList />} />
        <Route path="/detalle/:id" element={<ShowDetail />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

