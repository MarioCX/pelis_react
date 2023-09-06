import React from "react";
import "./notFoundPage.css";

function PageNotFound() {
  return (
    <div className="page-not-found">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3 text-center">
            <h1 className="display-1">404</h1>
            <h2>Página no encontrada</h2>
            <p>Lo sentimos, la página que estás buscando no existe.</p>
            <a href="/" className="btn btn-primary">
              Volver a la página de inicio
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
