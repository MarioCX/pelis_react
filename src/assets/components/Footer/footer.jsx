import React from "react";

function Footer() {
  return (
    <footer className="bg-light">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5>Redes Sociales</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://www.whatsapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i> WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i> Instagram
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i> LinkedIn
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Otros Enlaces</h5>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/about"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
