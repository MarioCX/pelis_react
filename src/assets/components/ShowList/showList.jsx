// ShowList.jsx
import React from "react";
import { Link } from "react-router-dom";

function ShowList({ showData }) {
  return (
    <div className="showContainer p-4">
      <h2>Lista de Shows</h2>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {showData.map((show) => (
          <div className="col mb-4" key={show.show.id}>
            <Link to={`/detalle/${show.show.id}`} className="card-link">
              <div className="card card-sm h-100">
                <img
                  src={show.show.image.medium}
                  className="card-img-top"
                  alt={show.show.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{show.show.name}</h5>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShowList;
