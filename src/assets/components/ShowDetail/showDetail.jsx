// ShowDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShowDetails } from "../../services/api";

function ShowDetail() {
  const { id } = useParams(); // Obtén el ID de la tarjeta desde la URL
  const [show, setShow] = useState(null); // Estado para almacenar los datos de la tarjeta

  useEffect(() => {
    fetchShowDetails(id) // Llama a la nueva función para obtener detalles del programa
      .then((data) => setShow(data))
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
    <div className="card mb-3" style={{ maxWidth: 540 }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={show.image.medium}
            className="img-fluid rounded-start"
            alt={show.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{show.name}</h5>
            <p className="card-text">{show.genres.join(", ")}</p>
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
  );
}

export default ShowDetail;
