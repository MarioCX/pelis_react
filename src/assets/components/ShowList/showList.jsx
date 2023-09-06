import React, { useEffect, useState } from "react";
import { fetchShows } from "../../services/api";
import "./showList.css";

function ShowList() {
  const [showData, setShowData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [resultsToShow, setResultsToShow] = useState(6);

  useEffect(() => {
    fetchShows(searchTerm)
      .then((data) => setShowData(data))
      .catch((error) =>
        console.error("Error al obtener datos de la API", error)
      );
  }, [searchTerm]);

  const handleSearch = () => {
    setSearchTerm(searchTerm);
  };

  const handleShowMore = () => {
    // Aumenta la cantidad de resultados a mostrar
    setResultsToShow(resultsToShow + 6);
  };

  return (
    <div className="showContainer p-4">
      <div className="container text-center mt-5">
        <h1 className="display-4">Descubre tus series y películas 🍿🎬</h1>
        <div className="input-group input-group-lg mt-3">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="Buscar series o películas"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button
            className="btn btn-primary rounded-pill"
            type="button"
            onClick={handleSearch}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </div>
      </div>
      <h2 className="text-center mt-5">Lista de Shows:</h2>
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {showData.slice(0, resultsToShow).map((show) => (
          <div className="col mb-4" key={show.show.id}>
            <a href={`/pelicula/${show.show.id}`} className="card-link">
              <div className="card card-sm h-100">
                <img
                  src={show.show.image?.medium}
                  className="card-img-top rounded"
                  alt={show.show.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{show.show.name}</h5>
                  <p className="card-text text-muted">
                    {show.show.genres.join(", ")}
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
      {resultsToShow < showData.length && (
        <div className="text-center mt-4">
          <button
            className="btn btn-primary"
            onClick={handleShowMore}
          >
            Mostrar más resultados
          </button>
        </div>
      )}
    </div>
  );
}

export default ShowList;
