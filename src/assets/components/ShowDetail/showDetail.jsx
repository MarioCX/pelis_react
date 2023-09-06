import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchShowDetails } from "../../services/api";
import { fetchShowDetailsEpisodies } from "../../services/api";
import "./showDetail.css";

function ShowDetail() {
  const { id } = useParams();
  const [show, setShow] = useState([]);
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchShowDetails(id)
      .then((data) => setShow(data))
      .catch((error) =>
        console.error("Error al obtener detalles de la tarjeta", error)
      );
  }, [id]);

  useEffect(() => {
    fetchShowDetailsEpisodies(id)
      .then((data) => setEpisodes(data))
      .catch((error) =>
        console.error("Error al obtener detalles de los episodios", error)
      );
  }, [id]);

  if (!show) {
    return (
      <div className="card" aria-hidden="true">
        {/* Renderización de carga */}
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
      </div>
    );
  }

  // Organiza los episodios por temporada
  const episodesBySeason = episodes.reduce((acc, episode) => {
    const season = episode.season || "No especificado";
    if (!acc[season]) {
      acc[season] = [];
    }
    acc[season].push(episode);
    return acc;
  }, {});

  return (
    <div>
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
                <p
                  className="card-text"
                  dangerouslySetInnerHTML={{ __html: show.summary }}
                ></p>
                <p className="card-text">
                  <small className="text-body-secondary">
                    Lanzamiento: {show.premiered}
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Episodios */}

      <div className="container-fluid">
        <div className="accordion" id="accordionEpisodes">
          {Object.keys(episodesBySeason).map((season) => (
            <div className="accordion-item" key={season}>
              <h2 className="accordion-header">
                <button
                  className="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapseSeason-${season}`}
                  aria-expanded="true"
                  aria-controls={`collapseSeason-${season}`}
                >
                  Temporada {season}
                </button>
              </h2>
              <div
                id={`collapseSeason-${season}`}
                className="accordion-collapse collapse"
                aria-labelledby={`headingSeason-${season}`}
                data-bs-parent="#accordionEpisodes"
              >
                <div className="accordion-body">
                  <ul className="list-group">
                    {episodesBySeason[season].map((episode) => (
                      <li className="list-gruop-item" key={episode.id}>
                        <h5>{episode.name}</h5>
                        <p
                          className="card-text"
                          dangerouslySetInnerHTML={{ __html: show.summary }}
                        ></p>
                        <small className="text-body-secondary">
                          Season {episode.season}, Episode {episode.number}
                        </small>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ShowDetail;
