// SearchResults.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShows } from "../../services/api";

function SearchResults() {
  const { term } = useParams(); // Obtén el término de búsqueda desde la URL
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Llama a la función fetchShows para obtener los resultados de búsqueda
    fetchShows(term)
      .then((data) => setSearchResults(data))
      .catch((error) =>
        console.error("Error al obtener resultados de búsqueda", error)
      );
  }, [term]);

  return (
    <div className="container mt-4">
      <h2>
        Resultados de búsqueda para
        <span className="text-primary"> {term}</span>
      </h2>

      {/* Renderiza los resultados de búsqueda aquí */}
      <div className="showContainer p-4">
        <h2>Lista de Shows</h2>
        <div className="row row-cols-1 row-cols-md-6 g-4">
          {searchResults.map((result) => (
            <div className="col mb-4" key={result.show.id}>
              <a href={`/detalle/${result.show.id}`} className="card-link">
                <div className="card card-sm h-100">
                  <img
                    src={result.show.image.medium}
                    className="card-img-top"
                    alt={result.show.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{result.show.name}</h5>
                    <p className="card-text">{result.show.genres.join(", ")}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;
