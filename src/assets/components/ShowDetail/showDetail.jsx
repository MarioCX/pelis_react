// ShowDetail.jsx
import React from "react";
import { useParams } from "react-router-dom";

function ShowDetail({ showData }) {
  const { id } = useParams(); // Obtén el ID de la tarjeta desde la URL

  // Busca la tarjeta correspondiente en showData utilizando el ID
  const show = showData.find((show) => show.show.id.toString() === id);

  if (!show) {
    return <div>Tarjeta no encontrada</div>;
  }

  return (
    <div className="showContainer p-4">
      <h2>Detalles de la Tarjeta</h2>
      <div className="card card-sm">
        <img
          src={show.show.image.medium}
          className="card-img-top"
          alt={show.show.name}
        />
        <div className="card-body">
          <h5 className="card-title">{show.show.name}</h5>
          {/* Muestra más detalles de la tarjeta aquí */}
          <p>{show.show.summary}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowDetail;
