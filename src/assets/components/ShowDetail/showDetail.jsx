// ShowDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShowDetails } from "../../services/api";
import { fetchShowDetailsEpisodies } from "../../services/api";
import "./showDetail.css";

function ShowDetail() {
  const { id } = useParams(); // Obtén el ID de la tarjeta desde la URL
  const [show, setShow] = useState([]); // Estado para almacenar los datos de la tarjeta
  const [episodies, setEpisodies] = useState([]); // Estado para almacenar los datos de la tarjeta

  useEffect(() => {
    fetchShowDetails(id) // Llama a la nueva función para obtener detalles del programa
      .then((data) => setShow(data))
      .catch((error) =>
        console.error("Error al obtener detalles de la tarjeta", error)
      );
  }, [id]);

  useEffect(() => {
    fetchShowDetailsEpisodies(id) // Llama a la nueva función para obtener detalles del programa
      .then((data) => setEpisodies(data))
      .catch((error) =>
        console.error("Error al obtener detalles de la tarjeta", error)
      );
  }, [id]);

  if (!show) {
    return (
      <div className="card" aria-hidden="true">
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6" />
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7" />
            <span className="placeholder col-4" />
            <span className="placeholder col-4" />
            <span className="placeholder col-6" />
            <span className="placeholder col-8" />
          </p>
          <a
            className="btn btn-primary disabled placeholder col-6"
            aria-disabled="true"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="w-100 p-3">
      <div className="card">
        <div className="row g-0">
          <div className="col-md-4">
            {show && show.image && show.image.medium && (
              <img
                src={show.image.medium}
                className="img-fluid rounded-start"
                alt={show.name}
              />
            )}
          </div>
          <div className="col-md-8">
            <div className="card-div">
              <h5 className="card-title">{show.name}</h5>
              {show && show.genres && (
                <p className="card-text">{show.genres.join(", ")}</p>
              )}
              <p className="card-text">{show.summary}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                  Lanzamiento: {show.premiered}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Episodios */}
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action active"
          aria-current="true"
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Episodios</h5>
            <small>3 days ago</small>
          </div>
          {episodies.map((episode) => (
            <div key={episode.id}>
              <h5 className="mb-1">{episode.name}</h5>
              <p className="mb-1">{episode.summary}</p>
              <small className="text-body-secondary">
                Season {episode.season}, Episode {episode.number}
              </small>
            </div>
          ))}
        </a>
      </div>
    </div>
  );
}

export default ShowDetail;
