// ShowList.jsx
import React, { useEffect, useState } from "react";
import { fetchShows } from "../../services/api";
import "./showList.css";


function ShowList() {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    // Llama a la función fetchShows para obtener los datos
    fetchShows("boys")
      .then((data) => setShowData(data))
      .catch((error) => console.error("Error al obtener datos de la API", error));
  }, []);
  // El segundo argumento [] asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <div className="showContainer p-4">
      <h2>Lista de Shows</h2>
      <div className="row row-cols-1 row-cols-md-6 g-4">
        {showData.map((show) => (
          <div className="col mb-4" key={show.show.id}>
            <a href={`/detalle/${show.show.id}`} className="card-link">
              <div className="card card-sm h-100">
                <img
                  src={show.show.image.medium}
                  className="card-img-top"
                  alt={show.show.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{show.show.name}</h5>
                  <p className="card-text">{show.show.genres.join(", ")}</p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
