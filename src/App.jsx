//App.jsx
import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Header from "./assets/components/Header/header";
import ShowList from "./assets/components/ShowList/showList";
import ShowDetail from "./assets/components/ShowDetail/showDetail";
import Footer from "./assets/components/Footer/footer";
import PageNotFound from "./assets/components/NotFoundPage/notFoundPage";


function App() {
  return (
    <BrowserRouter>
      <div className="containerBody">
        <Header />
        <Routes>
          <Route path="/" element={<ShowList/>} />
          <Route path="/pelicula/:id" element={<ShowDetail/>} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </div>
        <Footer />
    </BrowserRouter>
  );
}

export default App;