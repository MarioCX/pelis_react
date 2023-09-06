//App.jsx
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./assets/components/Header/header";
import ShowList from "./assets/components/ShowList/showList";
import ShowDetail from "./assets/components/ShowDetail/showDetail";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<ShowList/>} />
          <Route path="/pelicula/:id" element={<ShowDetail/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;